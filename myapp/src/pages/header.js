// import cart from "../../public/images/cart.jpg"
import { useContext } from "react";
import cart1 from "../Assets/cart1.png"
import FoodContext from "../context/FoodContext";
import Cart from "./cart";
import { useDisclosure } from "@chakra-ui/react";
// import {useNavigate} from 'react-dom'

export default function Header(params) {
    const { cart, cartClicked, isCartClicked } = useContext(FoodContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const navigate = useNavigate();

    const callCart = () => {
        cartClicked(!isCartClicked)
        console.log("cart callled");
        // navigate('/cart')
        // return <Cart/>
    }

    let count = 0
    return (
        <>
            {<div className={"Header-main"}>
                <div>Home Food</div>
                <div onClick={onOpen} className="cart-main">
                    <img src={cart1} className="cart-image" width={{ sm: 10, md: 40 }}
                    /><span >Cart {cart.length}</span></div>
            </div>}
            {isOpen ?? <Cart />}


        </>
    )

}