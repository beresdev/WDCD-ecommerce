import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/componentSearch/Search';

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
    <Search/>
    </>
  )
}

export default App
