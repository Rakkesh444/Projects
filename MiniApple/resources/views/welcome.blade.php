<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- css link -->
    <link rel="stylesheet" href="{{asset('css/welcomepage.css')}}">
    <!-- Bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

</head>

<body>


    <!-- Navigation Section -->
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <!-- Page Logio -->
            <a href="" class="navbar-brand">VrCorner</a>
            <!-- Page Logio End-->
            <!-- Toggler Icon -->
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbare" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Toggler Icon -->
            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbare">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="{{route('login')}}" class="nav-link">Login</a></li>
                    <li class="nav-item"><a href="{{route('register')}}" class="nav-link">Register</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navigation Section End -->

    <!-- Welcome Page -->
    <div class="welcome_page container align-items-center justify-content-center d-flex text-center">
        <div class="content_welocom">
            <div class="icon_dragon">
                <i class="fa-solid fa-dragon"></i>
            </div>
            <div class="txt" data-aos="zoom-in" data-aos-duration="2000">
                <h1 class="display-1">Welcome User</h1>
                <p class="text-light">Hi User....This Site Only User Can Register New Account Or Login Our Account To
                    See
                    Real Page</p>
                <div class="icons d-flex justify-content-center me-5">
                    <a href="" class="nav-link">
                        <i class="fa-brands fa-google"></i>
                    </a>
                    <a href="" class="nav-link">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="" class="nav-link">
                        <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="" class="nav-link">
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </a>
                    <a href="" class="nav-link">
                        <i class="fa-solid fa-registered"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Welcome Page End -->

    <!-- About Section  -->
    <div class="aboute_section container-lg">
        <div class="about_content">
            <div class="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                <div class="col">
                    <div class="buttons" data-aos="zoom-out" data-aos-duration="700">
                        <button id="btn1" onclick="user()">User</button>
                        <button id="btn2" onclick="Prodects()">Products</button>
                        <button id="btn3" onclick="Notice()">Notice</button>
                    </div>
                    <hr>
                    <div class="content" id="content1" data-aos="fade-down-right">
                        <h1>User Login</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti, enim in
                            perspiciatis doloribus laborum ratione distinctio dignissimos ea quo a iste at autem
                            corporis architecto maiores adipisci, deleniti nihil?</p>
                        <a href="" id="about_btn1">Register
                            <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                    <div class="content" id="content2">
                        <h1>Products</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti, enim in
                            perspiciatis doloribus laborum ratione distinctio dignissimos ea quo a iste at autem
                            corporis architecto maiores adipisci, deleniti nihil?</p>
                        <a href="" id="about_btn2">Register
                            <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                    <div class="content" id="content3">
                        <h1>Notice</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti, enim in
                            perspiciatis doloribus laborum ratione distinctio dignissimos ea quo a iste at autem
                            corporis architecto maiores adipisci, deleniti nihil?</p>
                        <a href="" id="about_btn3">Register
                            <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <img src="/Image/card3.png" class="img-fluid" alt="" data-aos="fade-left" data-aos-duration="1500">
                </div>
            </div>
        </div>
    </div>
    <!-- About Section End -->

    <!-- Card Section-->
    <div class="card_section container-fluid p-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div class="col mt-5">
                <div class="card p-5 mx-auto " data-aos="flip-right" data-aos-duration="1000">
                    <div class="text mx-auto">
                        <div class="text-center">
                            <i class="fa-solid fa-right-to-bracket "></i>
                            <h5 class="card-title mt-4">
                                User Login
                            </h5>
                            <p class="card-text text-secondary mt-4">
                                User Login Our Account
                            </p>
                            <a href="" class="mt-5">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-5 " id="col2">
                <div class="card p-5 mx-auto " data-aos="flip-right" data-aos-duration="1000">
                    <div class="text mx-auto">
                        <div class=" text-center">
                            <i class="fa-solid fa-registered"></i>
                            <h6 class="card-title mt-4">
                                User Register
                            </h6>
                            <p class="card-text text-secondary mt-4">
                                User Register
                            </p>
                            <a href="" class="mt-5">Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-5">
                <div class="card p-5 mx-auto" data-aos="flip-right" data-aos-duration="1000">
                    <div class="text mx-auto">
                        <div class="text-center">
                            <i class="fa-brands fa-google"></i>
                            <h5 class="card-title mt-4">
                                Products
                            </h5>
                            <p class="card-text text-secondary mt-3">
                                Our Products List
                            </p>
                            <a href="" class="mt-5">See Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-5">
                <div class="card p-5 mx-auto " data-aos="flip-right" data-aos-duration="1000">
                    <div class="text mx-auto">
                        <div class="text-center">
                            <i class="fa-brands fa-google"></i>
                            <h5 class="card-title mt-4">
                                Products
                            </h5>
                            <p class="card-text text-secondary mt-3">
                                Our Products List
                            </p>
                            <a href="" class="mt-5">See Out</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Card Section End -->

    <!-- End Section -->
    <div class="end_section container-fluid">
        <div class="text text-light">
            <h1 class="display-1  text-center" data-aos="zoom-in" data-aos-duration="1000">Thank You</h1>
            <div class="links">
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col">
                        <div class="link1">
                            <div class="link_head">
                                <a href="" class="text-warning fs-4">Contact</a>
                            </div>
                            <div class="contact_link d-flex flex-column">
                                <label for="">
                                    Phone : <a href="">9025347645</a>
                                </label>
                                <label for="">
                                    CEll : <a href="">04646 87654</a>
                                </label>
                                <label for="">
                                    Email : <a href="">rakkesh@gmail.com</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="link1">
                            <div class="link_head">
                                <a href="" class="text-warning fs-4">Register</a>
                            </div>
                            <div class="contact_link d-flex flex-column">
                                <a href="">Home</a>
                                <a href="">Login</a>
                                <a href="">Register</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="link1">
                            <div class="link_head">
                                <a href="" class="text-warning fs-4">Services</a>
                            </div>
                            <div class="contact_link d-flex flex-column">
                                <a href="">Brands</a>
                                <a href="">Poducts</a>
                                <a href="">Updates</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Section End -->
    <script src="{{asset('js/welcome.js')}}"></script>
    <!-- Bootstrap link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <!-- AOS Animation -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

</body>

</html>