<template>
<div>
    <section class="search-area">
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Find material kit near you.
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Find material + Contractor near you.</button>
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
                            <input type="search" class="form-control" placeholder="Search">
                            <div class="input-group-append">
                                <button class="btn btn-submit" type="submit"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contractors-area">
        <div class="contractors-info">
            <div class="container">
                <div class="row">
                    <div v-for="merchant in merchants" class="col-lg-12 col-md-12 col-12">
                        <div class="card contractor-card">
                            <div class="row">
                                <div class="col-lg-2 col-md-2 col-12">
                                    <div class="contractor-img">
                                        <img :src="merchant.profile_image" class="img-fluid">
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
                                            <a :href="'inquiries/'+merchant.id" class="btn btn-cont" target="_blank">
                                                Link Calculator
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="next-page">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
export default {
    name: "search",
    data(){
        return{
            merchants:[],
            page:1,
            searchmerchant:'',
            limit:5
        }
    },
    mounted() {
       this.getmerchant()
    },
    methods:{
        getmerchant(){
            axios.get('http://localhost:8000/api/merchant/list?'+'page='+this.page+'&search='+this.searchmerchant+'&limit'+this.limit ).then(response => {
                this.merchants=response.data.data
                console.log(response.data);
            }).catch(error => {

            })
        }
    }
}
</script>

<style scoped>

</style>
