import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { cartReducers } from './reducers/cartReducers'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
  },
  preloadedState: { cart: { cartItems: cartItemsFromStorage } },
  middleware: [thunk],
})

export default store
