import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSlide: 'home',
    users: [],
  },
  getters: {
    getActiveSlide: state => state.activeSlide,
    getUsers: state => state.users,
  },
  mutations: {
    setActiveSlide(state, payload) {
      state.activeSlide = payload;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
  },
  actions: {
    setActiveSlide({ commit }, payload) {
      commit('setActiveSlide', payload);
    },
    addUser({ commit }, payload) {
      commit('addUser', payload);
    },
  },
  modules: {
  },
});
