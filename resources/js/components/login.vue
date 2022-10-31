<template>
<div>
    <section class="contractor-form-area">
        <div class="container">
            <div class="form-area">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-7 col-12">
                        <div class="form-box">
                            <h1>If you want to login fill this form!</h1>
                            <form method="POST" v-on:submit.prevent="login" enctype="multipart/form-data">
                                <div class="row">
<!--                                    <div class="alert alert-danger ">{{ $error }}</div>-->
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Your Email</label>
                                        <input type="email" v-model="form.email" name="email" value="" class="form-control">
<!--                                        <div class="alert alert-danger ">{{ $message }}</div>-->
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <label class="form-label">Password</label>
                                        <input type="password" v-model="form.password" name="password" value="" class="form-control">
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
    name: "login",
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        };
    },
    methods: {
        login: function() {
            axios.post("http://localhost:8000/api/customer/login", this.form)
                .then(response => {
                    console.log(response.data.data.api_token)
                    localStorage.setItem("authToken", response.data.data.api_token);
                    window.location.href='/dashboard'
                });
        }
    }
}
</script>

<style scoped>

</style>
