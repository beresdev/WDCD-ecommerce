import { useState, useEffect } from 'react'
import './App.css'
import { HeaderNav } from './components/componentName/header-nav/HeaderNav';

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
    {/* <h1>¡Hola mundo!</h1> */}
    <HeaderNav/>
    </>
  )

}

export default App
