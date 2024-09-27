// src/components/Cart.js
import React, { useContext, useEffect } from 'react';
import FoodContext from '../context/FoodContext';
import { Box, Flex, Image, Text, Button, Center, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


export default function Cart(params) {
    const { cart = [], removeFromCart } = useContext(FoodContext);
    let sum = 0;
    const total = () => {
        cart?.forEach(item => {
            sum = sum + item.cost
        })
        return sum

    }
    return function BasicUsage() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
                {isOpen?
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <Lorem count={2} /> */}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>:"no item"}
            </>
        )
    }
    // return (
    //     <>



    //         {
    //         <h2 >Your Cart</h2>
    //         <Box display={"flex"} justifyContent={"center"}>

    //             {cart.length === 0 ? (
    //                 <p>Your cart is empty.</p>
    //             ) : <Box>
    //                 {cart.map((item) => (
    //                     <Box key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }} width={400} m={8}>
    //                         <h3>{item.name}</h3>
    //                         <p>Price: ${item.cost}</p>
    //                         <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    //                     </Box>
    //                 ))
    //                 }
    //                 <Box>
    //                     <Box >
    //                         <h3>Total</h3>
    //                         <p>Total: {total()}</p>
    //                     </Box>

    //                 </Box>
    //             </Box>
    //             }
    //         </Box>}
    //     </>
    // );
};

;
