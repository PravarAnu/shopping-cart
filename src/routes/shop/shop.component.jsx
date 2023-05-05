import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../context/products.context";

import "./shop.style.scss"

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className='products-container'>
            <div className="shop-name">REACT SHOP</div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}


export default Shop;