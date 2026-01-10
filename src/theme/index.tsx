import { LightMode, DarkMode, Hexagon, HexagonOutlined, Contrast, School } from '@mui/icons-material';
import React from 'react';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	LIGHT_MODERN = 'light-modern',
	DARK_MODERN = 'dark-modern',
	GRAY_SCALE = 'gray-scale',
	WASEDA = 'waseda',
};

export const THEME_ICONS: Record<Theme, React.ReactNode> = {
	[Theme.LIGHT]: <LightMode />,
	[Theme.DARK]: <DarkMode />,
	[Theme.LIGHT_MODERN]: <HexagonOutlined />,
	[Theme.DARK_MODERN]: <Hexagon />,
	[Theme.GRAY_SCALE]: <Contrast />,
	[Theme.WASEDA]: <School />,
};


export const THEME_NAMES: Record<Theme, string> = {
	[Theme.LIGHT]: 'Light',
	[Theme.DARK]: 'Dark',
	[Theme.LIGHT_MODERN]: 'Light Modern',
	[Theme.DARK_MODERN]: 'Dark Modern',
	[Theme.GRAY_SCALE]: 'Gray Scale',
	[Theme.WASEDA]: 'Waseda Red',
};

export type ThemeConfig<T> = {
	[key in Theme]: T
};
