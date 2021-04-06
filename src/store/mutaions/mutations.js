var mutations = {
    increment(state,n){
        state.counts += n
    },
    updateCount(state,data){
        state.count += data
    }
}


export default mutations