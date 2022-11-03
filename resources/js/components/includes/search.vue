<template>
<div>
    <section class="search-area">
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" @click="tab = true" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Find material kit near you.</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" @click="tab = false" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Find material + Contractor near you.</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="search-form">
                        <div class="input-group">
                            <input type="search" v-model="searchmerchant" class="form-control" placeholder="Search">
                            <div class="input-group-append">
                                <button class="btn btn-submit" @click="getmerchant()" type="submit"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="search-form">
                        <div class="input-group">
                            <input type="search" v-model="searchcontractor" class="form-control" placeholder="Search">
                            <div class="input-group-append">
                                <button class="btn btn-submit" @click="getcontractor()" type="submit"><i class="fas fa-arrow-right"></i></button>
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
                                        <img :src="url+merchant.profile_image" class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-lg-10 col-md-10 col-12">
                                    <div class="contractor-content">
                                        <h3>{{merchant.name}}</h3>
                                        <ul class="nav rating-nav">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="address-box">
                                            <h5>Address</h5>
                                            <p>{{merchant.business_address}}</p>
                                        </div>
                                        <div class="address-box">
                                            <h5>Nearest Distance</h5>
                                            <p>(5 Km Away)</p>
                                        </div>
                                        <div class="button-position">
                                            <a :href="url+'/inquiries/'+merchant.id" class="btn btn-cont" target="_blank">
                                                Link Calculator
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
        <div class="filter-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <h1>Hire Our Contractors</h1>
                        <div class="hiring-selection">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-12">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>By Rating</option>
                                        <option value="1">1 Star Rating</option>
                                        <option value="2">2 Star Rating</option>
                                        <option value="3">3 Star Rating</option>
                                        <option value="4">4 Star Rating</option>
                                        <option value="5">5 Star Rating</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-3 col-12">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>By # Of Completed Jobs</option>
                                        <option value="1">Completed Jobs 10</option>
                                        <option value="2">Completed Jobs 20</option>
                                        <option value="3">Completed Jobs 30</option>
                                        <option value="4">Completed Jobs 40</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-3 col-12">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>By Distance</option>
                                        <option value="1">10 Km</option>
                                        <option value="2">20 Km</option>
                                        <option value="3">30 Km</option>
                                        <option value="4">40 Km</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-3 col-12">
                                    <div class="input-group">
                                        <input type="search" class="form-control" placeholder="Search A contractor">
                                        <div class="input-group-append">
                                            <button class="btn btn-sea"><i class="fal fa-search"></i></button>
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
                                <img :src="url+contractor.profile_image" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-12 align-self-center">
                            <div class="contractor-content">
                                <div class="row">
                                    <div class="col-lg-9 col-md-9 col-12">
                                        <h3>{{contractor.name}}</h3>
                                        <ul class="nav rating-nav">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <div class="job-box">
                                            <h5>Completed Jobs</h5>
                                            <p>20(Jobs)</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it</p>
                                <div class="distance-area">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <div class="dis-box">
                                                <h5>Distance</h5>
                                                <p>(5 Km Away)</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <router-link v-if="user" class="btn btn-cont" :to="{name : 'contractor', params: { id: contractor.id }}">Hire Contractor</router-link>
                                            <button v-if="!user" type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">Hire Contractor</button>
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
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Login</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Register</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="form-area" style="padding: 20px 0;">
                                <section class="contractor-form-area p-0 bg-white">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Email</label>
                                            <input type="email" class="form-control">
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Your Password</label>
                                            <input type="password" class="form-control">
                                        </div>


                                    </div>
                                    <a href="#" class="d-block mb-5" style="text-decoration: none;">
                                        Forgot Password
                                    </a>
                                    <button class="btn btn-submit">Submit</button>

                                </section>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <section class="contractor-form-area p-0 bg-white">
                                <div class="form-area" style="padding: 20px 0;">
                                    <section class="contractor-form-area p-0 bg-white">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Name</label>
                                                <input type="text" class="form-control">
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Email</label>
                                                <input type="email" class="form-control">
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Phone Number</label>
                                                <input type="text" class="form-control">
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Password</label>
                                                <input type="password" class="form-control">
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Re-Enter Password</label>
                                                <input type="password" class="form-control">
                                            </div>


                                        </div>

                                        <button class="btn btn-submit">Submit</button>

                                    </section>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>

import LaravelVuePagination from "laravel-vue-pagination";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "search",
    data(){
        return{
            url:process.env.MIX_APP_URL,
            merchants:[],
            contractors:[],
            page:1,
            searchmerchant:'',
            searchcontractor:'',
            limit:2,
            tab: true,
            pagination:{},
            pagination2:{},
        }
    },
    mounted() {
        this.getmerchant()
        this.getcontractor()
    },
    computed: {
        ...mapGetters("auth", ["user"])
    },
    methods:{
        getmerchant(page = 1){
            axios.get('/merchant/list?'+'page='+page+'&search='+this.searchmerchant+'&limit='+this.limit ).then(response => {
                this.merchants=response.data.data
                this.pagination=response.data
                console.log(response.data);
            }).catch(error => {

            })
        },
        getcontractor(page = 1){
            axios.get('/contractor/list?'+'page='+page+'&search='+this.searchcontractor+'&limit='+this.limit ).then(response => {
                this.contractors=response.data.data
                this.pagination2=response.data
                console.log(response.data);
            }).catch(error => {

            })
        }
    },
    components: {
        'pagination': LaravelVuePagination
    }
}
</script>

<style scoped>

</style>
