require('./bootstrap');

window.Vue = require('vue').default;
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 422) {
            store.commit("setErrors", error.response.data.errors);
        } else if (error.response.status === 401) {
            store.commit("auth/setUserData", null);
            localStorage.removeItem("authToken");
            router.push({ name: "Login" });
        } else {
            return Promise.reject(error);
        }
    }
);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`

axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    return config;
});

Vue.component('vue-search', require('./components/includes/search.vue').default);

Vue.component('social-media', require('./components/includes/socialmedia.vue').default);
Vue.component('companies', require('./components/includes/companies.vue').default);


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

//
// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount("#app");
