<template>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
        <main id="main-content">
            <section>
                <div class="wrapper">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container">
                                <a class="navbar-brand" href="#">Dashboard</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li><router-link :to="{name : 'profile'}" class="nav-link" :class="{active: $route.name==='profile'}">Profile</router-link></li>
                                        <li><router-link :to="{name : 'jobs'}" class="nav-link" :class="{active: $route.name==='jobs'}">Jobs</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="dashboard-area">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-12">
                                    <div class="dashboard-links">
                                        <nav>
                                            <ul class="nav flex-column dashboard-menu">
                                                <li><router-link :to="{name : 'profile'}" class="nav-link" :class="{active: $route.name==='profile'}"><i class="fas fa-users"></i> Profile</router-link></li>
                                                <li><router-link :to="{name : 'jobs'}" class="nav-link" :class="{active: $route.name==='jobs'}"><i class="fas fa-pencil"></i>Jobs</router-link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-8 col-sm-12">
                                    <router-view></router-view>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <companies></companies>
            <social-media></social-media>
        </main>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StarRating from 'vue-star-rating'
export default {
    name: "dashboard",
    computed: {
        ...mapGetters("auth", ["user"])
    },
    mounted() {
        this.$store.commit("setErrors", {});
    }
}
</script>

<style scoped>

</style>
