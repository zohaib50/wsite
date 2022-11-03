<template>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>Login</h1>
                </div>
            </div>
        </div>
        <main id="main-content">
            <section class="contractor-form-area">
                <div class="container">
                    <div class="form-area">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 col-md-7 col-12">
                                <div class="form-box">
                                    <h1>If you want to login fill this form!</h1>
                                    <form method="POST" v-on:submit.prevent="login" enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Email</label>
                                                <input type="email" v-model="details.email" :class="{ 'is-invalid': errors.email }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Password</label>
                                                <input type="password" v-model="details.password" :class="{ 'is-invalid': errors.password }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>

                                        </div>
                                        <button class="btn btn-submit my-3">Submit</button>
                                    </form>
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
  name: "Home",

  data: function() {
    return {
      details: {
        email: null,
        password: null
      }
    };
  },

  computed: {
    ...mapGetters(["errors"])
  },

  mounted() {
    this.$store.commit("setErrors", {});
  },

  methods: {
    ...mapActions("auth", ["sendLoginRequest"]),

    login: function() {
      this.sendLoginRequest(this.details).then(() => {
        this.$router.push({ name: "dashboard" });
      });
    }
  }
};
</script>
