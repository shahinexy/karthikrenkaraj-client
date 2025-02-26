import baseApi from "@/redux/api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
          query: () => ({
            url: "/users",
            method: "GET",
          }),
        }),
      }),
})
 
export const {useGetAllUserQuery} = userApi