<template>
  <div class="login">
    <el-card class="login-form-layout" style="background-color: #ffffff;border: none; opacity: 0.85;">
        <login-header/>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
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
  import {hello,getUserRolePermission} from '../../utils/api'
  import {setToken, getToken, setUserId,removeToken,removeUserId} from '../../utils/auth'
  import { mapActions, mapGetters } from 'vuex'
  import {fieldIsNull,menuRender} from '../../common/js/public'
  import {constantRouterMap,createRouter} from '../../router/index'
  import {store} from '../../main'
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
          let menu = [];
          this.$refs.loginForm.validate(valid => {
              if(valid){
                  removeToken();
                  removeToken();
                  localStorage.clear();
                  store.dispatch('Login', this.loginForm).then(() => {
                      this.loading = false;
                      // getUserRolePermission(this.userId).then(res =>{
                      //     if (!this.isLoadRoutes) {
                      //         if(fieldIsNull(res.data )){
                      //             return
                      //         }
                      //         res.data.forEach(menuItem =>{
                      //             menu.push(menuRender(menuItem))
                      //         });
                      //
                      //         localStorage.setItem("permission",JSON.stringify(res.data));
                      //         this.appendMenu(Object.assign(menu));
                      //         this.$router.match = createRouter(constantRouterMap).match;
                      //         this.$router.options.routes.push( ...menu);
                      //         this.$router.addRoutes(router.options.routes);
                      //         this.loadRoutes();
                      //         location.reload();
                      //         this.$router.push({path: '/home'})
                      //     }
                      // })
                  }).catch(() => {
                      this.loading = false
                  })
              }else{
                  console.log('参数验证不合法！');
                  return false
              }
          });
          console.warn(menu);
      },
  //       login({
  //                 username: this.loginForm.username,
  //                 password: this.loginForm.password
  //             }).then(successResponse => {
  //           console.warn(successResponse);
  //           const data = successResponse.data;
  //           const tokenStr = data.tokenHead+data.token;
  //           const userId = data.userId;
  //           this.setToken(tokenStr);
  //           this.setUserId(userId);
  //           setToken(tokenStr);
  //           setUserId(userId);
  //           let token = getToken();
  //           console.warn("通过cookies-js设置token后进行获取"+token);
  //           this.$router.push({path:'/home'});
  //       }).catch(
  //       )
  //   }else{
  //         alert("请输入正确的账号信息！");
  // console.log('参数验证不合法！');
  // return false
  // }
      hello(){
        hello().then(resp => {
          console.log(resp)
        });
      },
        ...mapActions([
            'setToken',
            'setUserId',
            'appendMenu',
            'loadRoutes'
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
