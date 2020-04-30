<?php

namespace App;

use Illuminate\Database\Eloquent\Model; 

class Order extends Model
{
   
    protected $fillable = [
        'order_id', 'client_name', 'phone_number', 
        'address', 'quantity','created_at' 
    ];
     
}

 