import React from "react";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { TailwindProvider } from "tailwindcss-react-native";

import Navigation from "./src/navigation/Navigation";

import store from "./src/redux/store";

const persistor = persistStore(store);

const App = () => {
	return (
		<TailwindProvider>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Navigation />
				</PersistGate>
			</Provider>
		</TailwindProvider>
	);
};

export default App;
