import { useEffect } from "react";
import './product.css';
import QuantityPicker from './quantityPicker';

function Product(props){

    useEffect(function(){
        // when the component loads
        console.log("Hello, I'm a product");
    },[]);
    return(
        <div className="product">
            <img src="/images/" alt="" />
            <h5>{props.data.title}</h5>
            <div className="prices"><label>Total ${props.data.price.toFixed(2)}</label>
            <label>Price ${props.data.price.toFixed(2)}</label></div>
            
            <QuantityPicker>
            </QuantityPicker>
            <button className="btn btn-sm btn-outline-dark">Add to car</button>
        </div>
    )
}
    export default Product;