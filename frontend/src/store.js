import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { cartReducers } from './reducers/cartReducers'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers'
import { userLoginReducer } from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userLogin: userLoginReducer,
  },
  preloadedState: {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
  },
  middleware: [thunk],
})

export default store
