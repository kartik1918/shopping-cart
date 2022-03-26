import React from 'react'
import '../styles/style.css'
import Item from './Item'
export default function Product(props) {

    console.log(props)

    const productEle = props.details.map(product => <div key={product.id} className='item-container'>
    <img src={product.image} />
    <h3>{product.title}</h3>
    <p>₹{product.price}</p>
    <button>ADD TO CART</button>
</div>)

    return (
        <div className='products'>
            {productEle}
        </div>
    )
}