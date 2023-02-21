// interfaces

import { createContext } from "react";

// interface promise, blueprints
// should not have anie values or implmentations
// just describe the structure of the data 

const DataContext = createContext({
    cart:[],
    user:{},
    // functions
    addProductsToCart:() => {},
    removeProductsFromCart:() => {}
}) 

export default DataContext;