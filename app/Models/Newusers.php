<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newusers extends Model
{
    protected $table = 'users';
	public $timestamps = true;
    protected $fillable = [
        'firstName', 'lastName', 'address', 'email', 'password', 'phone', 'birthDate'
       ]; 
}
