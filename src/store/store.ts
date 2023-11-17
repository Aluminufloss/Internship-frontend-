import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authentificationSlice';
import articleReducer from '../features/article/articleSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    article: articleReducer,
  }
});

//Нужны для корректной работы с хуками
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;