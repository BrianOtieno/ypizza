<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
         
    }

   
    //Get all orders
    public function getAllOrders(){
        return response()->json(Order::all());
    }

    //Get one order
    public function getOneOrder($id){
        return response()->json(Order::find($id));
    }

    //Add New Order
    public function newOrder(Request $request){
        //Validate user input
        $this->validate($request, [
            'client_name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'quantity' => 'required|max:1000|min:8'
        ]);
        
        //insert into db and send response
        return response()->json(Order::create($request), 201);
    }
}
