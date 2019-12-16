<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-aside>
          {{menuItems}}
          <el-button type="primary" v-on:click="toShowStudent">{{menuItems}}</el-button>
        </el-aside>
      </el-col>
      <el-col :span="12">
        <el-container>
          <el-header>
            <el-row>
              <el-col>
                <el-button type="warn" style="float: right">退出登录</el-button>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import studentManage from "../student/studentManage";
    import { mapActions, mapGetters } from 'vuex'
    export default {
      name: "home",
      data() {
          return {
              menuItems : this.$router.options.routes
          };
      },
      components: {
          studentManage
      },
      methods:{
          toShowStudent(){
              console.log(JSON.stringify(localStorage.getItem("permission")))
              this.$router.push({path:'/studentManage'});
          }
      },
      computed:{
          ...mapGetters([
          ])
      }
    }
</script>

<style scoped>
</style>
