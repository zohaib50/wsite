<template>
    <div>
        <div id="banner-area" class="banner-area">
            <div class="container">
                <div class="page-title">
                    <h1>404</h1>
                </div>
            </div>
        </div>
        <main id="main-content">

            <companies></companies>
            <social-media></social-media>
        </main>
    </div>
</template>

<script>
export default {
    name: "404",
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>

</style>
