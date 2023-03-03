import './adminCouponCodes.css'
import { useState } from 'react';

function AdminCouponCodes(){

    const [coupon,setCoupon]=useState({});
    const [allCoupons, setAllCoupons]=useState([]);

    function textChanged(e){
        let input= e.target.value;
        let attr= e.target.name;

        // create a copy,modidy the copy, set the copy back
        let copy= {...coupon};
        copy[attr]= input;
        setCoupon(copy);

    }

    function saveProduct(){
        console.log(coupon);
        // to do: fix the price,should be a number
        let copy=[...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return(
        <div className="adminCoupon">
            <h3>Coupon codes</h3>
            <div class="mb-3">
                 <input name='coupon' onChange={textChanged} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the coupon code"></input>
            </div>
            <div class="input-group">
                <input name='discount' onChange={textChanged} type="number" class="form-control" placeholder='Enter the discount' ></input>
                    <span class="input-group-text">%</span>
            </div>
            <button onClick={saveProduct} className="btn btn-light button ">Save Product</button>

            <ul className="list-group list-group-numbered">
            {allCoupons.map(prod => <li className="list-group-item" key={prod.coupon}>{prod.coupon} - {prod.discount}%</li>)}
            </ul>

        </div>
        

    );

}
export default AdminCouponCodes;