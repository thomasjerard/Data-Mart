import { createSlice } from '@reduxjs/toolkit'
import boypic from '../images/boypic.png';
import girlpic from '../images/girlpic.png';

export const consumersSlice = createSlice({
    name: "consumers",

    initialState: {
        consumers: [
            {
                id: 'a',
                profile: <img src={boypic} alt="pic" />,
                username: 'Thomas123',
                stage: 'Consumer',
                lastviewed: '02/29/2024',
            },
            {
                id: 'b',
                profile: <img src={girlpic} alt="pic" />,
                username: 'vaidehi456',
                stage: 'Consumer',
                lastviewed: '02/29/2024',
            },
        ]
    },

    reducers: {
        setconsumers: (state, action) => {
            state.consumers = action.payload;
        },
        remconsumers: (state) => {
            state.consumers = {};
        }
    }
});

export const { setconsumers, remconsumers } = consumersSlice.actions;

export const consumers = (state) => state.consumers.consumers;

export default consumersSlice.reducer;