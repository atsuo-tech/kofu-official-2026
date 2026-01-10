"use client";

import { Dispatch, SetStateAction } from "react";
import styles from './selector.module.css';

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

	return (
		<div className={styles.selector}>

			<div
				className={styles.indicator}
				style={{
					width: `${100 / items.length}%`,
					transform: `translateX(${selection * 100}%)`,
					background: backgrounds ? backgrounds[selection] : 'var(--theme-common-background)',
				}}
			/>

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

		</div>
	)

}