<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>User Form</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{asset('css/loginform.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- bt-icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</head>

<body>
    <div class="container">
        <div class="back_animation text-light">
            <i class="bi bi-balloon-heart"></i>
            <i class="bi bi-balloon-heart"></i>
            <i class="bi bi-balloon-heart"></i>
            <i class="bi bi-balloon-heart"></i>
            <i class="bi bi-balloon-heart"></i>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="Register_Form">
            <form action="/loginstore" method="POST" class="text-light text-center">
                @csrf
                <div class="head">
                    <h1>Register</h1>
                </div>
                <div class="input mt-4">
                    <input type="text" name="name" placeholder="Enter Name" class="form-control">
                </div>
                <div class="input mt-4">
                    <input type="email" name="email" placeholder="Enter Email" class="form-control">
                </div>
                <div class="input mt-4">
                    <input type="password" name="password" placeholder="Enter Password" class="form-control">
                </div>
                <div class="btn">
                    <input type="submit" class="mt-3" value="Register" name="register">
                </div>
            </form>
        </div>


    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>