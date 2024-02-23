import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./AuthSlice"
import productsReducer from "./ProductsSlice"
import productReducer from "./SelectProductSlice"
import draftsReducer from "./DraftsSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        product: productReducer,
        drafts: draftsReducer
    }
})