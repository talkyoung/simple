import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/index'
import home from '../views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})