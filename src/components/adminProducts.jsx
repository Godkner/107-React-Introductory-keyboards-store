import "./adminProducts.css"
import { useState, useEffect } from 'react';
import DataService from "../services/dataService";

function AdminProducts(){
    const [product,setProduct]=useState({});
    const [allProducts, setAllProducts]=useState([]);

    useEffect(function(){
        loadCatalog();
    },[]);

    function textChanged(e){
        let text= e.target.value;
        let attr= e.target.name;

        // create a copy,modidy the copy, set the copy back
        let copy= {...product};
        copy[attr]= text;
        setProduct(copy);

    }

    async function saveProduct(){
        console.log(product);
        // to do: fix the price,should be a number
        let savedProd= {...product};
        savedProd.price=parseFloat(savedProd.price);
        let service = new DataService();
        service.saveProduct(savedProd);
       

        let copy=[...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }
    async function loadCatalog(){
        let service = new DataService();
        let prod = await service.getProducts();
        setAllProducts(prod);
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
                <button onClick={saveProduct} className="btn btn-light">Save Product</button>
            </div>
            
            <ul className="list-group list-group-numbered">
            {allProducts.map(prod => <li className="list-group-item" key={prod.title}>{prod.title} - ${prod.price}</li>)}
            </ul>
        </div>
    )
}

export default AdminProducts;