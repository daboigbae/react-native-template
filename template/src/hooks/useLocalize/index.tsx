import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import { translations } from "./translations";


const translate = memoize(
	(key: string, config?) => i18n.t(key, config),
	(key: string, config?) =>
    config ? key + JSON.stringify(config) : key
);

export default function useLocalize() {
	const setI18nConfig = () => {
		const fallbackTranslationSettings = { languageTag: "en", isRTL: false };

		const { languageTag, isRTL } = 
			RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallbackTranslationSettings;

		if (translate.cache.clear) {
			translate.cache.clear();
		}

		I18nManager.forceRTL(isRTL);

		i18n.translations = {
			[languageTag]: translations[languageTag],
		};

		i18n.locale = languageTag;
	};

	return { setI18nConfig, translate };
}
