import { useEffect } from "react";
import { useState, useContext } from "react";
import './product.css';
import QuantityPicker from './quantityPicker';
import DataContext from "../store/dataContext";
import AdminProducts from './adminProducts';

function Product(props){
    const[quantity,setQuantity]= useState(1);

    useEffect(function(){
        // when the component loads
        console.log("Hello, I'm a product");
    },[]);

   let addProductToCart = useContext(DataContext).addProductsToCart;

    function onQuantityChange(qty){
        console.log("new value:" +qty)
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price*quantity;
        return total.toFixed(2);
    }

    function addProduct(){
        console.log(`Adding ${quantity} ${props.data.title}`);
        
    }

    function handleAdd(){
        console.log("Button clicked",props.data);
        addProductToCart();
    }
    
    return(
        <div className="product">
            <img src={"/images/" + props.data.image } alt="" />
            <h5>{props.data.title}</h5>
            <div className="prices">
            <label>Total ${getTotal()}</label>
            <label>Price ${props.data.price.toFixed(2)}</label>
            </div>
            
            <QuantityPicker onChange={onQuantityChange}>
            </QuantityPicker>
            <button onClick={handleAdd} className="add btn btn-sm btn-outline-dark">Add to car</button>
        </div>
    )
}
    export default Product;

    