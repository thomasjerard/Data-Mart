import { createSlice } from '@reduxjs/toolkit'
import img1 from '../images/product-bgd.jpg';

export const productsSlice = createSlice({
    name: "products",

    initialState: {
        products: [
            { id: "1", domain: 'Weather Data', name: "Product 1", producer: 'Jake Weatherald', description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { id: "2", domain: 'Legal Data', name: "Product 2", producer: 'Jake Weatherald', description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { id: "3", domain: 'Brand Data', name: "Product 3", producer: 'Jake Weatherald', description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { id: "4", domain: 'Environmental Data', name: "Product 4", producer: 'Jake Weatherald', description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
        ]
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
