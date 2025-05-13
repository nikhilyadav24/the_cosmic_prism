import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 100;

    const value = {
        products,currency,delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


//what we have done 
// we have created a context ShopContext
//passed it product data, other data in a fn ShopContextProvider and returned as prop to global level

// Now we can fetch data throughout the project using context api

//use ShopContextProvider tag in main.jsx inside browser router to make it alailable throughout the project

//Notes
// createContext -  is used to create a Context object that allows you to share data across the component tree without having to pass props manually at every level.
// It helps manage state like themes, authentication status, user settings, etc., at a global level.

