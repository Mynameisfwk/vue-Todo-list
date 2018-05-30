import state from './state'
import * as types from './type.js'
const mutations={
    //事项
    [types.SET_SHIXIANG](state,data){
        state.home.push(data)
        localStorage.setItem("home",JSON.stringify(state.home));
    },
    //完成
    [types.SET_YES](state,data){
        state.item.push(data)
        localStorage.setItem("item",JSON.stringify(state.item));
    }
}

export default mutations