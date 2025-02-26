import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/globalType";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/users",
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

    
  }),
});

export const { useGetAllUserQuery } = userApi;
