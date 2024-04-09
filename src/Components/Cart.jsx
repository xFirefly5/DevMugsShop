import { Link } from "react-router-dom"
import { PRODUCST } from "../products/PRODUCTS"
import { ShopContext } from "../Contexts/ShopContext"
import CartItem from "./CartItem"
import { useContext } from "react"
import "./Cart.css"

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    return (
        <div className="Cart">
            {totalAmount > 0 ? 
                <div className="cart-cart">
                    <h1>Your Cart Items:</h1>
                    <div className="cart-items">
                        {PRODUCST.map(product => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItem key={product.id} product={product} />
                            }
                        })}
                    </div>
                    <div className="checkout">
                        <p>Subtotal: <b>${totalAmount}</b></p>
                        <div className="options">
                            <button>Checkout</button>
                            <Link to="/DevMugsShop"><button className="continueShopp">Continue Shopping</button></Link>
                        </div>
                    </div>
                </div>
                :
                <div className="empty">
                    <h2>Your Cart Is Empty.</h2>
                    <Link to="/"><button>Go Shopping</button></Link>
                </div>
               }
        </div>
    )
}

export default Cart