import { useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-[300px] text-2xl">
      <Header></Header>
      this is home
      {/* <Outlet></Outlet> */}
    </div>
  )
}

export default App
