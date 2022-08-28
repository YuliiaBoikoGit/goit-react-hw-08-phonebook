import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
    name: '',
    email: '',
    token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                const { user, token } = payload;

                state.name = user.name;
                state.email = user.email;
                state.token = token;
        });
        builder.addMatcher(
            authApi.endpoints.currentUser.matchFulfilled,
            (state, { payload }) => {
                state.name = payload.name;
                state.email = payload.email;
        });
        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.email = initialState.email;
            state.name = initialState.name;
            state.token = initialState.token;
        });
    },
});

export default userSlice.reducer;