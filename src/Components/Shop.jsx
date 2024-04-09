import { PRODUCST } from "../products/PRODUCTS"
import "./Shop.css"
import Product from "./Product"

function Shop() {

    return (
        <div className="Shop">
            {PRODUCST.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop