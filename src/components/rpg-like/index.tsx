"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from "./rpg-like.module.css";
import localFont from "next/font/local";

const rpgFont = localFont({
	src: "./BestTen-DOT.otf",
	display: "block",
	variable: "--font-rpg",
});

export default function RPGLike(
	{
		enemyComponent,
		textBoxComponent,
		onUpdate,
	}: {
		enemyComponent?: () => ReactNode,
		textBoxComponent?: (index: number) => ReactNode,
		onUpdate?: (index: number, setIndex: (val: number) => void) => void,
	},
) {

	const [index, setIndex] = useState(0);

	useEffect(() => {

		setTimeout(() => {
			setIndex((prev) => prev + 1);
		}, 50);

	}, [textBoxComponent, index]);

	useEffect(() => {
		onUpdate?.(index, setIndex);
	}, [index, onUpdate]);

	return (
		<div className={styles.container + " " + rpgFont.variable}>

			<div className={styles.enemy}>

				{enemyComponent?.()}

			</div>

			<div className={styles.textbox}>

				{textBoxComponent?.(index)}

			</div>

		</div>
	)

}
