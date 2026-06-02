import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  totalWisthListProducts: 0,
  products: []
}

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add: (state, payload) => {},
    toggle: (state, {payload, type}) => {
        if(payload.productId){
            const isInWishListIdx = state.products.findIndex(p => p.productId === payload.productId)
            if(isInWishListIdx > -1){
                state.products.splice(isInWishListIdx, 1);
                state.totalWisthListProducts--;
            }else{
                state.products.push(payload);
                state.totalWisthListProducts++;
            }
        }


    },
    remove: (state) => {},
  },
})

// Action creators are generated for each case reducer function
export const {add, remove, toggle } = wishListSlice.actions

export default wishListSlice.reducer