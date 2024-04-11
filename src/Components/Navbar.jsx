import "./Navbar.css"
import { Link } from "react-router-dom"
import { ShopContext } from "../Contexts/ShopContext"
import { useContext } from "react"

function Navbar() {
    const { cartItems } = useContext(ShopContext);
    const totalCartItems = cartItems[1] + cartItems[2] + cartItems[3] + cartItems[4] + cartItems[5] + cartItems[6] + cartItems[7] + cartItems[8];

    return (
        <nav className="Navbar">
            <h1><i className="em em-shopping_bags" aria-label=""></i> <Link to="/DevMugsShop">DevMugsShop</Link></h1>
            <h2>Make the perfect gift to the perfect <b style={{color: "pink"}}>Developer</b></h2>
            <div className="cart-div">
                <Link to="/DevMugsShop/cart" id="cart">
                    Cart
                </Link>
                <Link to="/DevMugsShop/cart">
                    <i className="em em-shopping_trolley" aria-label="SHOPPING TROLLEY"></i><span>{totalCartItems}</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar