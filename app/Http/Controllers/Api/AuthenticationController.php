<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use DB;

class AuthenticationController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }


    public function login(Request $request){

    	$validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }  

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized xyz'], 401);
        } 


  

       return $this->createNewToken($token);

      
    }




    public function register(Request $request)
    {
        try {

        
            $validator = Validator::make($request->all(), [
                'firstName' => 'required|string',
                'lastName' => 'required|string',
                'email' => 'required|string|email|max:100|unique:users',
                'address' => 'required|string',
                'phone' => 'required|string',
                'birthDate' => 'required|string',
            ]);
    
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
    
            $user = User::create(array_merge(
                        $validator->validated(),
                        ['password' => bcrypt($request->input('password'))],
                       // ['role' => 'Admin']
                    ));
    
            return response()->json([
                'message' => 'User successfully registered',
                'user' => $user
            ], 201);
    
    
           
        } catch (Throwable $e) {
    
            return response()->json([
                'status'=> 200,
                'message' => 'Register Falied added',
                'Error' => $e
            ]); 
        }
    
    }


    public function logout() {
        auth()->logout();

        return response()->json(['message' => 'User successfully signed out']);
    }

    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    public function userProfile() {
        $id = auth()->user()->id;
       // return response()->json(auth()->user());
        return response()->json([
            'status'=> 200,
            'message' => 'Register Profile',
            'user' => auth()->user(),
            'Id' => $id
        ]); 
    }



    public function SearchUser(Request $request) {
       

        //$seacrh = $request->input('search');
        if(!auth()->user()->role == 'Admin')
        {
            return response()->json([
                'status'=> 200,
                'message' => 'You are not an admin role',
                
            ]); 
        }

        $search = $request->input('search');

     
        $data = User::query()
                    ->orWhere('email', 'LIKE', "%{$search}%") 
                    ->orWhere('phone', 'LIKE', "%{$search}%") 
                    ->orWhere('firstName', 'LIKE', "%{$search}%") 
                    ->orWhere('lastName', 'LIKE', "%{$search}%") 
                    ->get();

        return response()->json([
            'status'=> 200,
            'message' => 'Seacrh Query',
            'Data' => $data
        ]); 
    }


    protected function createNewToken($token){

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
           // 'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }


}






/*
            $user = new User();
            $user->firstName = $request->input('firstName');
            $user->lastName = $request->input('lastName');
            $user->email = $request->input('email');
            $user->phone = $request->input('phone');
            //$bcr_password = $request->input('password');
            $user->password = bcrypt($request->input('password'));
            $user->birthDate = $request->input('birthDate');
            $user->address = $request->input('address');
            $user->save();

            return response()->json([
                'status'=> 200,
                'message' => 'Register Successfully  added',
                'data' => $user
            ]); 

        
*/