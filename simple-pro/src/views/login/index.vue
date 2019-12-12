<template>
  <div class="login">
    <el-card class="login-form-layout" style="background-color: #ffffff;border: none; opacity: 0.85;">
        <login-header/>
        <el-form ref="form" :model="loginForm" :rules="loginRules" label-width="80px">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="loginForm.username" type="text" prefix-icon="el-icon-user-solid"/>
    <!--        <span slot="prefix" >-->
    <!--            <svg-icon icon-class="user" class="color-main"/>-->
    <!--        </span>-->
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="loginForm.password" :type="pwdType" prefix-icon="el-icon-more"/>
    <!--        <span slot="prefix">-->
    <!--            <svg-icon icon-class="password" class="color-main"/>-->
    <!--        </span>-->
    <!--        <span slot="suffix" @click="showPwd">-->
    <!--            <svg-icon icon-class="eye" class="color-main"/>-->
    <!--        </span>-->
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="login">Login</el-button>
            <el-button type="primary" v-on:click="hello">TestHello</el-button>
          </el-form-item>
        </el-form>
        <login-footer/>
    </el-card>
  </div>
</template>

<script>
  import loginFooter from './LoginFooter'
  import loginHeader from './LoginHeader'
  import {login,hello} from '../../utils/api'
  import {setToken,getToken} from '../../utils/auth'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'login',
    components: { loginFooter, loginHeader },
    data () {
        const validateUsername = (rule, value, callback) => {
            if (value.match(/^\s+$/) || value === '') {
                callback(new Error("请输入账号名称"))
            } else {
                callback()
            }
        };
        return {
            loginForm: { username: '', password: '' },
            pwdType: 'password',
            loginRules: {
                username: [{required: true, trigger: 'blur', validator: validateUsername}],
                password: [{required: true, trigger: 'blur', message: "请输入密码"}]
            },
        }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      login () {
        login({
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then(successResponse => {
            console.warn(successResponse);
            const data = successResponse.data;
            const tokenStr = data.tokenHead+data.token;
            this.setToken(tokenStr);
            setToken(tokenStr);
            let token = getToken();
            console.warn("通过cookies-js设置token后进行获取"+token);
            this.$router.push({path:'/home'});
        }).catch(
          )
      },
      hello(){
        hello().then(resp => {
          console.log(resp)
        });
      },
        ...mapActions([
            'setToken'
        ]),
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    overflow:hidden;
    background-color: #409EFF;
  }
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 450px;
    height: 350px;
    margin: auto;
  }
</style>
