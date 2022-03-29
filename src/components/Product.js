import React from 'react'
import '../styles/style.css'
import Cart from './Cart'
import Navbar from './Navbar'
import ShoppingCart from './ShoppingCart'

export default function Product(props) {

    console.log(props)

    const productEle = props.details.map(product => <div key={product.id} className='item-container'>
                                                        <img src={product.image} />
                                                        <h3>{product.title}</h3>
                                                        <p>₹{product.price}</p>
                                                        <button onClick={props.handleClick}>ADD TO CART</button>
                                                    </div>
                                                    )

    return (
        <div className='products'>
            {/* <ShoppingCart 
                cartItem={cartItems}
            /> */}
            {productEle}
        </div>
    )
}