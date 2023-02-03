import "./catalog.css";
import Product from '../components/product';
import { useState } from 'react';
import { useEffect } from 'react';
import DataService from './../services/dataService';

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories]= useState([]);
    const [prodsToDisplay,setProdsToDisplay]= useState([]);



    // when the component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);

    

    function loadCatalog() {
        // get the products from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
        setProdsToDisplay(prods);
        // todo: move this to a service
        let cats=["Keyboard", "Keycaps", "Switches"];
        setCategories(cats);
    }
    
    function filter(category){
        console.log(category);
        let list=[];
        for(let i=0; i<products.length; i++){
            let prod = products[i];
            if(prod.category=== category){
                list.push(prod);
            }
        }
        setProdsToDisplay(list);
        
    }

    function clearFilter(){
        setProdsToDisplay(products);
    }


    return(
        
        <div className="catalog">
           <h1>Check our amazing products</h1>
           <h5>We have {products.length} products ready for you!</h5>
           
           {categories.map(c => <button onClick={()=> filter(c)} className="btn btn-sm btn-light btn-filter">{c}</button> )}
            <button className="btn btn-sm btn-dark btn-filter"onClick={clearFilter}>All</button>
           {prodsToDisplay.map(p => <Product key={p._id} data={p}></Product>)}
            
            
        </div>

    );
}

export default Catalog;

