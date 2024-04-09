import "./Product.css"
import { ShopContext } from "../Contexts/ShopContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

function Product({ product }) {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmout = cartItems[product.id];

    return (
        <div className="product">
            <img src={product.productImg} alt={product.productImg} />
            <div className="product-info">
                <Link to={`/DevMugsShop/product/${product.id}`}><h2>{product.productName}</h2></Link>
                <h3>US $ {product.price}</h3>
                <button onClick={() => addToCart(product.id)}>Add To Cart { cartItemAmout > 0 && `(${cartItemAmout})`}</button>
            </div>
        </div>
    )
}

export default Product