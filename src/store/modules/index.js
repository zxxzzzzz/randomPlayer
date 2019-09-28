import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import axios from 'axios'

const state = {
  personalInfo:null,
}
const actions = {
  /** 获取私人fm信息 */
  getPersonalInfo(){

  }
}



export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
