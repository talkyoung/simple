<template>
  <div>
    <login-header></login-header>
    <hr/>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      <button v-on:click="login">登录</button>
      <br/>
      <button v-on:click="hello">测试路径/hello</button>
    </div>
    <hr/>
    <login-footer></login-footer>
  </div>
</template>

<script>
  import loginFooter from './LoginFooter'
  import loginHeader from './LoginHeader'
  import {login,hello} from '../../utils/api'
  export default {
    name: 'login',
    // blogHeader、blogFooter组件给申明到components里面然后在template里面使用
    components: { loginFooter, loginHeader },
    data () {
      return {
        loginInfoVo: { username: '', password: '' },
        responseResult: []
      }
    },
    methods: {
      login () {
        login({
            username: this.loginInfoVo.username,
            password: this.loginInfoVo.password
          }).then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data);
            if (successResponse.message === "成功") {
              // this.$router.replace({path: '/index'})
              this.$router.push({path:'/home'});
            }
          }).catch(
          err=> {
            console.log(err)
          }
          )
      },
      hello(){
        hello().then(resp => {
          console.log(resp.data)
        });
      }
    }
  }
</script>
