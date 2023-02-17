import "./adminProducts.css"
import { useState } from 'react';

function AdminProducts(){
    const [product,setProduct]=useState({});
    const [allProducts, setAllProducts]=useState([]);

    function textChanged(e){
        let text= e.target.value;
        let attr= e.target.name;

        // create a copy,modidy the copy, set the copy back
        let copy= {...product};
        copy[attr]= text;
        setProduct(copy);

    }

    function saveProduct(){
        console.log(product);
        // to do: fix the price,should be a number
        let copy=[...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className="ad-products">
            <h3>Admin products</h3>
            <div className="form">
                <div class="mb-3">
                    <input name="title" onChange={textChanged} type="text" class="form-control" id="" placeholder="Enter the title"></input>
                 </div>
                 <select name="category" onChange={textChanged} class="form-select" aria-label="Default select example">
                    <option disabled selected>--Select the category--</option>
                    <option value="Keyboards">Keyboards</option>
                    <option value="keycaps">Keycaps</option>
                    <option value="switches">Switches</option>
                </select>
                 <div class="mb-3">
                    <label for="formFile" class="form-label"></label>
                    <input name="image" onChange={textChanged} class="form-control" type="file" id="formFile" ></input>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                        <input name="price" onChange={textChanged} type="text" class="form-control" placeholder="Enter the price"></input>
                    <span class="input-group-text">.00</span>
                    
                </div>
                <button onClick={saveProduct} className="btn btn-dark">Save Product</button>
            </div>
            <ul>
            {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
            </ul>
        </div>
    )
}

export default AdminProducts;