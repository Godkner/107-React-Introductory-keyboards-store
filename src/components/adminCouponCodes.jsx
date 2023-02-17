import './adminCouponCodes.css'
import { useState } from 'react';

function AdminCouponCodes(){

    const [coupon,setCoupon]=useState({});
    const [allCoupons, setAllCoupons]=useState([]);

    function textChanged(e){
        let text= e.target.value;
        let attr= e.target.name;

        // create a copy,modidy the copy, set the copy back
        let copy= {...coupon};
        copy[attr]= text;
        setCoupon(copy);

    }

    function saveProduct(){
        console.log(coupon);
        // to do: fix the price,should be a number
        // let copy=[...allCoupons];
        // copy.push(coupon);
        // setAllCoupons(copy);
    }

    return(
        <div className="adminCoupon">
            <h3>Coupons</h3>
            <div class="mb-3">
                 <input name='coupon' onChange={textChanged} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the coupon code"></input>
            </div>
            <div class="input-group">
                <input name='discount' onChange={textChanged} type="number" class="form-control" placeholder='Enter the discount' ></input>
                    <span class="input-group-text">%</span>
            </div>
            <button onClick={saveProduct} className="btn btn-dark">Save Product</button>

        </div>
    );

}
export default AdminCouponCodes;