<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Auth::routes();

Route::get('/', [PagesController::class, 'index'])->name('index');
Route::get('/about', [PagesController::class, 'about'])->name('about');
Route::get('/contractors', [PagesController::class, 'contractors'])->name('contractors');
Route::get('/become-contractor', [PagesController::class, 'become_contractor'])->name('become.contractor');
Route::get('/faq', [PagesController::class, 'faq'])->name('faq');
Route::get('/contact', [PagesController::class, 'contact'])->name('contact');
Route::get('/material-kit', [PagesController::class, 'material_kit'])->name('material.kit');
//auth pages
Route::get('/login', [PagesController::class, 'login'])->name('login');
Route::get('/register', [PagesController::class, 'register'])->name('register');

Route::get('/dashboard', [PagesController::class, 'dashboard'])->name('dashboard');

