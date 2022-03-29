import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'

export default function Navbar(props) {

    function testConsole() {
        console.log('Testing')
    }
    

    return (
        <div>
            <nav>
                <h1>Clothing Store</h1>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <Cart 
                        
                    />
                </ul>
            </nav>
        </div>
    )
}