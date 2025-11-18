import { createStore } from 'vuex';

export default createStore({
  state: {
    message: 'Hello Vue 3 + Vuex 4',
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    updateMessage({ commit }, payload) {
      commit('setMessage', payload);
    },
  },
  getters: {
    message: (state) => state.message,
  },
});