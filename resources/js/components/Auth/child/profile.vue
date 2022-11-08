<template>
    <div class="dashboard-body">
        <h3>Profile:</h3>
        <div class="d-flex bd-highlight">
            <div class="p-2 bd-highlight"><h5>Name:</h5></div>
            <div class="p-2 bd-highlight"></div>
            <div class="p-2 flex-grow-1 bd-highlight">{{user.name}}</div>
        </div>
        <div class="d-flex bd-highlight">
            <div class="p-2 bd-highlight"><h5>E-mail:</h5></div>
            <div class="p-2 bd-highlight"></div>
            <div class="p-2 flex-grow-1 bd-highlight">{{ user.email }}</div>
        </div>
        <div class="d-flex bd-highlight">
            <div class=""><h5><a href="#" data-bs-toggle="modal" data-bs-target="#changePassword">Change Your Password</a></h5></div>
        </div>
        <!--model-->
        <div class="modal fade" id="changePassword" tabindex="-1" aria-labelledby="changePasswordLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Change Password</h5>
                        <button type="button" id="closeChangePassword" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="tab-content" id="myTabContent">
                            <section class="contractor-form-area p-0 bg-white">
                                <form method="POST" v-on:submit.prevent="changePassword" enctype="multipart/form-data">
                                    <div class="row mt-3">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Old Password</label>
                                            <input type="password" class="form-control" v-model="change.current_password"
                                                   :class="{ 'is-invalid': errors.current_password }">
                                            <div class="invalid-feedback" v-if="errors.current_password">{{
                                                    errors.current_password[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">New Password</label>
                                            <input type="password" class="form-control" v-model="change.new_password"
                                                   :class="{ 'is-invalid': errors.new_password }">
                                            <div class="invalid-feedback" v-if="errors.new_password">{{
                                                    errors.new_password[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <label class="form-label">Confirm New Password</label>
                                            <input type="password" class="form-control" v-model="change.new_confirm_password"
                                                   :class="{ 'is-invalid': errors.new_confirm_password }">
                                            <div class="invalid-feedback" v-if="errors.new_confirm_password">{{
                                                    errors.new_confirm_password[0]
                                                }}
                                            </div>
                                            <div v-else> &nbsp;</div>
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

import {mapGetters} from "vuex";

export default {
    name: "profile",
    data(){
        return{
            change:{
                current_password:null,
                new_password:null,
                new_confirm_password:null,
            }
        }
    },
    mounted() {
        this.$store.commit("setErrors", {});
        window.scrollTo(0, 0)
    },
    methods:{
        changePassword: function (){
            axios.post('/customer/change-password', this.change).then(response => {
                if(response.status == 200){
                    document.getElementById('closeChangePassword').click();
                    this.change.current_password = null
                    this.change.new_password = null
                    this.change.new_confirm_password = null
                    this.$toasted.global.changePassword();
                }
            }).catch(errors => {

                })
        }
    },
    computed: {
        ...mapGetters("auth", ["user"]),
        ...mapGetters(["errors"])
    },
}
</script>

<style scoped>

</style>
