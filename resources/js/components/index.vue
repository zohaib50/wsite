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
            <section class="reviews-area">
                <div class="container">
                    <h1><span>EXCELLENT</span> CUSTOMER FEEDBACK</h1>
                    <div class="reviews-box">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="card review-card">
                                    <div class="review-img">
                                        <img src="assets/img/p1.webp" class="img-fluid">
                                    </div>
                                    <div class="review-rating">
                                        <ul class="nav rating-nav">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review-content">
                                        <p>
                                            "This goes directly to the cooling coil and cleans it up. This one is the Real Deal!"
                                        </p>
                                        <h4>DEREK K.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="card review-card">
                                    <div class="review-img">
                                        <img src="assets/img/p2.webp" class="img-fluid">
                                    </div>
                                    <div class="review-rating">
                                        <ul class="nav rating-nav">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review-content">
                                        <p>
                                            "Bacteria is an important topic. It's a very good Feeling after the Cleaning. This is a really good product"
                                        </p>
                                        <h4>SUNIL S.</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="card review-card">
                                    <div class="review-img">
                                        <img src="assets/img/p3.webp" class="img-fluid">
                                    </div>
                                    <div class="review-rating">
                                        <ul class="nav rating-nav">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="fas fa-star"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review-content">
                                        <p>
                                            "It goes directly to the Cooling Coil and kills the Bacteria. Whereby other products just give a nice smell."
                                        </p>
                                        <h4>TOBIAS R.</h4>
                                    </div>
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
export default {
    name: "index"
}
</script>

<style scoped>

</style>
