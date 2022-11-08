<template>
<div>
    <div id="banner-area" class="banner-area">
        <div class="container">
            <div class="page-title">
                <h1>Our Contractors</h1>
            </div>
        </div>
    </div>
    <main id="main-content">
        <section class="contractors-area">
            <div class="filter-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <h1>Hire Our Contractors</h1>
                            <div class="hiring-selection">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <select class="form-select" v-model="filter_rating" @change="getcontractor()">
                                            <option value="all">By Rating</option>
                                            <option value="1">1 Star Rating</option>
                                            <option value="2">2 Star Rating</option>
                                            <option value="3">3 Star Rating</option>
                                            <option value="4">4 Star Rating</option>
                                            <option value="5">5 Star Rating</option>
                                        </select>
                                    </div>
<!--                                    <div class="col-lg-4 col-md-4 col-12">-->
<!--                                        <select class="form-select" v-model="filter_jobs" @change="getcontractor()">-->
<!--                                            <option selected>By # Of Completed Jobs</option>-->
<!--                                            <option value="1">Completed Jobs 0-10</option>-->
<!--                                            <option value="2">Completed Jobs 11-20</option>-->
<!--                                            <option value="3">Completed Jobs 21-30</option>-->
<!--                                            <option value="4">Completed Jobs More then 30</option>-->
<!--                                        </select>-->
<!--                                    </div>-->
                                    <div class="col-lg-8 col-md-8 col-12">
                                        <div class="input-group">
                                            <input type="search" v-model="searchcontractor" class="form-control" placeholder="Search A contractor">
                                            <div class="input-group-append">
                                                <button type="button" class="btn btn-sea" @click="getcontractor()"><i class="fal fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <button type="button" id="closelogin" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <companies></companies>
        <social-media></social-media>
    </main>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LaravelVuePagination from "laravel-vue-pagination";
import StarRating from "vue-star-rating";

export default {
    name: "contractors",
    data(){
        return{
            url:process.env.MIX_APP_URL,
            merchants:[],
            contractors:[],
            page:1,
            searchmerchant:'',
            searchcontractor:'',
            limit:5,
            tab: true,
            pagination:{},
            pagination2:{},
            modalTab:true,
            login: {
                email: null,
                password: null
            },
            register: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            filter_rating:'all',
            filter_jobs: 1,


        }
    },
    mounted() {
        this.$store.commit("setErrors", {});
        this.getcontractor()
        window.scrollTo(0, 0)
    },
    computed: {
        ...mapGetters("auth", ["user"]),
        ...mapGetters(["errors"])
    },
    methods:{
        ...mapActions("auth", ["sendRegisterRequest", "sendLoginRequest"]),
        getcontractor(page = 1){
            axios.get('/contractor/list?'+'page='+page+'&search='+this.searchcontractor+'&limit='+this.limit+'&filterRating='+this.filter_rating+'&filterJobs='+this.filter_jobs ).then(response => {
                this.contractors=response.data.data
                this.pagination2=response.data
                console.log(response.data);
            }).catch(error => {

            })
        },
        logintab: function (){
            this.modalTab = true
            this.$store.commit("setErrors", {});
        },
        registertab: function (){
            this.modalTab = false
            this.$store.commit("setErrors", {});
        },
        loginform: function() {
            this.sendLoginRequest(this.login).then(() => {
                document.getElementById('closelogin').click();
                this.$router.push({ name: "profile" });
                this.$toasted.global.login()
            });
        },
        registerform: function() {
            this.sendRegisterRequest(this.register).then(() => {
                document.getElementById('closelogin').click();
                this.$router.push({ name: "profile" });
                this.$toasted.global.register()
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
