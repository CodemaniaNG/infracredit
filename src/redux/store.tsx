import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// services
import { organizationApi } from "./services/organization.service";
import { authApi } from "./services/auth.service";
import { usersApi } from "./services/users.service";

// reducers
import authReducer from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [organizationApi.reducerPath]: organizationApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: {
    app: persistedReducer,
    [organizationApi.reducerPath]: organizationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      organizationApi.middleware,
      authApi.middleware,
      usersApi.middleware,
    ]),
});

setupListeners(store.dispatch);

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
