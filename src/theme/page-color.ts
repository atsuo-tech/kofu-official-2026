import { useMemo } from "react";

export type PageColor = {
	color: string;
	children?: {
		[key: string]: PageColor;
	};
}

const PAGE_COLOR: PageColor = {
	color: "var(--theme-page-root)",
	children: {
		"about": {
			color: "var(--theme-page-about)",
		},
		"news": {
			color: "var(--theme-page-news)",
		},
		"group": {
			color: "var(--theme-page-group)",
		},
		"access": {
			color: "var(--theme-page-access)",
		},
	},
};

export default function usePageColor(path: string): string {

	const current = useMemo(() => {

		const segments = path.split('/').filter(Boolean);

		let current = PAGE_COLOR;

		for (const segment of segments) {
			if (current.children && current.children[segment]) {
				current = current.children[segment];
			} else {
				break;
			}
		}

		return current;

	}, [path]);

	return current.color;

}
