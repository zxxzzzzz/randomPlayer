import { login } from '../../api/login';

const states = {
  info: {},

};

const mutations = {
  SET_USER(state, info) {
    state.info = info;
  },
};

const actions = {
  /** 获取私人fm信息 */
  async login({ commit }, { phone, password }) {
    const response = await login(phone, password);
    commit('SET_USER', response);
  },
};


export default {
  namespaced: true,
  mutations,
  actions,
  state: states,
};
