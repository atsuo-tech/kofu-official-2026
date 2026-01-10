"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { Theme } from ".";
import { usePathname } from "next/navigation";

const ThemeContext = React.createContext<{
	theme: Theme;
	setTheme: (theme: Theme) => void;
} | null>(null);

export default function ThemeProvider(
	{
		children,
		initialTheme,
	}: {
		children: React.ReactNode;
		initialTheme: Theme;
	}
) {

	const [currentTheme, currentSetTheme] = useState<Theme>(initialTheme);

	const contextValue = useMemo(() => ({
		theme: currentTheme,
		setTheme: currentSetTheme,
	}), [currentTheme]);

	useEffect(() => {

		document.querySelector('html')?.setAttribute('data-theme', currentTheme);
		document.cookie = `theme=${currentTheme}; path=/; max-age=${60 * 60 * 24 * 365}`;

	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);

}

export function useTheme() {

	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;

}
