<template>
<div>
    <section class="contractor-form-area">
        <div class="container">
            <div class="form-area">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-7 col-12">
                        <div class="form-box">
                            <h1>If you want to register fill this form!</h1>
                            <form action="" v-on:submit.prevent="register" method="POST" enctype="multipart/form-data">
                                <div class="row">
<!--                                    <div class="alert alert-danger ">{{ $error }}</div>-->
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Your Name</label>
                                        <input type="text" v-model="form.name" name="name" value="" class="form-control">
<!--                                        <div class="alert alert-danger ">{{ $message }}</div>-->
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Your Email</label>
                                        <input type="email" v-model="form.email" name="email" value="" class="form-control">
<!--                                        <div class="alert alert-danger ">{{ $message }}</div>-->
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Password</label>
                                        <input type="password" v-model="form.password_confirmation" name="password" value=""class="form-control">
<!--                                        <div class="alert alert-danger ">{{ $message }}</div>-->
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Confirm Password</label>
                                        <input type="password" v-model="form.password" name="password" value=""class="form-control">
                                        <!--                                        <div class="alert alert-danger ">{{ $message }}</div>-->
                                    </div>
                                </div>
                                <button class="btn btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "register",
    data(){
        return{
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
        }
    },
    methods: {
        register: function() {
            axios
                .post("http://localhost:8000/api/customer/register", this.form)
                .then(response => {
                    console.log(response)
                    localStorage.setItem("authToken", response.data.data.token);
                }).catch(error => {
                    console.log(error)
            });
        }
    }
}
</script>

<style scoped>

</style>
