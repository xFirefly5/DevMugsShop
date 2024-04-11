import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import Navbar from "./Components/Navbar"
import Cart from './Components/Cart'
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import ShopContextProvider from './Contexts/ShopContext'
import ProductPage from './Components/ProductPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <ShopContextProvider>
          <Navbar/>
          <Routes>
            <Route exact path="/DevMugsShop" element={<Shop />} />
            <Route exact path="/DevMugsShop/cart" element={<Cart />} />
            <Route exact path="/DevMugsShop/product/:id" element={<ProductPage />} />
          </Routes>
        </ShopContextProvider>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
