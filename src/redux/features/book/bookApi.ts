import { api } from "../../api/apiSlice"



const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book',
            providesTags: ['books'],
        }),
        getBooksFromWishList: builder.query({
            query: () => '/wishList',
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
        addBookToWishList: builder.mutation({

            query: ({ data }) => ({
                url: '/wishList',
                method: 'POST',
                body: data

            }),

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
        deleteBookDataFromWishList: builder.mutation({
            query: (id) => ({
                url: `/wishList/${id}`,
                method: 'DELETE',
            }),
        }),


    }),
})

export const {
    useGetBooksQuery,
    useGetBooksFromWishListQuery,
    useGetSearchBookQuery,
    useGetSingleBookQuery,
    useGetFilterBookQuery,
    usePostBookDataMutation,
    useAddBookToWishListMutation,
    useUpdateBookDataMutation,
    useDeleteBookDataMutation,
    useDeleteBookDataFromWishListMutation
} = bookApi





