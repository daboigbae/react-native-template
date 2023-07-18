import React from "react";
import {useEffect} from "react";
import {Provider} from "react-redux";

import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import useLocalize from "./src/hooks/useLocalize";
import Navigation from "./src/navigation/Navigation";
import store from "./src/redux/store"; 

import "react-native-gesture-handler";

const persistor = persistStore(store);

const App = () => {
	const {setI18nConfig} = useLocalize();
	useEffect(() => {
		setI18nConfig();
	}, [setI18nConfig]);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	);
};

export default App;
