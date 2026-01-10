"use client";

import { CSSProperties, Dispatch, SetStateAction, useLayoutEffect, useRef } from "react";
import styles from './selector.module.css';
import { useResizeObserver } from "@/lib/resize-observer";

export default function Selector(
	{
		items,
		state: [selection, setSelection],
		backgrounds,
	}: {
		items: string[],
		state: [number, Dispatch<SetStateAction<number>>],
		backgrounds?: string[],
	}
) {

	const selector = useRef<HTMLDivElement>(null);

	const rect = useResizeObserver(selector);

	useLayoutEffect(() => {

		if (selector.current) {

			const button = selector.current?.children[selection] as HTMLButtonElement;

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
			className={styles.selector}
			ref={selector}
		>

			{
				items.map((item, index) => (
					<button
						key={index}
						onClick={() => setSelection(index)}
						className={selection === index ? styles.active : ''}
					>

						{item}
					</button>
				))
			}

			<div
				className={styles.indicator}
				style={{
					background: backgrounds ? backgrounds[selection] : 'var(--theme-common-background)',
				} as CSSProperties}
			></div>

		</div>
	)

}