import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return (
        <div className="newElement">
            <h1> Yummi Pizza Delivery</h1>
            <div></div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));