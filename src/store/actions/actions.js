var actions = {
  updateCountAsync({commit}, data) {
    setInterval(() => {
      return new Promise((resolve, reject) => {
        commit('updateCount',data)
        reject()
      })
    }, 1);
  }
}

export default actions;
