import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from "./contactsApi";
import { authApi } from "./authApi";
import contacts from './contacts';
import user from "./user";

const userPersistConfig = {
    key: 'user',
    version: 1,
    storage,
    whitelist: ['token'],
};
 
const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
    reducer: {
        contacts,
        [contactsApi.reducerPath]: contactsApi.reducer,
        user: persistedUserReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware).concat(authApi.middleware),
});

export const persistor = persistStore(store);