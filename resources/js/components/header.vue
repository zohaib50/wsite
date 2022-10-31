<template>
    <div class="menu-content">
        <ul class="nav menu-nav end-nav">

            <li class="nav-item" v-if="token == null">
                <a :href="login" class="nav-link">
                    <i class="fas fa-user"></i>   <span>Login</span>
                </a>
            </li>
            <li class="nav-item" v-if="token == null">
                <a :href="register" class="nav-link">
                    <i class="fas fa-sign-in"></i>   <span>Signup</span>
                </a>
            </li>
            <li class="nav-item" v-if="token != null">
                <a :href="dashboard" class="nav-link">
                    <i class="fas fa-user"></i>   <span>Dashboard</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        login:null,
        register:null,
        dashboard:null,
    },
    name: "header",
    data(){
        return{
            token:null,
        }
    },
    mounted() {
        if (localStorage.getItem("authToken")) {
            this.token = localStorage.getItem("authToken");
            if(this.login == window.location.href || this.register == window.location.href){
                window.location.href="/dashboard";
            }
        }
    }
}
</script>

<style scoped>

</style>
