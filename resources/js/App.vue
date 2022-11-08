<template>
  <div id="app">
      <div class="overlay"></div>
      <header id="header-content">
          <div class="menu-bar bg">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-lg-5 col-md-5 col-4">
                          <div class="menu-content">
                              <div class="row">
                                  <div class="col-lg-3 col-4 align-self-center">
                                      <button type="button" class="btn btn-menu"><i class="fal fa-bars"></i> <span>Menu</span></button>
                                  </div>
                                  <div class="col-lg-9 align-self-center hide-on-mobile">
                                      <ul class="nav menu-nav">
                                          <li class="nav-item">
<!--                                              <router-link :to="{name : 'index'}" class="nav-link">-->
<!--                                                  Service Locator-->
<!--                                              </router-link>-->
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-4">
                          <div class="site-logo">
                              <div class="desktop-logo">
                                  <a href="#" style="color: #fff;text-decoration: none;">
                                      <img src="https://via.placeholder.com/412x199" class="img-fluid">
                                  </a>
                              </div>
                              <div class="mobile-logo">
                                  <router-link :to="{name : 'index'}" style="color: #000;text-decoration: none;">
                                      <img src="https://via.placeholder.com/412x199" class="img-fluid">
                                  </router-link>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-4">
                          <div class="menu-content">
                              <ul class="nav menu-nav end-nav">

                                  <li class="nav-item" v-show="!user">
                                      <router-link :to="{name : 'login'}" class="nav-link">
                                          <i class="fas fa-user"></i>   <span>Login</span>
                                      </router-link>
                                  </li>
                                  <li class="nav-item" v-show="!user">
                                      <router-link :to="{name : 'register'}" class="nav-link">
                                          <i class="fas fa-sign-in"></i>   <span>Signup</span>
                                      </router-link>
                                  </li>
                                  <li class="nav-item dropdown" v-if="user">
                                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<!--                                          <img :src="require('/images/user.jpg')" class="nav-avtar" />-->
                                          <div class="d-flex flex-row">
                                              <div class="">
                                                  <avatar :fullname="user.name" :size="40"></avatar>
                                              </div>
                                              <div class="align-self-center" style="padding-left: 10px;">{{user.name}}</div>
                                          </div>
                                      </a>
                                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                          <li><router-link class="dropdown-item" :to="{name : 'profile'}">Dashboard</router-link></li>
                                          <li><a class="dropdown-item" @click="logout">Logout</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="menu-area ">
              <div class="site-identity">
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-12">
                          <button type="button" class="btn btn-diss"><i class="fal fa-times"></i></button>
                      </div>
                      <div class="col-lg-4 col-md-4 col-12">
                          <div class="site-logo">
                              <img src="https://via.placeholder.com/412x199" class="img-fluid">
                          </div>
                      </div>
                  </div>
              </div>

              <div class="site-nav">
                  <ul class="nav flex-column main-nav">
                      <li class="nav-item">
                          <router-link :to="'/'" class="nav-link btn-diss">
                              Home
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="'/about'" class="nav-link btn-diss">
                              About
                          </router-link>
                      </li>

                      <li class="nav-item">
                          <router-link :to="'/become-contractor'" class="nav-link btn-diss">
                              Become a Contractor
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="'/contractors'" class="nav-link btn-diss">
                              Hire A contractor
                          </router-link>
                      </li>

                      <li class="nav-item">
                          <router-link :to="'/faq'" class="nav-link btn-diss">
                              Faq
                          </router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="'contact'" class="nav-link btn-diss">
                              Contact
                          </router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </header>
      <div id="search-bar">
          <div class="container">
              <div class="search-top">
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-12">

                      </div>
                      <div class="col-lg-4 col-md-4 col-12">
                          <div class="site-logo">
                              <a href="#">
                                  <img src="https://via.placeholder.com/412x199" class="img-fluid" alt="">
                              </a>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-12">
                          <button class="btn btn-clo"><i class="fal fa-times"></i></button>
                      </div>
                  </div>
              </div>
              <div class="search-content">
                  <h1>SEARCH THE ROLEX WEBSITE</h1>
                  <div class="search-form">
                      <div class="input-group">
                          <input type="search" class="form-control" placeholder="Search">
                          <div class="input-group-append">
                              <button class="btn btn-submit" type="submit"><i class="fas fa-arrow-right"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <router-view></router-view>
      <footer id="footer-content">
          <div class="newsletter-area">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-12">
                          <div class="newsletter-box">
                              <h2>Get In Touch</h2>
<!--                              <div class="input-group">-->
<!--                                  <input type="email" class="form-control" placeholder="Subscribe To Our Newsletter">-->
<!--                                  <div class="input-group-append">-->
<!--                                      <button class="btn btn-submit"><i class="fas fa-arrow-right text-white"></i></button>-->
<!--                                  </div>-->
<!--                              </div>-->
                          </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 align-self-center">
                          <div class="site-logo hide-on-mobile">
                              <img src="https://via.placeholder.com/412x199" class="img-fluid d-block ml-auto" alt="" style="margin-left: auto;">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-12">
                          <div class="site-logo">
                              <img src="https://via.placeholder.com/412x199" class="img-fluid" alt="">
                          </div>
                          <p>Ship quality insights in an hour, not days or weeks.</p>
                      </div>
                      <div class="col-lg-1"></div>
                      <div class="col-lg-2 col-md-2 col-12">
                          <ul class="nav footer-nav flex-column">
                              <li class="nav-item">
                                  <router-link :to="{ name: 'about'}" class="nav-link">
                                      About
                                  </router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link :to="{ name: 'faq'}" class="nav-link">
                                      Faq
                                  </router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link :to="{name : 'contact'}" class="nav-link">
                                      Contact
                                  </router-link>
                              </li>
                          </ul>
                      </div>
                      <div class="col-lg-2 col-md-2 col-12">
                          <ul class="nav footer-nav flex-column">
                              <li class="nav-item">
                                  <a href="#" class="nav-link">
                                      Terms & Conditions
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#" class="nav-link">
                                      Privacy Policy
                                  </a>
                              </li>

                          </ul>
                      </div>
                      <div class="col-lg-3 col-md-3 col-12">
                          <ul class="nav footer-nav mar">
                              <li class="nav-item">
                                  <a href="#" class="nav-link">
                                      Follow Us
                                  </a>
                              </li>
                          </ul>
                          <ul class="nav footer-nav">
                              <li class="nav-item">
                                  <a href="https://www.facebook.com/" target="_blank" class="nav-link">
                                      <img src="assets/img/fb.svg" class="img-fluid" alt="">
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="https://twitter.com/" target="_blank" class="nav-link">
                                      <img src="assets/img/tw.svg" class="img-fluid" alt="">
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from 'vue-avatar-component'
export default {
  computed: {
    ...mapGetters("auth", ["user"])
  },

  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData();
    }
      // var modelApp = {
      //     bannerSlider: function () {
      //             var $bannerSlider = $(".banner-slider");
      //               $bannerSlider.owlCarousel({
      //                 loop: true,
      //                 margin: 10,
      //                 nav: true,
      //                 responsive: {
      //                     0: {
      //                         items: 1
      //                     },
      //                     600: {
      //                         items: 1
      //                     },
      //                     1000: {
      //                         items: 1
      //                     }
      //                 }
      //             });
      //
      //     },
      //     bandSlider: function () {
      //         var $brandSlider = $(".brands-slider");
      //         $brandSlider.owlCarousel({
      //             loop: true,
      //             margin: 10,
      //             nav: true,
      //             responsive: {
      //                 0: {
      //                     items: 2
      //                 },
      //                 600: {
      //                     items: 3
      //                 },
      //                 1000: {
      //                     items: 6
      //                 }
      //             }
      //         });
      //     },
      //     initializ: function () {
      //         modelApp.bannerSlider();
      //         modelApp.bandSlider();
      //     }
      // };
      // /* ---------------------------------------------
      //  Document ready function
      //  --------------------------------------------- */
      // $(function () {
      //     modelApp.initializ();
      // });
  },

  methods: {
    ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),

    logout() {
      this.sendLogoutRequest().then(() => {
          this.$router.push("/login")
          this.$toasted.global.logout()
      });
    }
  },
  components:{
      Avatar
  }
};
</script>

<style>
body > div > .container {
  padding: 60px 15px 0;
}
</style>
