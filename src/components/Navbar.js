import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'

export default function Navbar(props) {

    console.log(props)

    return (
        <div>
            <nav>
                <h1>Clothing Store</h1>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <Cart 
                        cartCount={props.cartCount}
                    />
                </ul>
            </nav>
        </div>
    )
}