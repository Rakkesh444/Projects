<?php

use App\Http\Controllers\auth\loginComtroller;
use App\Http\Controllers\Auth\registerController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');
Route::view('/welcome', 'welcome');
Route::view('home', 'home')->name('home')->middleware('auth');
// register controller
Route::view('register', 'formpages.register')->name('register')->middleware('guest');
Route::post('loginstore', [registerController::class, 'loginstore']);
// login controller
Route::view('login', 'formpages.login')->name('login')->middleware('guest');
Route::post('userlogin', [loginComtroller::class, 'userlogin']);
Route::get('logout', [loginComtroller::class, 'logout'])->name('logout');
