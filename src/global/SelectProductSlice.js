import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "product",
    
    initialState: {
        product: {
            productName: "Factori Raw Location Data | Global mobile location data (1 year history)",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis erat at turpis rhoncus, at ultrices turpis feugiat. In eu aliquam nunc. Integer venenatis purus at elit tincidunt, non congue.",
            DataList: [
            {
            DataName:"Data 1",
            DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            creationDate: "19/11/2003",
            UpdationDate:"20/4/2023",
            link:"https://www.google.co.in/"
            },
            {
            DataName:"Data 2",
            DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            creationDate: "19/11/2003",
            UpdationDate:"20/4/2023",
            link:"https://www.google.co.in/"
            },
            {
            DataName:"Data 3",
            DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            creationDate: "19/11/2003",
            UpdationDate:"20/4/2023",
            link:"https://www.google.co.in/"
            },{
            DataName:"Data 4",
            DataDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            creationDate: "19/11/2003",
            UpdationDate:"20/4/2023",
            link:"https://www.google.co.in/"
            }
            ]
        }
    },
    
    reducers:{
        setproduct: (state, action) => {
            state.product = action.payload;
        },
        remproduct: (state) => {
            state.product = {};
        }
    }
});

export const {setproduct, remproduct} = productSlice.actions;

export const product = (state) => state.product.product;

export default productSlice.reducer;
