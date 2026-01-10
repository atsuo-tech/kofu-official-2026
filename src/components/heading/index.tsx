"use client";

import usePageColor from "@/theme/page-color";
import { usePathname } from "next/navigation";

export default function Heading(
	{
		children,
		variant = 'h1',
	}: {
		children: React.ReactNode;
		variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	}
) {

	const pathColor = usePageColor(usePathname());

	if (variant == 'h1') {

		return (
			<h1 style={{
				color: pathColor,
			}}>
				{children}
			</h1>
		);

	}

	const Tag = variant;

	return (
		<Tag>{children}</Tag>
	);

}
