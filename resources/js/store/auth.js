import axios from "axios";

export default {
  namespaced: true,

  state: {
    userData: null
  },

  getters: {
    user: state => state.userData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    }
  },

  actions: {
    getUserData({ commit }) {
      axios
        .get("/customer/user")
        .then(response => {
          commit("setUserData", response.data);
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("/customer/login", data)
        .then(response => {
          commit("setUserData", response.data.data);
          localStorage.setItem("authToken", response.data.data.api_token);
        });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("/customer/register", data)
        .then(response => {
          commit("setUserData", response.data.data);
          localStorage.setItem("authToken", response.data.data.api_token);
        });
    },
    sendLogoutRequest({ commit }) {
      axios.post("/customer/logout").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      });
    },
    sendVerifyResendRequest() {
      return axios.get("/customer/email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get("/customer/email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    }
  }
};
