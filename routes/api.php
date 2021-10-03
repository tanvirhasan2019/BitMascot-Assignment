<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\AuthenticationController;



Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
   
    Route::post('/register', [AuthenticationController::class, 'register']);
    Route::post('/login', [AuthenticationController::class, 'login']);
    Route::get('/user-profile', [AuthenticationController::class, 'userProfile']); 
    Route::post('/search-profile', [AuthenticationController::class, 'SearchUser']);    
});
