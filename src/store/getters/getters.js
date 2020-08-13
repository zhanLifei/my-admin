export default {
    fullName(state) {
        return state.jsonData.filter(item=> item.name )
    }
}