@extends('layouts.app')

@section('content')

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
    <!--            <section class="sec-1">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-9">
                                <h1>
                                    At AIRCONCHAMP we believe that everybody deserves a health friendly and professional CAR AC Service.
                                </h1>
                                <p>GET THE ONLY CLEANING SERVICE WITH A FREE HYGIENE ANALYSIS (BEFORE – AFTER)</p>
                                <a href="#" class="btn btn-main">
                                    Service Locator
                                </a>
                            </div>
                        </div>
                    </div>
                </section>-->
    <!--  <section class="sec-2">
       <div class="container">
           <h4>Our Services</h4>
           <div class="watch-area">
               <div class="service-slider owl-carousel owl-theme">
                   <div class="item">
                       <div class="card watch-card">
                           <img src="assets/img/w1.webp" class="img-fluid" alt="">
                           <div class="card-body">
                               <h3>Air Quality Checks – MOVC</h3>
                               <p>Lorem Ipsum</p>
                           </div>
                       </div>
                   </div>
                   <div class="item">
                       <div class="card watch-card">
                           <img src="assets/img/w1.webp" class="img-fluid" alt="">
                           <div class="card-body">
                               <h3>Cooling Coil and Cabin Filter Box Cleaning</h3>
                               <p>Lorem Ipsum</p>
                           </div>
                       </div>
                   </div>
               </div>

           </div>
       </div>
   </section>
   <section class="sec-3">
       <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
           <div class="carousel-inner">
               <div class="carousel-item active" data-bs-interval="3000">
                   <img src="assets/img/bg1.webp" class="d-block w-100" alt="...">
               </div>
               <div class="carousel-item" data-bs-interval="3000">
                   <img src="assets/img/bg2.webp" class="d-block w-100" alt="...">
               </div>
           </div>
       </div>
       <div class="container">
           <div class="overlay"></div>
           <div class="main-text">
               <div class="col-lg-6">

                   <h1>FOR THE FIRST TIME
                       YOU GET FULL TRANSPARENCY
                       FROM A CAR WORKSHOP</h1>
                   <ul class="nav flex-column">
                       <li><p>100% RISK FREE 🡪 MONEY BACK</p></li>
                       <li><p>BEFORE - AFTER COMPARISON</p></li>
                       <li><p>INDEPENDENTLY APPROVED SENSOR</p></li>
                   </ul>
                   <a href="#" class="btn btn-clm">
                       Learn More
                   </a>
               </div>
           </div>
       </div>
   </section>
   <section class="location-area">
       <div class="container">
           <div class="location-box">
               <div class="row">
                   <div class="col-lg-6 co-md-6 col-12">
                       <div class="location-img">
                           <img src="https://via.placeholder.com/1250x750" alt="" id="Demo" class="img-fluid h-100"/>
                       </div>
                   </div>
                   <div class="col-lg-6 co-md-6 col-12">
                       <div class="row">
                           <div class="col-lg-6 col-md-6 col-12">
                               <div class="card location-card" onmouseenter="document.getElementById('Demo').src='https://via.placeholder.com/1250x750';">
                                   <div class="location-title">
                                       <h1>Merchants</h1>
                                   </div>
                                   <div class="location-desc">
                                       <p>Physical Store Location</p>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-12">
                               <div class="card location-card" onmouseenter="document.getElementById('Demo').src='https://via.placeholder.com/1250x750';">
                                   <div class="location-title">
                                       <h1>Contractors </h1>
                                   </div>
                                   <div class="location-desc">
                                       <p>Who can build the sauna.</p>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <!--            <section class="sec-4">
                   <div class="container">
                       <div class="card-box">
                           <div class="row justify-content-center">
                               <div class="col-lg-10 col-md-10 col-12">
                                   <h4>Discovering Rolex</h4>
                                   <div class="row">
                                       <div class="col-lg-12">
                                           <div class="card zoom-card">
                                               <img src="assets/img/lom.jpg" alt="" class="img-fluid"/>
                                               <div class="card-body">
                                                   <h3>Rolex and Waterproofness</h3>
                                 </div>
               </div>
           </div>
       </div>
   </section>
   <!--            <section class="sec-4">
                   <div class="container">
                       <div class="card-box">
                           <div class="row justify-content-center">
                               <div class="col-lg-10 col-md-10 col-12">
                                   <h4>Discovering Rolex</h4>
                                   <div class="row">
                                       <div class="col-lg-12">
                                           <div class="card zoom-card">
                                               <img src="assets/img/lom.jpg" alt="" class="img-fluid"/>
                                              <p>Mastering Waterproofness</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-lg-6">
                                           <div class="card zoom-card">
                                               <img src="assets/img/op.jpg" alt="" class="img-fluid"/>
                                               <div class="card-body">
                                                   <h3>Rolex and Waterproofness</h3>
                                                   <p>Mastering Waterproofness</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-lg-6">
                                           <div class="card zoom-card">
                                               <img src="assets/img/hp.webp" alt="" class="img-fluid"/>
                                               <div class="card-body">
                                                   <h3>Rolex and Waterproofness</h3>
                                                   <p>Mastering Waterproofness</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>-->
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
    @include('layouts.companies')
    @include('layouts.socialmedia')
</main>

@endsection
