import './product.css';
import QuantityPicker from './quantityPicker';

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/200/180" alt="" />
            <h5>Keycaps</h5>
            <div className="prices"><label>Total</label>
            <label >Price</label></div>
            
            <QuantityPicker>
            </QuantityPicker>
            <button className="btn btn-sm btn-outline-dark">Add to car</button>
        </div>
    )
}
    export default Product;