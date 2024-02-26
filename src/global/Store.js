import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./AuthSlice"
import productsReducer from "./ProductsSlice"
import productReducer from "./SelectProductSlice"
import consumersReducer from "./ConsumersSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        product: productReducer,
        consumers: consumersReducer
    }
})