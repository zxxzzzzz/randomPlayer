import Vue from 'vue';
import Vuex from 'vuex';
import FM from './modules/FM';
import User from './modules/User';
import getters from './getters';

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const Store = new Vuex.Store({
  modules: {
    FM,
    User,
  },
  getters,

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV,
});

export default Store;
