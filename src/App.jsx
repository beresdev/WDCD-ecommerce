import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/componentSearch/Search';
import { ProductCard } from './components/ProductCard/ProductCard';
import {ConteinerComponent} from './components/componentConteiner/ConteinerComponent'


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }, [])

  return (
    <>
    <Search/>
    <ConteinerComponent>
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
    </ConteinerComponent>

    </>
  )
}

export default App