import React from 'react'
import '../src/styles/style.css'
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/ShoppingCart';

function App() {
  let dataArray = [];

  const [productsData, setProductsData] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([])

  const [cartCount, setCartCount] = React.useState(0)

  const [shopCart, setShopCart] = React.useState([])
    // React.useEffect(() => {
        
    // }, [])

        
    function addToCart(item) {
        setCartItems(prevCartItems => [...prevCartItems, {
            id: item.id,
            image: item.image,
            title: item.title,
            price: item.price,
            count: cartCount
        }])
        setCartCount(cartCount+1)
        setShopCart(cartItems);
    }   
  
  console.log(cartItems)
  
  async function fetchProducts() {
    let dataObj = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    dataArray = await dataObj.json();
    setProductsData(dataArray);
  }

  React.useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div>
      <Navbar 
          cartCount={cartCount}
      />
      <Product 
          details={productsData}
          handleClick={() => addToCart()}
      />
    </div>
  );
}

export default App;
