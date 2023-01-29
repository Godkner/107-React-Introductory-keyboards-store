import "./quantityPicker.css"
import {useState} from 'react';

function QuantityPicker(){
    let [quantity,setQuantity]= useState(1);

    function decrease(){
        console.log("button clicked");
        if(quantity===1) return;
        let val=quantity-1;
        setQuantity(val);
    }
    function increase(){
        console.log("increase clicked");
        let val= quantity +1;
        setQuantity(val);
    }

   return(
    <div className="qt-picker">
        <button className="btn btn-sm btn-outline-dark" disabled={quantity===1} onClick={decrease}>-</button>
        <label> {quantity} </label>
        <button className="btn btn-sm btn-outline-dark"  onClick={increase}>+</button>
    </div>


   ); 
}

export default QuantityPicker;
