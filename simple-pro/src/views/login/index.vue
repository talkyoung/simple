<template>
  <div class="login">
    <el-card class="login-form-layout" style="background-color: #ffffff;border: none; opacity: 0.85;">
    <login-header/>
    <el-form ref="form" :model="loginForm" label-width="80px">
      <el-form-item label="用户名:">
        <el-input v-model="loginForm.username" type="text"/>
<!--        <span slot="prefix" >-->
<!--            <svg-icon icon-class="user" class="color-main"/>-->
<!--        </span>-->
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="loginForm.password" :type="pwdType"/>
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
  export default {
    name: 'login',
    components: { loginFooter, loginHeader },
    data () {
      return {
        loginForm: { username: '', password: '' },
        pwdType: 'password',
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
            console.log(successResponse);
            if (successResponse.code === 200) {
              this.$router.push({path:'/home'});
            }
          }).catch(err=> {
            alert(err);
            console.log(err);
          }
          )
      },
      hello(){
        hello().then(resp => {
          console.log(resp)
        });
      }
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
    width: 400px;
    height: 350px;
    margin: auto;
  }
</style>
