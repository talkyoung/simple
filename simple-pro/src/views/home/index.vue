<template>
  <div>
    <login-header></login-header>
    <hr/>
      <h1>这是首页！</h1>
    <el-button type="primary" v-on:click="toShowStudent">跳转至showStudent界面</el-button>
    <hr/>
    <login-footer></login-footer>
  </div>
</template>

<script>
    import loginFooter from '../login/LoginFooter'
    import loginHeader from '../login/LoginHeader'
    import showStudent from "../student/studentManage";
    export default {
      name: "home",
      components: { loginFooter, loginHeader,showStudent },
        methods:{
            toShowStudent(){
                this.$router.push({path:'/showStudent'});
            }
        }
    }
</script>

<style scoped>

</style>
