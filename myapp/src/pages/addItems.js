
// import foodItems from "../utils/items.json"
import FoodContext from '../context/FoodContext';
import { useContext, useState } from "react";
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddMenu({ totalStars = 5 }) {
    const { foodItems, removeFromCart, addToCart, isCartClicked } = useContext(FoodContext);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const notify = () => toast("Item added!", {
        autoClose: false, // Don't auto-close
        closeOnClick: true, // Enable click to close
        closeButton: true // Show close button (the cross icon)
    });


    const importAllImages = (context) => {
        let images = {};
        context.keys().forEach((item) => {
            images[item.replace('./', '')] = context(item); // Store image paths in the 'images' object
        });
        return images;
    };

    // Import all images from the 'assets' folder inside 'src'
    const images = importAllImages(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));


    return (

        <>
            <Box className="main-menu-header">
                <Box >Heyy your cart is hungary...</Box>

                {foodItems?.map((item, ind) => {
                    return <Box className="menu-card" key={ind}>
                        <Box className="menu-items" display={"flex"} flexDirection={{ sm: "column", md: "row" }}>
                            <Box width={{ sm: "100%", md: 80 }}>
                                <Image src={images[item.url]} width={{ sm: "100%", md: 80 }} />
                            </Box>
                            <Box style={{ display: "flex", justifyContent: "center" }} alignItems={"center"}>
                                {[...Array(totalStars)].map((_, index) => {
                                    const ratingValue = ind + 1;
                                    return <FaStar
                                        key={index}
                                        size={6}
                                        color={ratingValue <= (rating) ? "#ffc107" : "#e4e5e9"}
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                })}

                                <Box style={{ width: "150px" }}>{item.name}</Box>
                                <Box style={{ width: "50px" }} ><span>&#8377;</span>{`${item.cost}`}  </Box>
                                <Box style={{ border: "2px solid  green", borderRadius: "30%", padding: "1px 8px", marginLeft: "5px" }} onClick={() => {
                                    notify();
                                    addToCart(item)
                                }}>+</Box>
                                {/* <button onClick={notify}>Notify!</button> */}
                                <ToastContainer
                                    success
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick={false}
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored"
                                    transition="Bounce"
                                />
                                {/* Same as */}
                                <ToastContainer />
                                <Box style={{ border: "2px solid red", borderRadius: "30%", padding: "1px 8px", marginLeft: "5px" }} onClick={() => { removeFromCart(item.id) }}>-</Box>
                            </Box>
                        </Box>
                    </Box>
                })}

            </Box>

        </>
    )

}