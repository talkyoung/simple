<template>
  <div>
    <login-header></login-header>
    <hr/>
      <h1>这是首页！</h1>
    <hr/>
    <login-footer></login-footer>
  </div>
</template>

<script>
    import loginFooter from '../login/LoginFooter'
    import loginHeader from '../login/LoginHeader'

    export default {
      name: "home",
      components: { loginFooter, loginHeader },
    }
</script>

<style scoped>

</style>
