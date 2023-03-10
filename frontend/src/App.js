import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import axios from 'axios'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import UserListScreen from './Screens/UserListScreen'
import UserEditScreen from './Screens/UserEditScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import OrderListScreen from './Screens/OrderListScreen'

function App() {
  const [clientID, setClientID] = useState('')

  useEffect(() => {
    const getClientId = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')

      setClientID(clientId)
    }

    if (!window.paypal) {
      getClientId()
    }
  }, [])

  const initialOptions = {
    'client-id': clientID,
    currency: 'USD',
  }

  return (
    <>
      {clientID && (
        <PayPalScriptProvider options={initialOptions}>
          <Router>
            <Header />
            <main className='py-3'>
              <Container>
                <Routes>
                  <Route path='/' element={<HomeScreen />} exact />
                  <Route
                    path='/search/:keyword'
                    element={<HomeScreen />}
                    exact
                  />
                  <Route
                    path='/page/:pageNumber'
                    element={<HomeScreen />}
                    exact
                  />
                  <Route
                    path='/search/:keyword/page/:pageNumber'
                    element={<HomeScreen />}
                    exact
                  />
                  <Route path='/product/:id' element={<ProductScreen />} />
                  <Route path='/cart/:id?' element={<CartScreen />} />
                  <Route path='/login' element={<LoginScreen />} />
                  <Route path='/register' element={<RegisterScreen />} />
                  <Route path='/profile' element={<ProfileScreen />} />
                  <Route path='/shipping' element={<ShippingScreen />} />
                  <Route path='/payment' element={<PaymentScreen />} />
                  <Route path='/placeorder' element={<PlaceOrderScreen />} />
                  <Route path='/order/:id' element={<OrderScreen />} />
                  <Route path='/admin/users' element={<UserListScreen />} />
                  <Route
                    path='/admin/user/:id/edit'
                    element={<UserEditScreen />}
                  />
                  <Route
                    path='/admin/products'
                    element={<ProductListScreen />}
                    exact
                  />
                  <Route
                    path='/admin/products/page/:pageNumber'
                    element={<ProductListScreen />}
                    exact
                  />
                  <Route
                    path='/admin/product/:id/edit'
                    element={<ProductEditScreen />}
                  />
                  <Route path='/admin/orders' element={<OrderListScreen />} />
                </Routes>
              </Container>
            </main>
            <Footer />
          </Router>
        </PayPalScriptProvider>
      )}
    </>
  )
}

export default App
