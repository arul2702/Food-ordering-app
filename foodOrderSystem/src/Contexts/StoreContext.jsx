import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    // console.log(token);
    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeFromCart = (itemId) =>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                    let foodInfo = food_list.find((products)=>products._id===item);
                    totalAmount += foodInfo.price * cartItems[item];
                }
        }
        return totalAmount;        
    };

    useEffect(()=>{
        if(localStorage.getItem("token"))
        setToken(localStorage.getItem("token"));
    },[])

    const contextValue = {
        /* an object */
        food_list,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
        getTotalAmount,
        url,
        setToken,token
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}
export default StoreContextProvider;
