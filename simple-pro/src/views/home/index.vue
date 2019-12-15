<template>
  <div>
      <h1>这是首页！</h1>
    <el-button type="primary" v-on:click="toShowStudent">跳转至showStudent界面</el-button>
  </div>
</template>

<script>
    import showStudent from "../student/studentManage";
    export default {
      name: "home",
      components: { showStudent },
        methods:{
            toShowStudent(){
                this.$router.push({path:'/showStudent'});
            }
        }
    }
</script>

<style scoped>

</style>
