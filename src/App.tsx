
import { ReactLenis } from "lenis/react";
import './assets/styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
    </ReactLenis>
   
  )
}

export default App
