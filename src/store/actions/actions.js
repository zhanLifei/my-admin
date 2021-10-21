var actions = {
  updateCountAsync(store, data) {
    setInterval(() => {
      store.commit('updateCount',data)
    }, 1);
  }
}

export default actions;
