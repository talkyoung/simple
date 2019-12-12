import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/index'
import home from '../views/home/index'
import showStudent from "../views/student/showStudent";
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '../utils/auth' // 验权
Vue.use(Router)

const router = new Router({
      routes: [
          // {
          //   path: '/',
          //   name: 'login',
          //   component: login
          // },
          {
            path: '/login',
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
  }
);

const whiteList = ['/login','/regist','/logisticsList','/logistics'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log("router beforeEach:"+getToken());
  NProgress.start();
  console.log("router beforeEach:"+getToken());
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/home' });
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    }else {
      next();
    }
    // else {
    //   if (store.getters.roles.length === 0) {
    //     store.dispatch('GetInfo').then(res => { // 拉取用户信息
    //       next()
    //     }).catch((err) => {
    //       store.dispatch('FedLogOut').then(() => {
    //         Message.error(err || 'Verification failed, please login again');
    //         localStorage.clear();
    //         next({ path: '/home' })
    //       })
    //     })
    //   } else {
    //     next()
    //   }
    // }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login');
      NProgress.done()
    }
  }
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
});

export default router;
// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({y: 0}),
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'login',
//     //   component: login
//     // },
//     {
//       path: '/login',
//       name: 'login',
//       component: login
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: home
//     },
//     {
//       path: '/showStudent',
//       name: 'showStudent',
//       component: showStudent
//     }
//   ]
// })


