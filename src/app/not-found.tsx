"use client";

import RPGLike from "@/components/rpg-like";
import styles from './not-found.module.css';
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

export default function NotFoundPage() {

	const [selection, setSelection] = useState(0);
	const selectionRef = useRef(selection);
	const [failure, setFailure] = useState(false);
	const [timeReset, setTimeReset] = useState(false);
	const [outputDone, setOutputDone] = useState(false);

	const router = useRouter();

	const MENU_LENGTH = 3;

	useEffect(() => {

		function listener(e: KeyboardEvent) {
			if (e.key === "ArrowUp") {
				e.preventDefault();
				if (!outputDone) return;
				selectionRef.current = (selectionRef.current - 1 + MENU_LENGTH) % MENU_LENGTH;
				setSelection((prev) => (prev - 1 + MENU_LENGTH) % MENU_LENGTH);
			}
			if (e.key === "ArrowDown") {
				e.preventDefault();
				if (!outputDone) return;
				selectionRef.current = (selectionRef.current + 1) % MENU_LENGTH;
				setSelection((prev) => (prev + 1) % MENU_LENGTH);
			}
		}

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		}

	}, [outputDone]);

	useEffect(() => {

		function listener(e: KeyboardEvent) {
			if (e.key == "Enter" || e.key == "z" || e.key == "Z" || e.key == " ") {
				e.preventDefault();
				if (!outputDone) return;
				if (selectionRef.current == 0) {
					router.back();
					setTimeout(() => {
						setFailure(true);
						setTimeReset(true);
					}, 300);
				} else if (selectionRef.current == 1) {
					router.push("/");
				} else if (selectionRef.current == 2) {
					router.push("/group");
				}
			}
		}

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		}

	}, [router, outputDone]);

	function useMessage(index: number) {
		const path = usePathname();

		const messages = !failure ? [
			`おっと、${path} で迷子になったようだ。`,
			`　${selection == 0 ? "▷" : "　"}１つ前のページへ戻る`,
			`　${selection == 1 ? "▷" : "　"}ホームへ戻る`,
			`　${selection == 2 ? "▷" : "　"}展示を見る`,
		] : [
			"戻ろうとしたが、前のページが存在しないようだ。",
			`　${selection == 0 ? "▷" : "　"}もう一度試す`,
			`　${selection == 1 ? "▷" : "　"}ホームへ戻る`,
			`　${selection == 2 ? "▷" : "　"}展示を見る`,
		];

		const commands = [];
		commands.push(<p key={0}>{messages[0].substring(0, index)}</p>);
		commands.push(<Fragment key="br0"></Fragment>);

		let lensum = messages[0].length;

		for (let i = 1; i < messages.length; i++) {

			if (index <= lensum) break;

			commands.push(
				<a key={i} onClick={() => router.back()}>
					{messages[i].substring(0, index - lensum)}
				</a>
			);

			commands.push(
				<br key={`br${i}`} />
			);

			lensum += messages[i].length + 2;

		}

		commands.pop();

		if (index >= messages.reduce((a, b) => a + b.length + 2, 0)) {
			setOutputDone(true);
		}

		return (
			<div
				className={styles.message}
			>
				{commands}
			</div>
		);
	}

	function useEnemy() {

		const path = usePathname();

		return (
			<div className={styles.enemy}>
				<h1 style={{ color: "white", fontSize: "64pt" }}>{path}</h1>
			</div>
		)

	}

	return (
		<main>

			<RPGLike
				enemyComponent={useEnemy}
				textBoxComponent={useMessage}
				onUpdate={
					(index, setIndex) => {

						if (timeReset) {
							setIndex(0);
							setTimeReset(false);
						}

					}
				}
			/>

		</main>
	)

}
