import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import {ReactComponent as ShopLogo} from "../../assets/logo.svg"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.style.scss"



const Navigation = () => {
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <ShopLogo className='logo' />
                    
                </Link>
                <div className='nav-links-container'>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;