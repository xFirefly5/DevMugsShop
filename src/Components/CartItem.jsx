import { ShopContext } from "../Contexts/ShopContext"
import { useContext } from "react"
import "./CartItem.css"


function CartItem({ product }) {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="CartItem">
            <img src={product.productImg} alt={product.productName} />
            <div className='description'>
                <p className="name"><b>{product.productName}</b></p>
                <p className="price"><b>$ {product.price}</b></p>
                <div className="count-handler">
                    <button className="minus" onClick={()=>removeFromCart(product.id)}>-</button>
                    <input
                        className="input"
                        type="number"
                        value={cartItems[product.id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                    />
                    <button className="plus" onClick={()=>addToCart(product.id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem