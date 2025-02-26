import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/globalType";

const templeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllTemple: builder.query({
        query: (args) => {
          const params = new URLSearchParams();
  
          if (args) {
            args.forEach((item: TQueryParams) =>
              params.append(item.name, item.value as string)
            );
          }
          return {
            url: "/temples",
            method: "GET",
            params: params,
          };
        },
        // transformResponse: (response: TResponseRedux<TTemple>) => {
        //   return {
        //     data: response.data,
        //     meta: response.data,
        //   };
        // },
      }),

      getSingleTemple : builder.query({
        query: (args)=>({
            url: `/temples/${args}`,
            method: "GET"
        })
      }),

      updateTemple: builder.mutation({
        query: (args) => ({
          url: `/temples/${args.id}`,
          method: "PUT",
          body: args.data,
        }),
        invalidatesTags: ["Temple"],
      }),


  }),
});

export const {useGetAllTempleQuery, useGetSingleTempleQuery, useUpdateTempleMutation} = templeApi