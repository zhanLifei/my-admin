export default {
    increment(state,n){
        state.counts += n
    },
    updateCount(state,data){
        state.count += data
    }
}