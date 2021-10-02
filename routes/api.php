<?php

/*use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController; */

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsersController;
//use App\Http\Controllers\Api\NewusersController;
use App\Http\Controllers\Api\AuthenticationController;




/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 


//Route::get('students', [StudentController::class, 'index']);
Route::post('/store', [UsersController::class, 'store']);
Route::post('/register', [AuthenticationController::class, 'register']);
Route::post('/login', [AuthenticationController::class, 'login']); */


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/store', [UsersController::class, 'store']);
    Route::post('/register', [AuthenticationController::class, 'register']);
    Route::post('/login', [AuthenticationController::class, 'login']);
  //  Route::get('/user-profile', [AuthenticationController::class, 'userProfile']);
    Route::get('/user-profile', [AuthenticationController::class, 'userProfile']); 
    Route::post('/search-profile', [AuthenticationController::class, 'SearchUser']);    
});
