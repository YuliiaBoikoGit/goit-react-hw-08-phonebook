import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://connections-api.herokuapp.com/users',
      prepareHeaders: (headers, { getState }) => {
        const { token = '' } = getState().user;
    
        headers.set('Authorization', token);

        return headers;
      },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        login: builder.mutation({
          query(payload) {
            return {
              url: '/login',
              method: 'POST',
              body: payload,
            }
          },
          invalidatesTags: ['User'],
        }),
      
        registration: builder.mutation({
          query(payload) {
            return {
              url: '/signup',
              method: 'POST',
              body: payload,
            }
          },
          invalidatesTags: ['User'],
        }),

        logout: builder.mutation({
          query: () => ({
              url: '/logout',
              method: 'POST',
          }),
          invalidatesTags: ['User'],
        }),

        currentUser: builder.query({
          query: () => '/current',
        }),
    }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation, useCurrentUserQuery } = authApi;