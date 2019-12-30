export default {
  updateCountAsync(store, data) {
    setInterval(() => {
      store.commit('updateCount',data.num)
    }, data.time);
  },

  updateTokenAsync(store, data) {
      store.commit('updateCount',data.token)
  }
};
