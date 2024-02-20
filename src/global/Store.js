import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./AuthSlice"

export default configureStore({
    reducer: {
        user: userReducer
    }
})