import {configureStore, Action, combineReducers, ThunkAction} from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';

const RootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
