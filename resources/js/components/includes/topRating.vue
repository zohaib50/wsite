<template>
    <section class="reviews-area">
        <div class="container">
            <h1><span>EXCELLENT</span> CUSTOMER FEEDBACK</h1>
            <div class="reviews-box">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-4 col-12" v-for="(item, index) in top">
                        <div class="card review-card">
                            <div class="review-img">
<!--                                <img src="assets/img/p1.webp" class="img-fluid">-->
                                <avatar :fullname="item.customer.name" :size="150"></avatar>
                            </div>
                            <div class="review-rating">
                                <star-rating v-model="item.rating" :increment="0.1"
                                             :read-only="true" :star-size="30"
                                             :show-rating="false"
                                class="justify-content-center my-3"></star-rating>
                            </div>
                            <div class="review-content">
                                <p>{{item.message}}</p>
                                <h4>{{ item.customer.name }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Avatar from 'vue-avatar-component'
import StarRating from "vue-star-rating";
export default {
    name: "topRating",
    data(){
        return {
            top:[]
        }
    },
    mounted() {
      this.getRatingTop()
    },
    methods:{
        getRatingTop: function (){
            axios.get('/customer/top/rating').then(response => {
                if(response.status == 200){
                    this.top = response.data
                }
            })
        }
    },
    components:{
        Avatar,
        StarRating
    }
}
</script>

<style scoped>

</style>
