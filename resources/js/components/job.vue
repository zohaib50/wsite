<template>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>Job Rating</h1>
                </div>
            </div>
        </div>
        <main id="main-content">
            <div class="container m-5">
                <div class="mt-5">
                    <div v-if="ratingData.data.length == 0">
                        <h2 class="my-3">Please give your feedback:</h2>
                        <form class="form-horizontal" v-on:submit.prevent="postRating" method="post">
                            <!-- Rating -->
                            <div class="form-group">
                                <div class="col-md-8 my-3">
                                    <star-rating v-model="rating" :show-rating="false"></star-rating>
                                </div>
                            </div>
                            <!-- Message body -->
                            <div class="form-group">
                                <div class="col-md-8 my-3">
                                    <textarea v-model="message" class="form-control" placeholder="Please enter your feedback here..." rows="5"></textarea>
                                </div>
                            </div>
                            <!-- Form actions -->
                            <div class="form-group">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-feedback">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row my-3" v-else v-for="(item, index) in ratingData.data">
                        <div class="col-md-8">
                            <div>
                                <h2 class="my-3">Thanks for Rating:</h2>
                            </div>
                            <div class="rating-content">
                                <div><h5>{{item.customer.name}}</h5></div>
                                <star-rating v-model="item.rating" :read-only="true" :star-size="30" :show-rating="true"></star-rating>
                                <div class="my-3">
                                    <p>{{item.message}}</p>
                                </div>
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
import StarRating from 'vue-star-rating'
import { mapGetters, mapActions } from "vuex";
export default {
    name: "job",
    data() {
        return {
            limit:100,
            job: null,
            rating: null,
            message:null,
            ratingData:null,
        }
    },
    computed: {
        ...mapGetters("auth", ["user"])
    },
    mounted() {
        this.getjob()
        window.scrollTo(0, 0)
    },
    methods: {
        getjob: function () {
            axios.get('/customer/job/' + this.$route.params.id).then(response => {
                console.log(response.data)
                this.job = response.data
                this.getRating()
            }).catch(error => {

            })
        },
        getRating: function (){
          axios.get('/customer/inquiry/rating?userId='+this.job.merchent.id+'&customerId='+this.user.id+'&inquiryId='+this.job.id+'&limit='+this.limit).then(response => {
              this.ratingData = response.data
              console.log(response)
          }).catch(error => {


          })
        },
        postRating: function (){
            axios.post('/customer/inquiry/rating', {
                'customer_id' : this.user.id,
                'user_id' : this.job.merchent.id,
                'inquiry_id' : this.job.id,
                'rating' : this.rating,
                'message' : this.message,
            }).then(response => {
                this.getRating()
                this.rating = null
                this.message=null
                console.log(response);
            })
        }
    },
    components: {
        StarRating
    }
}
</script>

<style scoped>

</style>
