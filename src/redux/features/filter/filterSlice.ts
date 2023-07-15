import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IFilter {
    genre: string,
    publicationYear: string
}

const initialState: IFilter = {
    genre: "",
    publicationYear: ""
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        genreResult: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        publicationYearResult: (state, action: PayloadAction<string>) => {
            state.publicationYear = action.payload;
        }
    }
})

export const { genreResult, publicationYearResult } = filterSlice.actions

export default filterSlice.reducer;