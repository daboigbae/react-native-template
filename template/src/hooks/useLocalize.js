import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";

import i18n from "i18n-js";
import memoize from "lodash.memoize";

const translationGetters = {
	en: () => require("../utils/translations/en.json"),
	es: () => require("../utils/translations/es.json")
	// add lanugauges you want to support here
};

const translate = memoize(
	(key, config) => i18n.t(key, config),
	(key, config) => (config ? key + JSON.stringify(config) : key)
);

export default function useLocalize() {
	const setI18nConfig = () => {
		const fallback = { languageTag: "en", isRTL: false };

		const { languageTag, isRTL } =
			RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
			fallback;

		translate.cache.clear();

		I18nManager.forceRTL(isRTL);

		i18n.translations = { [languageTag]: translationGetters[languageTag]() };

		i18n.locale = languageTag;
	};

	return { setI18nConfig, translate };
}
