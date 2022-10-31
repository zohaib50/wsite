<div class="overlay"></div>
<header id="header-content">
    <div class="menu-bar bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-4">
                    <div class="menu-content">
                        <div class="row">
                            <div class="col-lg-3 col-4 align-self-center">
                                <a href="#" class="btn btn-menu"><i class="fal fa-bars"></i> <span>Menu</span></a>
                            </div>
                            <div class="col-lg-9 align-self-center hide-on-mobile">
                                <ul class="nav menu-nav">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Service Locator
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-4">
                    <div class="site-logo">
                        <div class="desktop-logo">
                            <a href="#" style="color: #fff;text-decoration: none;">
                                <img src="https://via.placeholder.com/412x199" class="img-fluid">
                            </a>
                        </div>
                        <div class="mobile-logo">
                            <a href="#" style="color: #000;text-decoration: none;">
                                <img src="https://via.placeholder.com/412x199" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-4">
                    <vue-header login="{{route('login')}}" register="{{route('register')}}" dashboard="{{route('dashboard')}}"></vue-header>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-area ">
        <div class="site-identity">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <button type="button" class="btn btn-diss"><i class="fal fa-times"></i></button>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="site-logo">
                        <img src="https://via.placeholder.com/412x199" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        <div class="site-nav">
            <ul class="nav flex-column main-nav">
                <li class="nav-item">
                    <a href="{{route('index')}}" class="nav-link">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('about')}}" class="nav-link">
                        About
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{route('contractors')}}" class="nav-link">
                        Become a Contractor
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('become.contractor')}}" class="nav-link">
                        Hire A contractor
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{route('faq')}}" class="nav-link">
                        Faq
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('contact')}}" class="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>
<div id="search-bar">
    <div class="container">
        <div class="search-top">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">

                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="site-logo">
                        <a href="#">
                            <img src="https://via.placeholder.com/412x199" class="img-fluid" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <button class="btn btn-clo"><i class="fal fa-times"></i></button>
                </div>
            </div>
        </div>
        <div class="search-content">
            <h1>SEARCH THE ROLEX WEBSITE</h1>
            <div class="search-form">
                <div class="input-group">
                    <input type="search" class="form-control" placeholder="Search">
                    <div class="input-group-append">
                        <button class="btn btn-submit" type="submit"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
