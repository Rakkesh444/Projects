<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UserVisitingPAge</title>
    <!-- css -->
    <link rel="stylesheet" href="{{asset('css/home.css')}}">
    <!-- bt -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- bt icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body>

    <!-------- Navigation ----------->
    <section class="Section-Nav">
        <nav class="navbar navbar-expand-lg position-fixed w-100 z-1">
            <div class="container-fluid">
                <!-- logo -->
                <a href="" class="navbar-brand">
                    <i class="bi bi-amd"></i>FriendsTech</a>
                <!-- logo End -->
                <!-- Toggler btn -->
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Toggler btn End -->
                <!--Navbar Links -->
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="" class="nav-link">About</a></li>
                        <li class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">UserVisited
                            </a>
                            <!-- Dropdoun Links -->
                            <ul class="dropdown-menu">
                                <li><a href="" class="dropdown-item">Item</a></li>
                                <li><a href="" class="dropdown-item">Order</a></li>
                                <li><a href="" class="dropdown-item">Status</a></li>
                                <li><a href="" class="dropdown-item">Product</a></li>
                            </ul>
                            <!-- Dropdoun Links End-->
                        </li>
                        <li class="nav-item"><a href="" class="nav-link">PlaceOrder</a></li>
                        <li class="nav-item"><a href="" class="nav-link">Help</a></li>
                    </ul>
                    <!-- Navbar Button -->
                    <div class="buttons">
                        <a href="{{route('logout')}}" class=""><i class="bi bi-people"></i>Logout</a>
                    </div>
                    <!-- Navbar Button End -->
                </div>
                <!--Navbar Links End-->
            </div>
        </nav>
    </section>
    <!-------Navigation End ---------->

    <!-- Front Page  -->
    <section class="Front-Section text-center">
        <div class="container">
            <div class="row align-items-center d-block d-md-flex">
                <div class="col col-md-4 text-center text-light">
                    <div class="text">
                        <h1 class="badge text-bg-secondary">Welcome User</h1>
                        <h1 class="display-5">This Site is User Friendly</h1>
                        <p>User To Visiting This Site To Using Our Useful Idea</p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div class="col">
                    <img src="/Image/yelloew images.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
    <!-- Front Page End -->

    <!-- About Section -->
    <section class="About_Section text-center">
        <div class="container">
            <div class="row p-5">
                <div class="col">
                    <div class="card ">
                        <img src="/Image/card1.png" class=" img-fluid card-img-top w-50 h-50 mx-auto" alt="">
                        <div class="card-body">
                            <h1 class="card-title">Primary Items</h1>
                            <h5>Serach More Products</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                            <a href=""><i class="bi bi-bing"></i><span>More</span></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/Image/card2.png" class=" img-fluid card-img-top w-50 h-50 mx-auto" alt="">
                        <div class="card-body">
                            <h1 class="card-title">Primary Items</h1>
                            <h5>Serach More Products</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                            <a href=""><i class="bi bi-bing"></i><span>More</span></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/Image/card3.png" class=" img-fluid card-img-top w-50 h-50 mx-auto" alt="">
                        <div class="card-body">
                            <h1 class="card-title">Primary Items</h1>
                            <h5>Serach More Products</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                            <a href=""><i class="bi bi-bing"></i><span>More</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->
    <!-- js bt -->
    <script src="./user.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

</body>

</html>