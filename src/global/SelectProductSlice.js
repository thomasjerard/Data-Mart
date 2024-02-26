import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "product",

    initialState: {
        product: {
            name: "Factori Raw Location Data | Global mobile location data (1 year history)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis erat at turpis rhoncus, at ultrices turpis feugiat. In eu aliquam nunc. Integer venenatis purus at elit tincidunt, non congue.",
            DataList: [
                {
                    id: 1,
                    name: "Data 1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    updationDate: "20/4/2023",
                    url: "https://www.google.co.in/"
                },
                {
                    id: 2,
                    name: "Data 2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    updationDate: "20/4/2023",
                    url: "https://www.google.co.in/"
                },
                {
                    id: 3,
                    name: "Data 3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    updationDate: "20/4/2023",
                    url: "https://www.google.co.in/"
                }, {
                    id: 4,
                    name: "Data 4",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    updationDate: "20/4/2023",
                    url: "https://www.google.co.in/"
                }
            ]
        }
    },

    reducers: {
        setproduct: (state, action) => {
            state.product = action.payload;
        },
        remproduct: (state) => {
            state.product = {};
        }
    }
});

export const { setproduct, remproduct } = productSlice.actions;

export const product = (state) => state.product.product;

export default productSlice.reducer;
