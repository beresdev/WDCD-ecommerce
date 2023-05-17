import { useState, useEffect } from 'react'
import './App.css'
import {ConteinerComponent} from './components/componentConteiner/ConteinerComponent'

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
    <ConteinerComponent></ConteinerComponent>
    </>
  )
}

export default App
