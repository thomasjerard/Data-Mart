import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "product",

    initialState: {
        product: {
            id: 1,
            name: "Factori Raw Location Data | Global mobile location data (1 year history)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis erat at turpis rhoncus, at ultrices turpis feugiat. In eu aliquam nunc. Integer venenatis purus at elit tincidunt, non congue.",
            producer: "jack sparrow",
            dataList: [
                {
                    id: 1,
                    urlName: "Data 1",
                    urlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    lastUpdateDate: "20/4/2023",
                    copyUrl: "https://www.google.co.in/"
                },
                {
                    id: 2,
                    urlName: "Data 2",
                    urlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    lastUpdateDate: "20/4/2023",
                    copyUrl: "https://www.google.co.in/"
                },
                {
                    id: 3,
                    urlName: "Data 3",
                    urlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    lastUpdateDate: "20/4/2023",
                    copyUrl: "https://www.google.co.in/"
                }, {
                    id: 4,
                    urlName: "Data 4",
                    urlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    creationDate: "19/11/2003",
                    lastUpdateDate: "20/4/2023",
                    copyUrl: "https://www.google.co.in/"
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
