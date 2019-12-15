const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  isLoadRoutes: state => state.user.isLoadRoutes,
  items: state => state.user.items,
};
export default getters
