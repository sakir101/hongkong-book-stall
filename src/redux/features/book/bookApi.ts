import { api } from "../../api/apiSlice"



const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book',
            providesTags: ['books'],
        }),
        getSearchBook: builder.query({
            query: (searchTerm) => `/book/?searchTerm=${searchTerm}`
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
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
            invalidatesTags: ['books']
        }),
        updateBookData: builder.mutation({
            query: ({ id, data }) => ({
                url: `/book/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['books']
        }),
        deleteBookData: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
            }),
        }),


    }),
})

export const {
    useGetBooksQuery,
    useGetSearchBookQuery,
    useGetSingleBookQuery,
    useGetFilterBookQuery,
    usePostBookDataMutation,
    useUpdateBookDataMutation,
    useDeleteBookDataMutation
} = bookApi





