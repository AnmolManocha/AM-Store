import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers'

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
  preloadedState: {},
  middleware: [thunk],
})

export default store
