import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/index'
import home from '../views/home/index'
import showStudent from "../views/student/studentManage";
import user from '../views/user/userManage'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '../utils/auth' // 验权
Vue.use(Router)

export const constantRouterMap = [
  // {path: '/regist', component: () => import('@/views/login/regist'), hidden: true},
  // {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  // {path: '/404', component: () => import('@/views/404'), hidden: true},
  // {path: '/logisticsList', component: () => import('@/views/logistics/ShowOrders'), hidden: true},
  // {path: '/imServer', component: () => import('../components/im/imServer'), hidden: true}
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () =>  import(`@/views/home`)
  },
  // {
  //   path: '/showStudent',
  //   name: 'showStudent',
  //   component: showStudent
  // },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: user
  // }
];

const router = new Router({
  // mode: history,
  routes: constantRouterMap
  }
);

// 定义一个函数来创建router
export const createRouter = routes => new Router({
  // mode: 'history',
  base: process.env.API_BASEURL, //从环境进程中根据运行环境获取的api的base_url
  routes
});

const whiteList = ['/login','/regist','/logisticsList','/logistics'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    next();
  } else {
    //存在于白名单中
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


