<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Users;
use App\Models\Student;
use Illuminate\Http\Request;
//use DB;

class UsersController extends Controller
{

    public function store(Request $request)
    {
        try {


            //  $userData = new Users();
           // $userData->firstName = $request->input('firstName');
           // $userData->email = $request->input('email');
           // $userData->password = $request->input('password');

           // $userData->save();

            $userData = new Student();
            $userData->firstName = $request->input('firstName');
            $userData->save();

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
                'data' => 'Success'
            ]); 
    
    
           
        } catch (Throwable $e) {
    
            return response()->json([
                'status'=> 200,
                'message' => 'Register Falied added',
                'Error' => $e
            ]); 
        }
    
    }




    
    public function index(Request $request)
    {
    try {
      
     
        $fisrtName = $request->input('firstName');
        $lastName = $request->input('lastName');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $password = $request->input('password');
        $birthDate = $request->input('birthDate');
        $address = $request->input('address');


       
    } catch (Throwable $e) {

        return response()->json([
            'status'=> 200,
            'message' => 'Register Failed',
            'Error' => $e
        ]); 
    }

}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\users  $users
     * @return \Illuminate\Http\Response
     */
    public function show(users $users)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\users  $users
     * @return \Illuminate\Http\Response
     */
    public function edit(users $users)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\users  $users
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, users $users)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\users  $users
     * @return \Illuminate\Http\Response
     */
    public function destroy(users $users)
    {
        //
    }
}
