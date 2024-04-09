import { ShopContext } from "../Contexts/ShopContext"
import { useContext } from "react"
import "./ProductPage.css"
import { useParams, Link } from "react-router-dom"

function ProductPage() {
    const { products, addToCart, cartItems } = useContext(ShopContext);

    const { id } = useParams();
    const item = products.find((product) => (product.id).toString() === id);

    const cartItemAmout = cartItems[item.id];

    return (
        <div className="ProductPage">
            <img src={item.productImg} alt={item.productName} />
            <div className="info">
                <h2>{item.productName}</h2>
                <p className="desc">{item.description}</p>
                <p className="price">US $ {item.price}</p>
                <div className="theBtns">
                    <button onClick={() => addToCart(item.id)}>Add To Cart{ cartItemAmout > 0 && `(${cartItemAmout})`}</button>
                    <Link to="/DevMugsShop"><button>Shop More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPage

