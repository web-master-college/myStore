
import { configureStore } from '@reduxjs/toolkit'
import wishListSlice from '../features/wishlist/wishListSlice'
export const store = configureStore({
  reducer: {
    wishlist: wishListSlice
  },
})