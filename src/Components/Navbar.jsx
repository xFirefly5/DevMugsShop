import "./Navbar.css"
import { Link } from "react-router-dom"
import { ShopContext } from "../Contexts/ShopContext"
import { useContext } from "react"

function Navbar() {
    const { cartItems } = useContext(ShopContext);
    const totalCartItems = cartItems[1] + cartItems[2] + cartItems[3] + cartItems[4] + cartItems[5] + cartItems[6] + cartItems[7] + cartItems[8];

    return (
        <nav className="Navbar">
            <h1><i className="em em-shopping_bags" aria-label=""></i> <Link to="https://xfirefly5.github.io/DevMugsShop">DevMugsShop</Link></h1>
            <h2>
                <i className="em em-gift" aria-label="WRAPPED PRESENT"></i>
                Make the perfect gift to the perfect <span>Developer</span>
                <i className="em em-gift" aria-label="WRAPPED PRESENT"></i>
            </h2>
            
            <div className="cart-div">
                <Link to="https://xfirefly5.github.io/DevMugsShop/cart" id="cart">Cart</Link>
                <i className="em em-shopping_trolley" aria-label="SHOPPING TROLLEY"></i><span>{totalCartItems}</span>
            </div>
        </nav>
    )
}

export default Navbar