import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import orderReducer from "./slices/orderSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";

const persitConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  userSlice: userReducer,
  orderSlice: orderReducer,
  productSlice: productReducer,

});

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);