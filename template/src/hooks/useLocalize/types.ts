export type TranslationKeyType = {
	[key: string]: string;
};

export type TranslationType = {
  [languageTag: string]: TranslationKeyType;
};
