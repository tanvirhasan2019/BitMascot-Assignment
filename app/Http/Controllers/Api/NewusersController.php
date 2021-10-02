<?php

namespace App\Http\Controllers\Api;
namespace App\Models;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Models\Newusers;

class NewusersController extends Controller
{
    //
    public function store(Request $request)
    {
        try {


     
            $userData = new Newusers();
            $userData->firstName = $request->input('firstName');
            $userData->email = $request->input('email');
            $userData->password = $request->input('password');

           // $userData->save();

            $fisrtName = $request->input('firstName');
            $lastName = $request->input('lastName');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $password = $request->input('password');
            $birthDate = $request->input('birthDate');
            $address = $request->input('address');


            return response()->json([
                'status'=> 200,
                'message' => 'Register Successfully  added',
                'data' => $userData->firstName
            ]); 
    
    
           
        } catch (Throwable $e) {
    
            return response()->json([
                'status'=> 200,
                'message' => 'Register Falied added',
                'Error' => $e
            ]); 
        }
    
    }

}
