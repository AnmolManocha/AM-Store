import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { cartReducers } from './reducers/cartReducers'
import {
  orderCreateReducers,
  orderDetailsReducers,
  orderListUserReducer,
  orderListReducer,
  orderPayReducers,
} from './reducers/orderReducers'
import {
  productDeleteReducer,
  productDetailsReducer,
  productCreateReducer,
  productListReducer,
  productUpdateReducer,
} from './reducers/productReducers'
import {
  userDeleteReducer,
  userDetailsReducer,
  userEditReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducers,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userEdit: userEditReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducers,
    orderDetails: orderDetailsReducers,
    orderPay: orderPayReducers,
    orderListUser: orderListUserReducer,
    orderList: orderListReducer,
  },
  preloadedState: {
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
  },
  middleware: [thunk],
})

export default store
