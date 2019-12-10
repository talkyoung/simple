import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/index'
import home from '../views/home/index'
import showStudent from "../views/student/showStudent";
Vue.use(Router)

export default new Router({
  // base: '/simpro/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/showStudent',
      name: 'showStudent',
      component: showStudent
    }
  ]
})
