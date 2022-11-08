<template>
    <section class="sec-5">
        <div class="container">
            <h4>SHARE THIS PAGE</h4>
            <ul class="nav social-nav justify-content-center">
                <li class="nav-item">
                    <a href="https://twitter.com/" target="_blank" class="nav-link tw">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.facebook.com/" target="_blank" class="nav-link fb">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name : 'contact' }" class="nav-link mail">
                        <i class="fas fa-envelope"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "socialmedia"
}
</script>

<style scoped>

</style>
