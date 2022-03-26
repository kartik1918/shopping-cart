import React from 'react'
import '../src/styles/style.css'
import Navbar from './components/Navbar';
import Product from './components/Product';

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
    console.log('rendered')
    fetchProducts();
  }, [])

  return (
    <div>
        <Navbar />
        <Product 
          details={productsData}
        />
    </div>
  );
}

export default App;
