import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import articleReducer from '../features/article/articleSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    article: articleReducer,
  }
});

export default store;