import { Theme, ThemeConfig } from ".";
import { useTheme } from "./context";

export type CommonThemeConfig = {
	backgroundColor: string;
	textColor: string;
	linkColor: string;
	accentRedColor: string;
	accentBlueColor: string;
	accentGreenColor: string;
};

export const COMMON_THEME_CONFIG: ThemeConfig<CommonThemeConfig> = {
	[Theme.LIGHT]: {
		backgroundColor: "#ffffff",
		textColor: "#000000",
		linkColor: "#000088",
		accentRedColor: "#d32f2f",
		accentBlueColor: "#1976d2",
		accentGreenColor: "#388e3c",
	},
	[Theme.DARK]: {
		backgroundColor: "#121212",
		textColor: "#ffffff",
		linkColor: "#90caf9",
		accentRedColor: "#f48fb1",
		accentBlueColor: "#90caf9",
		accentGreenColor: "#a5d6a7",
	},
};

export default function useCommonTheme<T extends keyof CommonThemeConfig>(
	confPath: T
): CommonThemeConfig[T] {

	const { theme } = useTheme();

	return COMMON_THEME_CONFIG[theme][confPath];

}
