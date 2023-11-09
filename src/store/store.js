import Vuex from 'vuex'

import defaultState from './stateDate/state';
import mutations from './mutaions/mutations';
import getters from './getters/getters';
import actions from './actions/actions';

debugger
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default()=>{
  return new Vuex.Store({
    state:defaultState,
    mutations:mutations,
    getters:getters,
    actions:actions,
    modules,
  })
}