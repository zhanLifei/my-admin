import Vuex from 'vuex'
import defaultState from './stateDate/state';
import mutations from './mutaions/mutations';
import getters from './getters/getters';
import actions from './actions/actions';
export default()=>{
  return new Vuex.Store({
    state:defaultState,
    mutations:mutations,
    getters:getters,
    actions:actions
  })
} 
