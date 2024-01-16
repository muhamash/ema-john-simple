import { useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header></Header>
      this is home
    <Shop/>
      {/* <Outlet></Outlet> */}
    </div>
  )
}

export default App
