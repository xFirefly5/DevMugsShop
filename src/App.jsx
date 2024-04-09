import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
          </Routes>

        </ShopContextProvider>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
