import { api } from "../../api/apiSlice"



const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book'
        }),
        getSearchBook: builder.query({
            query: (searchTerm) => `/book/?searchTerm=${searchTerm}`
        }),



    }),
})

export const {
    useGetBooksQuery,
    useGetSearchBookQuery
} = bookApi