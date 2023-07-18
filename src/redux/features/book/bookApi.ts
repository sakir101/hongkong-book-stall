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

        getBooksFromBookList: builder.query({
            query: () => '/bookList',
            providesTags: ['books'],
        }),

        getSearchBook: builder.query({
            query: (searchTerm) => `/book/?searchTerm=${searchTerm}`
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
        }),
        getMaxRatedBook: builder.query({
            query: () => '/book/?maxRate'
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

        postUserData: builder.mutation({
            query: ({ data }) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data
            }),
        }),

        addBookToBookList: builder.mutation({
            query: ({ data }) => ({
                url: '/bookList',
                method: 'POST',
                body: data
            }),
        }),

        loginUserData: builder.mutation({
            query: ({ data }) => ({
                url: '/auth/login',
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

        updateBookListData: builder.mutation({
            query: ({ id, data }) => ({
                url: `/bookList/${id}`,
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
    useGetBooksFromBookListQuery,
    useGetSearchBookQuery,
    useGetSingleBookQuery,
    useGetMaxRatedBookQuery,
    useGetFilterBookQuery,
    usePostBookDataMutation,
    useAddBookToWishListMutation,
    usePostUserDataMutation,
    useLoginUserDataMutation,
    useAddBookToBookListMutation,
    useUpdateBookDataMutation,
    useUpdateBookListDataMutation,
    useDeleteBookDataMutation,
    useDeleteBookDataFromWishListMutation
} = bookApi





