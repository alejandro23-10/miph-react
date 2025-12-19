import type { Product } from "../../types/Product";
import "./ProductCard.css";

export default function ProductCard ({ product } : { product: Product }){
    return(
        <div className="product-card">
            <p>Название: {product.name}</p>
            <p>Описание: {product.description}</p>
            <p>Цена: {product.price}</p>
        </div>
    )
}