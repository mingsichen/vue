const state = {
    nm : window.localStorage.getItem('nowNm') || '南宁', /* 有默认就用他 */
    id : window.localStorage.getItem('nowId') || 1
};

const actions = {

};



const mutations = {
    /* 有个规定大写,显示状态管理的方法 */
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }

    
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}   

