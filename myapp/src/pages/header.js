// import cart from "../../public/images/cart.jpg"
import cart1 from "../Assets/cart1.png"
export default function Header(params) {
    let count = 0
    return (
        <>
            <div className={"Header-main"}>
                <div>Home Food</div>
                <div >
                    <a onClick={() => { }} href="#" className="cart-main" style={{ textDecoration: "none" }}><img src={cart1} className="cart-image" />Cart {count}</a></div>
            </div>

        </>
    )

}