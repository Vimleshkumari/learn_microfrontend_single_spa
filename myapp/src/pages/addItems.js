
// import foodItems from "../utils/items.json"
import FoodContext from '../context/FoodContext';
import { useContext } from "react";
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';

export default function AddMenu(params) {
    const { foodItems, removeFromCart, addToCart ,isCartClicked} = useContext(FoodContext);

    // console.log("json", foodItems);

    let items = [{
        id: 1,
        name: "Pizza",
        cost: 100,
        isGood: true
    },
    {
        id: 2,
        name: "Sandwich",
        cost: 60,
        isGood: true
    },
    {
        id: 3,
        name: "Burger",
        cost: 40,
        isGood: true
    },
    {
        id: 4,
        name: "Pulao",
        cost: 80,
        isGood: true
    }]

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
                    return <Box className="menu-card">
                        <Box className="menu-items" key={ind}>
                            <Box width={{sm:"100%",md: 80 }}
                            ><Image src={images[item.url]} width={{sm:"100%",md: 80 }}/></Box>
                            <Box style={{ display: "flex", justifyContent: "center" }}>
                                <Box style={{ width: "150px" }}>{item.name}</Box>
                                <Box style={{ width: "50px" }} >{item.cost}  </Box>
                                <Box style={{ border: "2px solid  green", padding: "1px 8px", marginLeft: "5px" }} onClick={() => addToCart(item)}>+</Box>
                                <Box style={{ border: "2px solid red", padding: "1px 8px", marginLeft: "5px" }} onClick={() => { removeFromCart(item.id) }}>-</Box>
                            </Box>
                        </Box>
                    </Box>
                })}

            </Box>

        </>
    )

}