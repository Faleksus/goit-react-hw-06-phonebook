import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/contacts.slice";
import { filterSlice } from "./filter/filter.slice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
};

const contactsPersistReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    [contactsSlice.name]: contactsPersistReducer,
    [filterSlice.name]: filterSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
