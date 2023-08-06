import { useContext } from "react"
import Home from "./pages/Home"
import { TextContext } from "./context/TextContext"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Basket from "./pages/Basket"


function App() {


  return (
    <>
    <Header/>
    <Routes>
<Route path="/" element={  <Home/>}/>
<Route path="/basket" element={  <Basket/>}/>
  
    </Routes>
   

    </>
  )
}

export default App
