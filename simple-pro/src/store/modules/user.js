import { getToken,getUserId,setToken,setUserId} from '../../utils/auth'
import lazyLoading from "./menu/lazyLoading";
import {login} from "../../utils/api";

const user = {
  state: {
    userId:getUserId(),
    token:getToken(),
    items:[],
    isLoadRoutes: false,
    // roles: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    SET_LOAD_ROUTES: (state)=>{
      state.isLoadRoutes = !state.isLoadRoutes
    },
    APPEND_MENU: (state, menuItem)=> {
      if (menuItem) {
        menuItem.map(function (item) {
          // item.component = lazyLoading(item.component);
          // let value1 = item.component;
          // item.component = resolve => require(['@/views' + value1], resolve);
          //延迟加载子菜单的compoent，只加载一级菜单？
          if(typeof(item.children) != "undefined"){
            item.children.map(function (child) {
              // child.component = lazyLoading(child.component);
              let value2 = child.component;
              child.component = () => import(`@/views/${value2}`);
              console.log("````````"+child.component);
              // let value2 = child.component;
              // child.component = resolve => require(['@/views' + value2], resolve);
            })
          }
        });
        state.items.push(...menuItem)
      }
    }
  },

  actions: {
    Login({ commit }, userInfo){
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login({username: userInfo.username, password: userInfo.password})
          .then(response => {
          const data = response.data;
          const tokenStr = data.tokenHead + data.token;
          setToken(tokenStr);
          setUserId(data.userId);
          commit('SET_TOKEN', tokenStr);
          commit('SET_USER_ID', data.userId);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    setToken ({ commit }, token) {
      if (token) {
        commit("SET_TOKEN", token)
      }
    },
    setUserId({commit},userId){
      if(userId){
        commit("SET_USER_ID", userId)
      }
    },
    loadRoutes ({ commit }){
      commit('SET_LOAD_ROUTES')
    },
    appendMenu ({ commit }, menuItem) {
      if (menuItem) {
        commit("APPEND_MENU", menuItem)
      }
    },
  }
};

export default user
