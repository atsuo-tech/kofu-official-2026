export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
};

export type ThemeConfig<T> = {
	[key in Theme]: T
};
