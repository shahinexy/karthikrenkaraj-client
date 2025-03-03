import baseApi from "@/redux/api/baseApi";

import { TQueryParams } from "@/types/globalType";

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
          url: "/causes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Causes"],
    }),

    addCause: builder.mutation({
      query: (data) => ({
        url: `/causes`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Causes"],
    }),

    getSingleCause: builder.query({
      query: (args) => ({
        url: `/causes/${args}`,
        method: "GET",
      }),
      providesTags: ["Causes"],
    }),

    updateCause: builder.mutation({
      query: (args) => ({
        url: `/causes/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Causes"],
    }),

    templeFundingCauses: builder.query({
      query: (args) => {
        return {
          url: `/suggest/open-founding/${args}`,
          method: "GET",
        };
      },
    }),

    templeCompleteCauses: builder.query({
      query: (args) => {
        return {
          url: `/suggest/complete/${args}`,
          method: "GET",
        };
      },
    }),

    deleteCause: builder.mutation({
      query: (id) => ({
        url: `/causes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Causes"],
    }),

    causeCategory: builder.query({
      query: () => {
        return {
          url: `/type`,
          method: "GET",
        };
      },
    }),

    allCausesForAdmin: builder.query({
      query: () => {
        return {
          url: `/suggest/admin/all`,
          method: "GET",
        };
      },
      providesTags: ["Causes"],
    }),

    updateSuggestCauses: builder.mutation({
      query: (arg) => {
        return {
          url: `/suggest/admin/update-price/${arg.id}`,
          method: "PUT",
          body: arg.data,
        };
      },
      invalidatesTags: ["Causes"],
    }),

    addLinksToSgussedCaues: builder.mutation({
      query: (arg) => {
        return {
          url: `/suggest/admin/add/link/${arg.id}`,
          method: "PUT",
          body: arg.data,
        };
      },
      invalidatesTags: ["Causes"],
    }),
  }),
});

export const {
  useGetAllCauseQuery,
  useGetSingleCauseQuery,
  useAddCauseMutation,
  useUpdateCauseMutation,
  useTempleFundingCausesQuery,
  useTempleCompleteCausesQuery,
  useDeleteCauseMutation,
  useCauseCategoryQuery,
  useAllCausesForAdminQuery,
  useUpdateSuggestCausesMutation,
  useAddLinksToSgussedCauesMutation
} = causeApi;
