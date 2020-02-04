import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 'home',
  },
  getters: {
    getActiveSlide: state => state.activeSlide,
  },
  mutations: {
    setActiveSlide(state, payload) {
      state.activeSlide = payload;
    },
  },
  actions: {
    setActiveSlide({ commit }, payload) {
      commit('setActiveSlide', payload);
    },
  },
  modules: {
  },
});
