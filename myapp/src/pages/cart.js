// src/components/Cart.js
import React, { useContext, useEffect } from 'react';
import FoodContext from '../context/FoodContext';
import { Box, Flex, Image, Text, Button, Center } from '@chakra-ui/react';


export default function Cart(params) {
    const { cart = [], removeFromCart } = useContext(FoodContext);
    let sum = 0;
    console.log("cart", cart);

    const total = () => {
        cart?.forEach(item => {
            sum = sum + item.cost
        })
        return sum

    }



    return (
        <>
            <h2 >Your Cart</h2>
            <Box display={"flex"} justifyContent={"center"}>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : <Box>
                    {cart.map((item) => (
                        <Box key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }} width={400} m={8}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.cost}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                        </Box>
                    ))
                    }
                    <Box>
                        <Box >
                            <h3>Total</h3>
                            <p>Total: {total()}</p>
                        </Box>

                    </Box>
                </Box>
                }
            </Box>
        </>
    );
};

;
