import Vue  from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // raise error when mutating state from outside of mutation handlers.
  strict: process.env.NODE_ENV !== 'production',

  state: {
    count: 0,
    loading: false,
  },

  getters: {
    isEven(state) {
      return state.count % 2 === 0;
    }
  },

  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, flag) {
      state.loading = flag;
    }
  },

  actions: {
    increment({ commit, state }) {
      commit('setCount', state.count + 1);
    },

    decrement({ commit, state }) {
      commit('setCount', state.count - 1);
    },
    
    add({ commit, state }, num) {
      commit('setCount', state.count + num);
    },

    incrementAsync({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true);
        setTimeout(() => {
          dispatch('increment');
          commit('setLoading', false);
          resolve();
        }, 1500);
      });
    },
  }
});

export default store;