import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62fe4a5f41165d66bfbcdf0f.mockapi.io/api/v1/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
          query: () => '/contacts',
          providesTags: ['Contacts'],
        }),
      
        setContacts: builder.mutation({
          query(body) {
            return {
              url: '/contacts',
              method: 'POST',
              body,
            }
          },
          invalidatesTags: ['Contacts'],
        }),

        deleteContact: builder.mutation({
          query: ({ id }) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags: ['Contacts'],
        }),
  }),
});

export const { useGetContactsQuery, useSetContactsMutation, useDeleteContactMutation } = contactsApi;