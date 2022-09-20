import React from "react";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Navigation from "./src/navigation/Navigation";

import store from "./src/redux/store";

const persistor = persistStore(store);

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	);
};

export default App;
