import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
        const { token = '' } = getState().user;
    
        headers.set('Authorization', token);

        return headers;
    },
  }),
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

        updateContact: builder.mutation({
          query: ({ id, payload }) => ({
            url: `/contacts/${id}`,
            method: 'PATCH',
            body: payload,
          }),
          invalidatesTags: ['Contacts'],
        }),
  }),
});

export const { useGetContactsQuery, useSetContactsMutation, useDeleteContactMutation, useUpdateContactMutation } = contactsApi;