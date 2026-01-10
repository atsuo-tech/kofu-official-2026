import Link from "next/link";
import { CSSProperties } from "react";
import styles from './happylink.module.css';
import usePageColor from "@/theme/page-color";

export default function HappyLink(
	props: {
		hovercolor?: string;
	} & Parameters<typeof Link>[0]
) {

	const pageColor = usePageColor(typeof props.href === 'string' ? props.href : props.href.pathname || '');

	return (
		<Link
			{...props}
			className={styles.happyLink + (props.className ? ` ${props.className}` : '')}
			style={{
				"--hover-color": props.hovercolor ? props.hovercolor : pageColor,
				...props.style
			} as CSSProperties}
		>
		</Link>
	);

}
