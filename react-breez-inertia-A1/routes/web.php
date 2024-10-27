<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UpdatePermissions;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Layouts\LayoutController;
use App\Http\Controllers\PermissionGroupController;
use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\AuthController as AuthAuthController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\ComponentsController;

// Route::get('/', function () {
//     return Inertia::render('UserDashboard/Userdashboard');
// })->middleware('auth')->name('dashboard');
Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->middleware(['guest'])->name('login');


// Layoutes Controllers
Route::get('/dashboard', [LayoutController::class, 'index'])->name('dashboard');
Route::get('/dashboard/data', [LayoutController::class, 'getData']);

Route::get('/about', function () {
    return Inertia::render('PageComponents/About');
})->middleware('auth')->name('about');

Route::get('/contact', function () {
    return Inertia::render('PageComponents/Contact');
})->middleware('auth')->name('contact');


Route::get('/create', function () {
    return Inertia::render('Auth/Create');
})->middleware('auth')->name('create');

Route::get('/delete', function () {
    return Inertia::render('Auth/Delete');
})->middleware('auth')->name('delete');


Route::get('/update', function () {
    return Inertia::render('Auth/Update');
})->middleware('auth')->name('update');

// Route::get('/profile', function () {
//     return Inertia::render('Auth/Profil');
// })->middleware('auth')->name('profile');

Route::get('/view', function () {
    return Inertia::render('Auth/View');
})->middleware('auth')->name('view');

Route::get('/rolelist', function () {
    return Inertia::render('Admin/Roles/RoleDisplay');
})->middleware('auth')->name('rolelist');
Route::get('/editrole', function () {
    return Inertia::render('Admin/Roles/RoleEdit');
})->middleware('auth')->name('editrole');


// Route::get('/roleabout', function () {
//     return Inertia::render('UserDashboard/About');
// })->middleware('auth')->name('roleAbout');

// Data base Controllers
Route::post('/register', [RegisterController::class, 'register']);
Route::get('/data', [RegisterController::class, 'data']);
Route::get('/roledata', [RegisterController::class, 'roledata']);
Route::post('/rolestore', [RegisterController::class, 'rolestore'])->name('rolestore');
//Route::put('/roleedit', [RegisterController::class, 'roleedit'])->name('roleedit');
Route::get('/show', [RegisterController::class, 'index']);
Route::get('/show/{id}', [RegisterController::class, 'show']);
// Route::inertia('/register', 'Register');
Route::post('/login', [AuthAuthController::class, 'authentication']);
Route::get('/logout', [AuthAuthController::class, 'logout'])->name('logout');
Route::post('/delete', [AuthAuthController::class, 'delete']);
Route::put('/update/{id}', [AuthAuthController::class, 'update']);



Route::middleware('auth')->group(function () {
    Route::post('role/{roleid}/permissions', [UpdatePermissions::class, 'getPermissions']);
    Route::post('role/permissions', [UpdatePermissions::class, 'getAllPermissions']);
    Route::get('role/profile', [UpdatePermissions::class, 'profile'])->name('profile');
    Route::put('role/updateprofile', [UpdatePermissions::class, 'profileupdate'])->name('updateprofile');
});




//FORGET PASSWORD
Route::get('password/reset', [ForgetPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('password/email', [ForgetPasswordController::class, 'sendResetLink'])->name('password.email');
Route::get('password/reset/{token}', [PasswordResetController::class, 'resetForm'])->name('password.reset');
Route::post('password/reset', [PasswordResetController::class, 'reset'])->name('password.update');

// resource Route
Route::middleware(['auth', 'role:Admin|Manager|User Admin'])->group(function () {
    Route::get('/group', [PermissionGroupController::class, 'index'])->name('group');
    Route::post('/store', [PermissionGroupController::class, 'store'])->name('store');
    Route::put('roles/{roleId}', [UpdatePermissions::class, 'updateRole'])->name('roles.updateRole');
    Route::put('users/{userId}', [UpdatePermissions::class, 'updateUser'])->name('users.updateUser');
    Route::resource('/admin', AdminController::class);
    Route::resource('/roles', RoleController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/permissions', PermissionController::class);
    Route::get('/list', [LayoutController::class, 'rolepermissionlist'])->name('list');
});
Route::get('/yourrole', [LayoutController::class, 'roledashboar'])->name('yourrole');
Route::get('/yourrole/data', [LayoutController::class, 'chartData']);

// resource Route
Route::middleware(['auth', 'permission:Create Role|Create Permissions|Permission Group|Create Users|User List|Role List|Permissions List|RPList'])->group(function () {
    Route::put('roles/{roleId}', [UpdatePermissions::class, 'updateRole'])->name('roles.updateRole');
    Route::put('users/{userId}', [UpdatePermissions::class, 'updateUser'])->name('users.updateUser');
    // Route::resource('/admin', AdminController::class);
    Route::resource('/roles', RoleController::class);
    Route::resource('/users', UserController::class);
    Route::resource('/permissions', PermissionController::class);
    Route::get('/list', [LayoutController::class, 'rolepermissionlist'])->name('list');
});


// component controller

Route::middleware(['auth'])->group(function () {
    Route::get('abouts', [ComponentsController::class, 'aboutIndex'])->name('about.aboutIndex');
    Route::get('contacts', [ComponentsController::class, 'contactIndex'])->name('contacts.aboutIndex');
    Route::get('products', [ComponentsController::class, 'productsIndex'])->name('products.productsIndex');
});