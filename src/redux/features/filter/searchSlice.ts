import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
    status: boolean,
    result: string
}

const initialState: ISearch = {
    status: true,
    result: ""
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        placeHolderToggle: (state) => {
            state.status = !state.status
        },
        placeHolder: (state) => {
            state.status = !state.status
        },
        searchResult: (state, action: PayloadAction<string>) => {
            state.result = action.payload;
        }
    }
})

export const { placeHolderToggle, placeHolder, searchResult } = searchSlice.actions

export default searchSlice.reducer;