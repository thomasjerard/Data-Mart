import { createSlice } from '@reduxjs/toolkit'
import img1 from '../images/product-bgd.jpg';

export const draftsSlice = createSlice({
    name: "drafts",

    initialState: {
        drafts: [
            { key: "1", domains: ['Weather Data', 'Mobile App Data'], name: "Product 1", url: 'product1', by: 'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { key: "2", domains: ['Legal Data', 'Healthcare Data'], name: "Product 2", url: 'product2', by: 'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { key: "3", domains: ['Brand Data', 'Mobile App Data'], name: "Product 3", url: 'product3', by: 'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
            { key: "4", domains: ['Environmental Data', 'Weather Data'], name: "Product 4", url: 'product4', by: 'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
        ],
    },

    reducers: {
        setdrafts: (state, action) => {
            state.drafts = { ...state.drafts, drafts: action.payload };
        }
    }
});

export const { setdrafts } = draftsSlice.actions;

export const alldrafts = (state) => state.drafts.drafts;

export default draftsSlice.reducer;
