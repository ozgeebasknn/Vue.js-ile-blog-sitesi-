import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: [],
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        commit("setUsers", res.data);
      });
    },
    getUser({ commit }, userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          commit("setUser", res.data);
        });
    },
  },
  modules: {},
});
