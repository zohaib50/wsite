<template>
<div>
    <div id="banner-area" class="banner-area">
        <div class="container">
            <div class="page-title">
                <h1>Become A Contractor</h1>
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
                                <h1>If you want to Become A Contractor fill this form!</h1>
                                <form method="POST" v-on:submit.prevent="createCustomer" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Your Name</label>
                                            <input type="text" v-model="contractor.name" :class="{ 'is-invalid': errors.name }" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">E-mail</label>
                                            <input type="emial" v-model="contractor.email" :class="{ 'is-invalid': errors.email }" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Your Profile Picture</label>
                                            <input type="file" v-on:change="profileFileUpload" :class="{ 'is-invalid': errors.profile_image }" ref="file1" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.profile_image">{{ errors.profile_image[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Government Photo</label>
                                            <input type="file" v-on:change="govtFileUpload" :class="{ 'is-invalid': errors.govt_photo }" ref="file2" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.govt_photo">{{ errors.govt_photo[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Business Name</label>
                                            <input type="text" v-model="contractor.business_name" :class="{ 'is-invalid': errors.business_name }" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.business_name">{{ errors.business_name[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Business Address</label>
                                            <input type="text" v-model="contractor.business_address" :class="{ 'is-invalid': errors.business_address }" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.business_address">{{ errors.business_address[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label">Contractor Details</label>
                                            <textarea v-model="contractor.details" :class="{ 'is-invalid': errors.details }" class="form-control"></textarea>
                                            <div class="invalid-feedback" v-if="errors.details">{{ errors.details[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Password</label>
                                            <input type="password" v-model="contractor.password" :class="{ 'is-invalid': errors.password }" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <label class="form-label">Confirm Password</label>
                                            <input type="password" v-model="contractor.password_confirmation" class="form-control">
                                            <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                                            <div v-else> &nbsp; </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-submit"  >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <top-rating></top-rating>
        <companies></companies>
        <social-media></social-media>
    </main>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "become-contractor",
    data(){
        return{
            contractor:{
                name:null,
                email:null,
                profile_image:null,
                govt_photo:null,
                business_name:null,
                business_address:null,
                details:null,
                password:null,
                password_confirmation:null,
            },
        }
    },
    computed: {
        ...mapGetters(["errors"])
    },
    mounted() {
        this.$store.commit("setErrors", {});
        window.scrollTo(0, 0)
    },
    methods:{
        profileFileUpload(){
            this.contractor.profile_image = this.$refs.file1.files[0];
        },
        govtFileUpload(){
            this.contractor.govt_photo = this.$refs.file2.files[0];
        },
        createCustomer(){
            const formData = new FormData();
            formData.append('name', this.contractor.name);
            formData.append('email', this.contractor.email);
            formData.append('profile_image', this.contractor.profile_image);
            formData.append('govt_photo', this.contractor.govt_photo);
            formData.append('business_name', this.contractor.business_name);
            formData.append('business_address', this.contractor.business_address);
            formData.append('details', this.contractor.details);
            formData.append('password', this.contractor.password);
            formData.append('password_confirmation', this.contractor.password_confirmation);

            const otherdata = this.contractor

            console.log(formData)

            axios.post('/customer/contractor/create', {formData, otherdata},{
                headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    if(response.status == 200){

                        this.contractor.name = null
                        this.contractor.email = null
                        this.contractor.profile_image = null
                        this.contractor.govt_photo = null
                        this.contractor.business_name = null
                        this.contractor.business_address = null
                        this.contractor.details = null
                        this.contractor.password = null
                        this.contractor.password_confirmation = null

                        this.$router.push('contractors')
                        this.$toasted.global.becomeContractor();
                    }
                }).catch(error => {

                })
        }
    }
}
</script>

<style scoped>

</style>
