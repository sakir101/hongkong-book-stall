import { IBook } from "../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface ICart {
    books: IBook[];
}

const initialState: ICart = {
    books: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IBook>) => {
            const existing = state.books.find(
                (book) => book._id === action.payload._id
            )

            if (existing) {
                console.log("Book is exist");
            }

        },
        removeFromCart: (state, action: PayloadAction<IBook>) => {
            state.books = state.books.filter(
                (book) => book._id !== action.payload._id
            );
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions


export default cartSlice.reducer;