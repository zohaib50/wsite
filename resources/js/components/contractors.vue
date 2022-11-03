<template>
<div>
    <div id="banner-area" class="banner-area">
        <div class="container">
            <div class="page-title">
                <h1>Our Contractors</h1>
            </div>
        </div>
    </div>
    <main id="main-content">
        <section class="contractors-area">
            <div class="filter-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <h1>Hire Our Contractors</h1>
                            <div class="hiring-selection">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>By Rating</option>
                                            <option value="1">1 Star Rating</option>
                                            <option value="2">2 Star Rating</option>
                                            <option value="3">3 Star Rating</option>
                                            <option value="4">4 Star Rating</option>
                                            <option value="5">5 Star Rating</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>By # Of Completed Jobs</option>
                                            <option value="1">Completed Jobs 10</option>
                                            <option value="2">Completed Jobs 20</option>
                                            <option value="3">Completed Jobs 30</option>
                                            <option value="4">Completed Jobs 40</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>By Distance</option>
                                            <option value="1">10 Km</option>
                                            <option value="2">20 Km</option>
                                            <option value="3">30 Km</option>
                                            <option value="4">40 Km</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-12">
                                        <div class="input-group">
                                            <input type="search" class="form-control" placeholder="Search A contractor">
                                            <div class="input-group-append">
                                                <button class="btn btn-sea"><i class="fal fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contractors-info">
                <div class="container">
                    <div class="card contractor-card">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img src="assets/img/log.jfif" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>Name Come Here</h3>
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
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>20(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Distance</h5>
                                                    <p>(5 Km Away)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <button type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hire Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card contractor-card">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img src="assets/img/log.jfif" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>Name Come Here</h3>
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
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>30(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Distance</h5>
                                                    <p>(10 Km Away)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <button type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hire Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card contractor-card">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img src="assets/img/log.jfif" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>Name Come Here</h3>
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
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>40(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Distance</h5>
                                                    <p>(20 Km Away)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <button type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hire Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card contractor-card">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img src="assets/img/log.jfif" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>Name Come Here</h3>
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
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>50(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Distance</h5>
                                                    <p>(30 Km Away)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <button type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hire Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card contractor-card">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-12">
                                <div class="contractor-img">
                                    <img src="assets/img/log.jfif" class="img-fluid">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12 align-self-center">
                                <div class="contractor-content">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-12">
                                            <h3>Name Come Here</h3>
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
                                        <div class="col-lg-3 col-md-3 col-12">
                                            <div class="job-box">
                                                <h5>Completed Jobs</h5>
                                                <p>50(Jobs)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it</p>
                                    <div class="distance-area">
                                        <div class="row">
                                            <div class="col-lg-9 col-md-9 col-12">
                                                <div class="dis-box">
                                                    <h5>Distance</h5>
                                                    <p>(50 Km Away)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-12">
                                                <button type="button" class="btn btn-cont" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hire Contractor
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="next-page">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
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
    name: "contractors"
}
</script>

<style scoped>

</style>
