import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RoseImage from './assets/roseImg.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let tagline = "Fresh flowers delivered daily"
  let flower = {
    name:"Rose",
    color:"Red",
    price: 2.5,
    description:"A vibrant red rose , perfect for every occasion"
  }

  return (
    <>
      
      <h1>Wellcome to Transflower Store</h1>
      <hr/>
      <p className="read-the-docs">
        {tagline}
      </p>
      <div>
        <h2>{flower.name}</h2>
        <img src={RoseImage} alt={flower.name} className="flower-image"/>
        <p>Color : {flower.color}</p>
        <p>Price : ${flower.price.toFixed(2)}</p>
        <p>{flower.description}</p>
        <button onClick={()=> setCount(count + 1)}>
          Add to Cart({count})
        </button>
      </div>
      
    </>
  )
}

export default App
