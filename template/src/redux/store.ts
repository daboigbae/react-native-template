import AsyncStorage from "@react-native-async-storage/async-storage";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";

import UserSlice from "./UserSlice";

const reducers = combineReducers({
	UserSlice,
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: [], // add reducers you want to persist here
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(),
});

export default store;
