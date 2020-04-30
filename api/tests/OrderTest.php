<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class OrderTest extends TestCase
{
    /**
     * 
     *
     * @return void
     */
    

    public function testShouldReturnAllOrders(){

        $this->get("orders", []);
        $this->seeStatusCode(200);
        $this->seeJsonStructure([
            'data' => ['*' =>
                [
                    'order_id',
                    'client_name',
                    'phone_number',
                    'address',
                    'quantity',
                    'created_at',
                    'updated_at',
                    'links'
                ]
            ],
            'meta' => [
                '*' => [
                    'total',
                    'count',
                    'per_page',
                    'current_page',
                    'total_pages',
                    'links',
                ]
            ]
        ]);
        
    }

    

     /**
     * /orders [POST]
     */
    public function testShouldCreateOrder(){

        $parameters = [
            'order_id' => 'SN000A12',
            'client_name' => 'Brian Otieno',
            'phone_number' => '254723328969',
            'address' => '12 Bright Light, Kisumu, KE',
            'quantity' => 8,
        ];

        $this->post("orders", $parameters, []);
        $this->seeStatusCode(200);
        $this->seeJsonStructure(
            ['data' =>
                [
                    'order_id',
                    'client_name',
                    'phone_number',
                    'address',
                    'quantity',
                    'created_at',
                    'updated_at',
                    'links'
                ]
            ]    
        );
        
    }
}
