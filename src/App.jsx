import Index from "./components/Pages/Index"
import LoginPage from "./components/Pages/LoginPage"
import RegisterPage from "./components/Pages/RegisterPage"
import ProfilePage from "./components/Pages/ProfilePage"
import Nopage from "./components/Pages/Nopage"
import SuccessPage from "./components/Pages/successPage"
import TalkPage from "./components/Pages/TalkPage"
import TalkInvoice from "./components/container/Program/invoice/invoice"
import { ToastContainer, toast } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import 'react-toastify/dist/ReactToastify.css';
import NewsPage from "./components/Pages/NewsPage"
function App() {

  return (
    
    <BrowserRouter>
    <ScrollToTop/>
    <div className="font-Fredoka ">
    <ToastContainer position="top-right" style={{ zIndex: 9999 }}/>
     
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/talks" element={<TalkPage />} /> 
        <Route path="/talks/invoice" element={<TalkInvoice />} /> 
        <Route path="/talks/success-payment" element={<SuccessPage />} /> 
        <Route path="*" element={<Nopage />} /> 
      </Routes>
    </div>
  </BrowserRouter>
      
  )
}

export default App
