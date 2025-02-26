import baseApi from "@/redux/api/baseApi";
import { TQueryParams, TResponseRedux } from "@/types/globalType";
import { TTemple } from "@/types/temple.type";

const causeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCause: builder.query({
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

      getSingleCause : builder.query({
        query: (args)=>({
            url: `/temples/${args}`,
            method: "GET"
        })
      }),

      updateCause: builder.mutation({
        query: (args) => ({
          url: `/temples/${args.id}`,
          method: "PUT",
          body: args.data,
        }),
        invalidatesTags: ["Temple"],
      }),


  }),
});

export const {useGetAllCauseQuery, useGetSingleCauseQuery, useUpdateCauseMutation} = causeApi