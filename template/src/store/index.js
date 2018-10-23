import * as actions from './actions'
import *as getters from './getters'
import state from './state'
import mutations from './mutations'

export default {
  name: 'helloWord',
  obj: {
    namespaced: true,
    actions,
    getters,
    state,
    mutations
  }
}
