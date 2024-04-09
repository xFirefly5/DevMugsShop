import { useEffect, useState } from "react";
import { createContext } from "react"
import { PRODUCST } from "../products/PRODUCTS";

export const ShopContext = createContext();

function ShopContextProvider(props) {

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < PRODUCST.length + 1; i++) {
            cart[i] = 0;
        };
        return cart;
    };

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("shopping")) || getDefaultCart);
    const [products, setProducts] = useState(PRODUCST);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };



    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCST.find(product => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            };
        };
        return totalAmount;
    };

    useEffect(() => {
        localStorage.setItem("shopping", JSON.stringify(cartItems));
    }, [cartItems]);

    const contextValues = { products, cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };

    return (
        <ShopContext.Provider value={contextValues}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider