import './cart.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../store/dataContext';


function Cart(){

    const cart = useContext(DataContext).cart;
    return(
        <div className="home">
            <h1>Welcome to Mechanical Keyboards</h1>
            <h4>You have {cart.length} products in the cart</h4>
            {/* {cart.map((prod)=>(
                <img></img>
            ))} */}
            {cart.map((prod)  =>(
                <div className="align-items-center card">
                    <div className="information">
                        <h6>{prod.title}</h6>
                        <label className='l' htmlFor="">Qty: {prod.quantity}</label>
                        <label className='l' htmlFor="">Subtotal: ${prod.price * prod.quantity}</label>
                        <button className='btn btn-sm btn-danger'>delete</button>

                    </div>
                    <div  className="image">
                        <img src={'/images/' + prod.image}></img>

                    </div>
                
                </div>
                ))}
                
           
            
            <Link className='btn btn-primary' to="/catalog">Check our amazing catalog</Link>
        </div>
    );
}

export default Cart;