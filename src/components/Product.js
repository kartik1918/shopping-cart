import React from 'react'
import '../styles/style.css'
import Cart from './Cart'
import Navbar from './Navbar'

export default function Product(props) {

    const [cartItems, setCartItems] = React.useState([])

    const [cartCount, setCartCount] = React.useState(0)

    // React.useEffect(() => {
        
    // }, [])

        
    function addToCart(item) {
        setCartItems(prevCartItems => [...prevCartItems, {
            id: item.id,
            image: item.image,
            title: item.title,
            price: item.price
        }])
        setCartCount(cartCount+1)
    }   
    

    console.log(cartItems)
    console.log(cartCount)

    const productEle = props.details.map(product => <div key={product.id} className='item-container'>
                                                        <img src={product.image} />
                                                        <h3>{product.title}</h3>
                                                        <p>₹{product.price}</p>
                                                        <button onClick={() => addToCart(product)}>ADD TO CART</button>
                                                    </div>
                                                    )

    return (
        <div className='products'>
            <Navbar 
                cartCount={cartCount}
            />
            {productEle}
        </div>
    )
}