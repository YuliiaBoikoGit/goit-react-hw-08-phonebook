import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import contacts from './contacts';

export const store = configureStore({
    reducer: {
        contacts,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true,
    }).concat(contactsApi.middleware),
});