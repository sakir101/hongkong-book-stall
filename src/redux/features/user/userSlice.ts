import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IUserState {
    user: {
        email: string | null
        firstName: string | null
        img: string | null
    },
    isLoading: boolean,
    isError: boolean,
    error: string | null
}

const initialState: IUserState = {
    user: {
        email: null,
        firstName: null,
        img: null
    },
    isLoading: false,
    isError: false,
    error: null
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string | null>) => {
            state.user.email = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setUserName: (state, action: PayloadAction<string | null>) => {

            state.user.firstName = action.payload
        },
        setUserImage: (state, action: PayloadAction<string | null>) => {
            state.user.img = action.payload
        },
    },

})

export const { setUser, setLoading, setUserName, setUserImage } = userSlice.actions


export default userSlice.reducer;
