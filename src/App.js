import React from 'react'
import '../src/styles/style.css'
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/ShoppingCart';

function App() {
  let dataArray = [];

  const [productsData, setProductsData] = React.useState([]);
  
  console.log(productsData)
  
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
        <Product 
          details={productsData}
        />
        <Cart />
    </div>
  );
}

export default App;
