import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1d1d1b]">
      {/* Boutique Navigation */}
      <Navbar />

      {/* Search Bar Drawer */}
      <SearchBar />

      {/* Main Content Area */}
      <main className="flex-grow mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/place-order' element={<PlaceOrder />} />
        </Routes>
      </main>

      {/* Boutique Footer */}
      <Footer />
    </div>
  )
}

export default App

