import {
  combineReducers,
  Middleware,
  isRejectedWithValue,
  configureStore,
} from "@reduxjs/toolkit";
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
import thunk from "redux-thunk";

import storage from "./storage";
import AuthReducer, { doLogout } from "./slices/auth";
import { authServerApi } from "./api/authService";
import { Notify } from "@/app/utils/notify";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authState"],
};

const rootReducer = combineReducers({
  authState: AuthReducer,
  [authServerApi.reducerPath]: authServerApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const {
      payload: { status, data },
    } = action;

    if (status === 401) {
      const closeSession = new Promise<void>((resolve) =>
        setTimeout(() => {
          store.dispatch(doLogout());
          resolve();
        }, 1000)
      );

      Notify.asyncPromise<void>(
        {
          success: `Sesión cerrada exitosamente.`,
          pending: "Su sesión a expirado. Debe iniciar sesión nuevamente.",
          error: "Error al cerrar sesión.",
        },
        closeSession,
        "401"
      );
      return next(action);
    }

    if (status === 400) {
      Notify.error(data.message);

      return next(action);
    }
  }

  return next(action);
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger, thunk, authServerApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
