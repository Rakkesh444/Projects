<?php

use App\Http\Controllers\auth\loginController;
use App\Http\Controllers\Auth\registerController;
use Illuminate\Support\Facades\Route;

Route::view('home', 'home');
// register controller
Route::view('register', 'formpages.register');
Route::post('loginstore', [registerController::class, 'loginstore']);
// login controller
Route::view('login', 'formpages.login');
Route::post('userlogin', [loginController::class, 'userlogin']);
