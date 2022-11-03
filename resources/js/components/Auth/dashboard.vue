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
                                        <li><a href="#" class="nav-link ">Profile</a></li>
                                        <li><a href="#" class="nav-link">Give Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="dashboard-area">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-12">
                                    <div class="dashboard-links">
                                        <nav>
                                            <ul class="nav flex-column dashboard-menu">
                                                <li><a href="#" class="nav-link active"><i class="fas fa-users"></i> Profile</a></li>
                                                <li><a href="#" class="nav-link"><i class="fas fa-pencil"></i> Give Feedback</a></li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8 col-12">
                                    <div class="dashboard-body">
                                        <div class="form-area">
                                            <div class="col-lg-6">
                                                <form>
                                                    <label class="form-label" for="name">Username or Email</label>
                                                    <input type="text" class="form-control" id="name">
                                                    <label class="form-label" for="pass">Password</label>
                                                    <input type="password" class="form-control" id="pass">
                                                    <a href="#" class="lost">
                                                        Forgot Password <i class="fas fa-question"></i>
                                                    </a>
                                                    <button class="btn btn-login">Log in</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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
export default {
    name: "dashboard",
    computed: {
        ...mapGetters("auth", ["user"])
    },
}
</script>

<style scoped>

</style>
