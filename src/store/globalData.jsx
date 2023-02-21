import DataContext from "./dataContext";
import { useState } from 'react';

function GlobalData(props){

    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({name: "Kevin"});

    // functions
    function addProductsToCart(){

        console.log("Global is called");
    }

    function removeProductsFromCart(){

    }

    return(
        <div>
            <DataContext.Provider value = {{
                cart: cart,
                user: fakeUser,
                addProductsToCart: addProductsToCart,
                removeProductsFromCart: removeProductsFromCart
            }}

            >

                {props.children}
            </DataContext.Provider>
        </div>
    );
}

export default GlobalData;