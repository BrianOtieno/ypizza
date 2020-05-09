import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default class FetchOrders extends React.Component{
    state = {
        retrieving = true,
        order_id = null,
    }

    async componentDidMount(){
        const apiurl = ""; //to add Heroku API URL
        const response = await fetch(apiurl);
        const orderData = await response.json();
    }

    render(){
        return <div>
            {this.state.retrieving? <div> retrieving order data... </div>:
            <div> <ReactBootstrap.Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map(renderOrders)}
            </tbody>
          </ReactBootstrap.Table></div>};

        </div> 
    }
}