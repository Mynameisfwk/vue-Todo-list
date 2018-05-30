const actions={
    setOrder ({commit}, data) {
        commit('SET_SHIXIANG', data);
    },
    setYes({commit},data){
        commit('SET_YES',data)
    }
}

export default actions