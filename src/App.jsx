import { useState, useEffect } from 'react'
import './App.css'
import { ProductCard } from './components/ProductCard/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }, [])

  console.log(products);

  return (
    <>
    <h1>¡Hola mundo!</h1>
    {
      products.map(product => (
        <ProductCard 
          key={product.id}
          title={product.title}
          img={product.images[0]}
          price={product.price}
        />
      ))
    }
    </>
  )
}

export default App