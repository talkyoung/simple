const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  isLoadRoutes: state => state.user.isLoadRoutes
};
export default getters
