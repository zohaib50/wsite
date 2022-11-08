<template>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>Contact</h1>
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
                                    <h1>Feel free contact us our team</h1>
                                    <form method="POST" v-on:submit.prevent="login" enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Title</label>
                                                <input type="text" v-model="details.title" :class="{ 'is-invalid': errors.title }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.title">{{ errors.title[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Your Name</label>
                                                <input type="text" v-model="details.name" :class="{ 'is-invalid': errors.name }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <label class="form-label">Your E-mail</label>
                                                <input type="email" v-model="details.email" :class="{ 'is-invalid': errors.email }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <label class="form-label">Phone No.</label>
                                                <input type="number" v-model="details.phone" :class="{ 'is-invalid': errors.phone }" class="form-control">
                                                <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                                                <div v-else> &nbsp; </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-12">
                                                <label class="form-label">Message</label>
                                                <textarea  v-model="details.password" :class="{ 'is-invalid': errors.password }" class="form-control" rows="6"></textarea>
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
    name: "contact",
    data(){
        return{
            details: {
                title:null,
                name:null,
                email: null,
                phone:null,
                message: null
            }
        }
    },
    computed: {
        ...mapGetters(["errors"])
    },

    mounted() {
        this.$store.commit("setErrors", {});
        window.scrollTo(0, 0)
    },
}
</script>

<style scoped>

</style>
