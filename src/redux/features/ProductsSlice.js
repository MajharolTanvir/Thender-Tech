const { apiSlice } = require("../api/api");


const productsSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/posts'
        })
    })
})

export const {useGetProductsQuery} = productsSlice