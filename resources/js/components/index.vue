<template>
    <div>
        <div id="banner-area">
            <div class="overlay_1"></div>
            <div class="banner-slider owl-carousel owl-theme">
                <div class="item">
                    <div class="banner-img">
                        <img src="https://via.placeholder.com/1920x750" class="img-fluid d-block mx-auto w-100">
                    </div>
                    <div class="text-area">
                        <div class="container">
                            <h1>Heading 1</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main id="main-content">
            <vue-search></vue-search>
            <top-rating></top-rating>
            <companies></companies>
            <social-media></social-media>
        </main>
    </div>
</template>
<script>
export default {
    name: "index",
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>

</style>
