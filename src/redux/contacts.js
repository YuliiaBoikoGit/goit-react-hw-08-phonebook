import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const initialState = {
    items: [],
    filter: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addMatcher(
                contactsApi.endpoints.getContacts.matchFulfilled,
                (state, { payload }) => {
                    state.items = payload
                },
            )
    },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;