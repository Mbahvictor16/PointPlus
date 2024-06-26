import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import Home from './Components/home/Home'
import Person from './Components/person/Person'
import RecentOrders from './Components/recent-orders/RecentOrders'
import CheckOut from './Components/checkout/CheckOut'
import Sidebar from './Helper/Sidebar'
import Order from './Components/order/Order'
import Riders from './Components/riders/Riders'
import AboutUs from './Components/about-us/AboutUs'
import Restaurants from './Components/home/restuarants/Restaurants'
import Categories from './Components/categories/Categories'
import Splash7 from './Helper/Splash7'
import VerifyPay from './Helper/VerifyPay'
import Footer from './Helper/Footer'
import FavoritesPage from './Components/favorites/FavoritesPage'
import Products from './Components/home/Products'
import Header from './Components/home/Header/Header'
import FAQ from './Components/faq/FAQ'
import ScrollToTop from './Helper/ScrollToTop'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import OrderTracking from './Components/order-tracking/OrderTracking'
import Map from './Components/order-tracking/SubComponents/Map/Map'
import { FavoriteProductsProvider } from './Api/contexts/FavoriteProductsContext'
import ContactUs from './Components/contact-us/ContactUs'

const Layout = () => {
  return (
    <>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [products] = useState(Products)

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Splash7 />
      ) : (
        <FavoriteProductsProvider>
          <div className='app-container'>
            <div className='flex'>
              <Sidebar />
              <div className='Routes overflow-y-scroll ml-0 max-h-[calc(100vh)] w-[100%]'>
                <Routes>
                  <Route path='/' element={<Layout />}>
                    <Route index element={<Header products={products} />} />
                    <Route path='home' element={<Home />} />
                    <Route path='person' element={<Person />} />
                    <Route path='recentOrders' element={<RecentOrders />} />
                    <Route path='checkout' element={<CheckOut />} />
                    <Route path='verify' element={<VerifyPay />} />
                    <Route path='sidebar' element={<Sidebar />} />
                    <Route path='orders' element={<Order />} />
                    <Route path='faq' element={<FAQ />} />
                    <Route path='riders' element={<Riders />} />
                    <Route path='aboutus' element={<AboutUs />} />
                    <Route path='restaurants' element={<Restaurants />} />
                    <Route path='categories' element={<Categories />} />
                    <Route path='ordertracking' element={<OrderTracking />} />
                    <Route path='map' element={<Map />} />
                    <Route path='favs' element={<FavoritesPage />} />
                    <Route path='contact' element={<ContactUs />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </FavoriteProductsProvider>
      )}
    </Router>
  )
}

export default App
