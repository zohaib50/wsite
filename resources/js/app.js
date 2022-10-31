require('./bootstrap');

window.Vue = require('vue').default;

import axios from "axios";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('vue-login', require('./components/login.vue').default);
Vue.component('vue-register', require('./components/register.vue').default);
Vue.component('vue-header', require('./components/header.vue').default);

Vue.config.productionTip = false;

// axios.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 422) {
//             store.commit("setErrors", error.response.data.errors);
//         } else if (error.response.status === 401) {
//             store.commit("auth/setUserData", null);
//             localStorage.removeItem("authToken");
//             router.push({ name: "Login" });
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );

axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };

    return config;
});

const app = new Vue({
    el: '#app',
});
