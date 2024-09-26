// src/context/FoodProvider.js
import React, { useState } from 'react';
import FoodContext from './FoodContext';
import foodItemsList from "../utils/items.json";
import { useToast } from "@chakra-ui/react";

const FoodProvider = ({ children }) => {
    // State for managing food items and cart
    const [foodItems, setFoodItems] = useState(foodItemsList);

    const [cart, setCart] = useState([]);
    const [isCartClicked, setCartClicked] = useState([]);

    
    const toast = useToast();


      const cartClicked =()=>{
        setCartClicked(!isCartClicked)
      }

    // Function to add an item to the cart
    const addToCart = (item) => {
        // console.log("item---", item);
        setCart((prevCart) => [...prevCart, item]);
        toast({
            position: "top-right",
            title: "Item added.",
            description: "We've created your account for you.",
            status: "success",
            // duration: 9000,
            isClosable: false,
            containerStyle: {
                width: "200px", // Custom width
                height: "50px" ,// Custom height
                // backgroundColor:"green",
                color:"green"

            },
        })
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
                cartClicked
            }}
        >
            {children}
        </FoodContext.Provider>
    );
};

export default FoodProvider;



