"use client";

import { CSSProperties, Dispatch, SetStateAction, useLayoutEffect, useRef } from "react";
import styles from './selector.module.css';
import { useResizeObserver } from "@/lib/resize-observer";
import { COMMON_CONFIG } from "@/theme";

export default function Selector(
	{
		title,
		items,
		state: [selection, setSelection],
		backgrounds,
		vertical = false,
	}: {
		title?: string,
		items: string[],
		state: [number, Dispatch<SetStateAction<number>>],
		backgrounds?: string[],
		vertical?: boolean,
	}
) {

	const selector = useRef<HTMLDivElement>(null);

	const rect = useResizeObserver(selector);

	useLayoutEffect(() => {

		if (selector.current) {

			const button = selector.current?.getElementsByClassName(styles.selectorItem)[selection] as HTMLButtonElement;

			const indicator = selector.current?.getElementsByClassName(styles.indicator)[0] as HTMLDivElement;

			if (button) {
				indicator.style.width = `${button.offsetWidth}px`;
				indicator.style.transform = `translateX(${button.offsetLeft}px)`;
				indicator.style.height = `${button.offsetHeight}px`;
				indicator.style.top = `${button.offsetTop}px`;
			}

		}

	}, [selection, selector, rect?.width, rect?.height]);

	return (
		<div
			className={styles.selector + (vertical ? ` ${styles.vertical}` : '')}
			ref={selector}
		>

			{
				title &&
				<button className={styles.selectorTitle}>
					{title}
				</button>
			}

			{
				items.map((item, index) => (
					<button
						key={index}
						onClick={() => setSelection(index)}
						className={selection === index ? `${styles.active} ${styles.selectorItem}` : styles.selectorItem}
					>
						{item}
					</button>
				))
			}

			<div
				className={styles.indicator}
				style={{
					background:
						backgrounds
							? backgrounds[selection]
							|| `var(--theme-common-accent-${((selection - backgrounds.length) % COMMON_CONFIG.accentColorNumber) + 1})`
							: `var(--theme-common-accent-${(selection % COMMON_CONFIG.accentColorNumber) + 1})`,
				} as CSSProperties}
			></div>

		</div>
	)

}

export function SelectorGroup(
	{
		children,
	}: {
		children: React.ReactNode,
	}
) {
	return (
		<div className={styles.selectorGroup}>
			{children}
		</div>
	)
}
