// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios');
// axios.defaults.baseURL = '/simpro';

// 将API方法绑定到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// /****** 全局注册vux组件 ******/
// import {TransferDom, Cell, Toast, Alert, Confirm, Group, CellBox, Actionsheet} from 'vux';
// Vue.directive('transfer-dom', TransferDom);
// Vue.component('cell', Cell);
// Vue.component('toast', Toast);
// Vue.component('alert', Alert);
// Vue.component('confirm', Confirm);
// Vue.component('group', Group);
// Vue.component('cell-box', CellBox);
// Vue.component('actionsheet', Actionsheet);
//
//
// /****** 全局处理错误提示、数据加载 ******/
// import {ToastPlugin, LoadingPlugin} from 'vux'
// Vue.use(ToastPlugin);
// Vue.use(LoadingPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
