import { getToken,getUserId} from '../../utils/auth'

const user = {
  state: {
    userId:getUserId(),
    token:getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
  },

  actions: {
    setToken ({ commit }, token) {
      if (token) {
        commit("SET_TOKEN", token)
      }
    },
  }
}

export default user
