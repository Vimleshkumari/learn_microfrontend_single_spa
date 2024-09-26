// src/context/FoodProvider.js
import React, { useState } from 'react';
import FoodContext from './FoodContext';
import foodItemsList from "../utils/items.json"

const FoodProvider = ({ children }) => {
    // State for managing food items and cart
    const [foodItems, setFoodItems] = useState(foodItemsList);

    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        // console.log("item---", item);
        setCart((prevCart) => [...prevCart, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item, ind) => {
            console.log("cart----", cart);
            if (item.id === itemId) {
                console.log("else  l", cart.length);
                return cart.splice(ind, 1)
            } else { 
                return cart.length
            }
        }))
    }


    return (
        <FoodContext.Provider
            value={{
                foodItems,
                cart,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;



