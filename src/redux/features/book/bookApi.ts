import { api } from "../../api/apiSlice"



const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book'
        }),
        getSearchBook: builder.query({
            query: (searchTerm) => `/book/?searchTerm=${searchTerm}`
        }),
        getFilterBook: builder.query({
            query: ({ genre, publicationYear }) => {
                let queryString = '/book/';

                if (genre && publicationYear) {
                    console.log(1)
                    queryString += `/?genre=${genre}&publicationYear=${publicationYear}`;
                } else if (genre) {

                    queryString += `/?genre=${genre}`;
                } else if (publicationYear) {
                    queryString += `/?publicationYear=${publicationYear}`;
                }

                return queryString;
            },
        }),
        postBookData: builder.mutation({
            query: ({ data }) => ({
                url: '/book',
                method: 'POST',
                body: data
            }),
        }),


    }),
})

export const {
    useGetBooksQuery,
    useGetSearchBookQuery,
    useGetFilterBookQuery,
    usePostBookDataMutation
} = bookApi





