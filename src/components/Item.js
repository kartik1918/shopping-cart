import React from 'react'
import '../styles/style.css'

export default function Item(props) {

    console.log(props)

    return (
        <div>
            <div key={props.item.details.id} className='item-container'>
                <img src={props.item.details.image} />
                <hr />
                <h3>{props.item.details.title}</h3>
                <p>₹{props.item.details.price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}