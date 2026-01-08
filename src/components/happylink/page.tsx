import Link from "next/link";
import { CSSProperties } from "react";
import styles from './happylink.module.css';

export default function HappyLink(
	props: {
		hovercolor?: string;
	} & Parameters<typeof Link>[0]
) {

	return (
		<Link
			{...props}
			className={styles.happyLink + (props.className ? ` ${props.className}` : '')}
			style={{ "--hover-color": props.hovercolor, ...props.style } as CSSProperties}
		>
		</Link>
	);

}
