import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Cart(props) {
    return (
        <div>
            <li><FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/></li>
            {props.cartCount > 0 && <li className='item-count'>{props.cartCount}</li>}
        </div>
    )
}