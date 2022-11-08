import Vue from 'vue'
import Toasted from 'vue-toasted'
Vue.use(Toasted)
Vue.toasted.register('register', 'Registration Successfully!', {
    type: 'success',
    duration: 3000
})
Vue.toasted.register('login', 'login Successfully!', {
    type: 'success',
    duration: 3000
})
Vue.toasted.register('logout', 'logout Successfully!', {
    type: 'success',
    duration: 3000
})
Vue.toasted.register('changePassword', 'Change Password Successfully!', {
    type: 'success',
    duration: 3000
})
Vue.toasted.register('becomeContractor', 'Contractor Register Successfully!', {
    type: 'success',
    duration: 3000
})
// this.$toasted.global.register()
// this.$toasted.global.login()
// this.$toasted.global.logout()
// this.$toasted.global.changePassword()
// this.$toasted.global.becomeContractor()
