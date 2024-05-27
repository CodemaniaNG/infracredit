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
import { onboardApi } from "./services/onboard.service";
import { rolesApi } from "./services/roles.service";
import { departmentApi } from "./services/department.service";
import { templatesApi } from "./services/templates.service";
import { reportsApi } from "./services/reports.service";
import { logsApi } from "./services/logs.service";
import { documentsApi } from "./services/document.service";

// reducers
import authReducer from "./slices/authSlice";
import templatReducer from "./slices/templateSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "template"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  template: templatReducer,
  [onboardApi.reducerPath]: onboardApi.reducer,
  [rolesApi.reducerPath]: rolesApi.reducer,
  [departmentApi.reducerPath]: departmentApi.reducer,
  [templatesApi.reducerPath]: templatesApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [logsApi.reducerPath]: logsApi.reducer,
  [documentsApi.reducerPath]: documentsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: {
    app: persistedReducer,
    [onboardApi.reducerPath]: onboardApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [templatesApi.reducerPath]: templatesApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
    [logsApi.reducerPath]: logsApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      onboardApi.middleware,
      rolesApi.middleware,
      departmentApi.middleware,
      templatesApi.middleware,
      reportsApi.middleware,
      logsApi.middleware,
      documentsApi.middleware,
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
