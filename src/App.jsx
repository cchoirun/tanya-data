import Index from "./components/Pages/Index"
import LoginPage from "./components/Pages/LoginPage"
import RegisterPage from "./components/Pages/RegisterPage"
import Nopage from "./components/Pages/Nopage"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/container/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    
    <BrowserRouter>
    <div className="font-Fredoka ">
     
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="*" element={<Nopage />} /> 
      </Routes>
     
    </div>
  </BrowserRouter>
      
  )
}

export default App
