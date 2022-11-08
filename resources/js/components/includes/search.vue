<template>
    <div>
        <section class="search-area">
            <div class="container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" @click="tab = true" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                aria-selected="true">Find material kit near you.
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" @click="tab = false" id="profile-tab" data-bs-toggle="tab"
                                data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                aria-selected="false">Find material + Contractor near you.
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="search-form">
                            <div class="input-group">
                                <input type="search" v-model="searchmerchant" class="form-control" placeholder="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-submit" @click="getmerchant()" type="submit"><i
                                        class="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="search-form">
                            <div class="input-group">
                                <input type="search" v-model="searchcontractor" class="form-control"
                                       placeholder="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-submit" @click="getcontractor()" type="submit"><i
                                        class="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contractors-area" v-if="tab == true">
            <div class="contractors-info">
                <div class="container">
                    <div class="row">
                        <div class="text-center" v-if="merchants.length == 0">
                            <h3>No Record Found</h3>
                        </div>
                        <div v-for="merchant in merchants" class="col-lg-12 col-md-12 col-12">
                            <div class="card contractor-card">
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-12">
                                        <div class="contractor-img">
                                            <img :src="url+merchant.profile_image" class="img-fluid" style="height: 130px;">
                                        </div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-12">
                                        <div class="contractor-content">
                                            <h3>{{ merchant.name }}</h3>
                                            <!--                                        <ul class="nav rating-nav">-->
                                            <!--                                            <li class="nav-item">-->
                                            <!--                                                <a href="#" class="nav-link">-->
                                            <!--                                                    <i class="fas fa-star"></i>-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="nav-item">-->
                                            <!--                                                <a href="#" class="nav-link">-->
                                            <!--                                                    <i class="fas fa-star"></i>-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="nav-item">-->
                                            <!--                                                <a href="#" class="nav-link">-->
                                            <!--                                                    <i class="fas fa-star"></i>-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="nav-item">-->
                                            <!--                                                <a href="#" class="nav-link">-->
                                            <!--                                                    <i class="fas fa-star"></i>-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->
                                            <!--                                            <li class="nav-item">-->
                                            <!--                                                <a href="#" class="nav-link">-->
                                            <!--                                                    <i class="fas fa-star"></i>-->
                                            <!--                                                </a>-->
                                            <!--                                            </li>-->
                                            <!--                                        </ul>-->
                                            <div class="address-box">
                                                <h5>Address</h5>
                                                <p>{{ merchant.business_address }}</p>
                                            </div>
                                            <!--                                        <div class="address-box">-->
                                            <!--                                            <h5>Nearest Distance</h5>-->
                                            <!--                                            <p>(5 Km Away)</p>-->
                                            <!--                                        </div>-->
                                            <div class="button-position">
                                                <a :href="url+'/inquiries/'+merchant.id" class="btn btn-cont"
                                                   target="_blank">
                                                    Hire Merchant
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <pagination :data="pagination" @pagination-change-page="getmerchant">
                        <template #prev-nav>
                            <span>Previous</span>
                        </template>
                        <template #next-nav>
                            <span>Next</span>
                        </template>
                    </pagination>
                </div>
            </div>
        </section>
        <section class="contractors-area" v-if="tab == false">
            <div class="contractors-info">
                <div class="container">
                    <div class="text-center" v-if="contractors.length == 0">
                        <h3>No Record Found</h3>
                    </div>
                    <div class="card contractor-card" v-for="contractor in contractors">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img :src="url+contractor.profile_image" class="img-fluid" style="height: 130px;" v-if="contractor.profile_image != null">
                                    <div v-else>
                                        <avatar :fullname="contractor.name" style="float: right;" :size="130" ></avatar>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>{{ contractor.name }}</h3>
                                            <star-rating v-model="contractor.count_rating" :increment="0.1"
                                                         :read-only="true" :star-size="30"
                                                         :show-rating="true"></star-rating>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>{{ contractor.order_count }}(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{{contractor.business_detail}}</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Address</h5>
                                                    <p>{{ contractor.business_address }}</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <a v-if="user"
                                                   :href="url+'/inquiries/'+contractor.id+'?formdata='+user.id"
                                                   class="btn btn-cont" target="_blank">Hire Contractor</a>
                                                <button v-if="!user" type="button" class="btn btn-cont"
                                                        data-bs-toggle="modal" data-bs-target="#exampleModal">Hire
                                                    Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pagination :data="pagination2" @pagination-change-page="getcontractor">
                        <template #prev-nav>
                            <span>Previous</span>
                        </template>
                        <template #next-nav>
                            <span>Next</span>
                        </template>
                    </pagination>
                </div>
            </div>
        </section>
        <!--model-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="modalTab == true">Login</h5>
                        <h5 class="modal-title" v-if="modalTab == false">Register</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link nav-form" :class="{active: modalTab}" @click="logintab"
                                        type="button">Login
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link nav-form" :class="{active: !modalTab}" @click="registertab"
                                        type="button">Register
                                </button>
                            </li>

                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <section class="contractor-form-area p-0 bg-white" v-if="modalTab == true">
                                <form method="POST" v-on:submit.prevent="loginform" enctype="multipart/form-data">
                                    <div class="row mt-3">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Email</label>
                                            <input type="email" class="form-control" v-model="login.email"
                                                   :class="{ 'is-invalid': errors.email }">
                                            <div class="invalid-feedback" v-if="errors.email">{{
                                                    errors.email[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Password</label>
                                            <input type="password" class="form-control" v-model="login.password"
                                                   :class="{ 'is-invalid': errors.password }">
                                            <div class="invalid-feedback" v-if="errors.password">{{
                                                    errors.password[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                    </div>
                                    <a href="#" class="d-block mb-2 text-black-50"
                                       style="text-decoration: none; font-size: 0.8rem">
                                        Forgot Password
                                    </a>
                                    <button class="btn btn-submit">Submit</button>
                                </form>
                            </section>
                            <section class="contractor-form-area p-0 bg-white" v-if="modalTab == false">
                                <form action="" v-on:submit.prevent="registerform" method="POST"
                                      enctype="multipart/form-data">
                                    <div class="row mt-3">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Name</label>
                                            <input type="text" class="form-control" v-model="register.name"
                                                   :class="{ 'is-invalid': errors.name }">
                                            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Email</label>
                                            <input type="email" class="form-control" v-model="register.email"
                                                   :class="{ 'is-invalid': errors.email }">
                                            <div class="invalid-feedback" v-if="errors.email">{{
                                                    errors.email[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <!--                                            <div class="col-lg-12 col-md-12 col-12">-->
                                        <!--                                                <label class="form-label">Your Phone Number</label>-->
                                        <!--                                                <input type="text" class="form-control">-->
                                        <!--                                            </div>-->
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Password</label>
                                            <input type="password" class="form-control" v-model="register.password"
                                                   :class="{ 'is-invalid': errors.password }">
                                            <div class="invalid-feedback" v-if="errors.password">{{
                                                    errors.password[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Confirm Password</label>
                                            <input type="password" class="form-control"
                                                   v-model="register.password_confirmation">
                                            <div> &nbsp;</div>
                                        </div>
                                    </div>
                                    <button class="btn btn-submit">Submit</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import LaravelVuePagination from "laravel-vue-pagination";
import {mapGetters, mapActions} from "vuex";
import StarRating from "vue-star-rating";


export default {
    name: "search",
    data() {
        return {
            url: process.env.MIX_APP_URL,
            merchants: [],
            contractors: [],
            page: 1,
            searchmerchant: '',
            searchcontractor: '',
            limit: 5,
            tab: true,
            pagination: {},
            pagination2: {},
            modalTab: true,
            login: {
                email: null,
                password: null
            },
            register: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            }

        }
    },
    mounted() {
        this.$store.commit("setErrors", {});
        this.getmerchant()
        this.getcontractor()
    },
    computed: {
        ...mapGetters("auth", ["user"]),
        ...mapGetters(["errors"])
    },
    methods: {
        ...mapActions("auth", ["sendRegisterRequest", "sendLoginRequest"]),
        getmerchant(page = 1) {
            axios.get('/merchant/list?' + 'page=' + page + '&search=' + this.searchmerchant + '&limit=' + this.limit).then(response => {
                this.merchants = response.data.data
                this.pagination = response.data
                console.log(response.data);
            }).catch(error => {

            })
        },
        getcontractor(page = 1) {
            axios.get('/contractor/list?' + 'page=' + page + '&search=' + this.searchcontractor + '&limit=' + this.limit+'&filterRating=all&filterJobs=all').then(response => {
                this.contractors = response.data.data
                this.pagination2 = response.data
                console.log(response.data);
            }).catch(error => {

            })
        },
        logintab: function () {
            this.modalTab = true
            this.setErrors = []
        },
        registertab: function () {
            this.modalTab = false
            this.setErrors = []
        },
        loginform: function () {
            this.sendLoginRequest(this.login).then(() => {

                this.$router.push({name: "profile"});
            });
        },
        registerform: function () {
            this.sendRegisterRequest(this.register).then(() => {
                this.$router.push({name: "profile"});
            });
        }
    },
    components: {
        'pagination': LaravelVuePagination,
        StarRating
    }
}
</script>

<style scoped>

</style>
