import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss";
import Button from "../../components/button/button.component";

const Checkout = () => {
    const { cartItems, cartTotal, cartCount } = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToShop = () => {
        navigate("/");
    }

    return (
        <div className='checkout-container'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            

            {!cartCount && (
                <div className="no-item">
                    <div className="no-item-message">OOPS! THERE IS NO ITEM IN YOUR CART 😅 
                    ADD SOME</div>
                    <Button buttonType="inverted" onClick={navigateToShop}>GO TO SHOP</Button>
                </div>
            )}
            
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    );
}

export default Checkout;