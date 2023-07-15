import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookReducer from "./features/book/bookSlice";
import cartReducer from "./features/cart/cartSlice";
import searchReducer from "./features/filter/searchSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        book: bookReducer,
        search: searchReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;