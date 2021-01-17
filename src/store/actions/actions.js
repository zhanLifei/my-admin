export default {
  updateCountAsync(store, data) {
    setInterval(() => {
      store.commit('updateCount',data)
    }, 1);
  }
};
