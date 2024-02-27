import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: "products",

    initialState: {
        products: []
    },

    reducers: {
        setproducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { setproducts } = productsSlice.actions;

export const allproducts = (state) => state.products.products;

export default productsSlice.reducer;
