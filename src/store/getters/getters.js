var getters = {
    count: state => state.count,
    counts: state => state.counts,
    firsName: state => state.firsName,
    jsonData: state => state.jsonData,
    lastName: state => state.lastName,
    token: state => state.user.token,
    roles: state => state.user.roles,
    isMasterAccount: state => state.user.isMasterAccount,
}

export default getters