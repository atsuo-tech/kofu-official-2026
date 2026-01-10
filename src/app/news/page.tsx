"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Selector from '@/components/selector';
import Link from 'next/link';
import Heading from '@/components/heading';

const SAMPLE_NEWSES: { title: string; date: Date; content: string; }[] = [
	{
		title: "興風祭の開催日が決定しました！！",
		date: new Date("2026-06-01"),
		content: "今年の興風祭は10月3日と10月4日に開催されます。皆様のご来場を心よりお待ちしております！"
	},
	{
		title: "公式ウェブサイトをリニューアルしました",
		date: new Date("2026-05-15"),
		content: "興風祭の公式ウェブサイトが新しくなりました。最新情報やイベント情報をぜひご覧ください。"
	},
];

export default function NewsPage() {

	const [filter, setFilter] = useState(0);

	return (
		<main>
			<Heading>お知らせ</Heading>
			<Selector items={["今年度", "すべて"]} state={[filter, setFilter]} backgrounds={['#3fb312', '#1565c0']} />
			<div className={styles.container}>
				<div className={styles.newsContainer}>
					{
						SAMPLE_NEWSES.map((news, index) => (
							<div key={index} className={styles.newsItem}>
								<h3>{news.title}</h3>
								<p><u>{news.date.toLocaleString("ja-jp")}</u> 更新</p>
								<p>
									{news.content.substring(0, 100)}
									{news.content.length > 100 ? "..." : ""}
								</p>
								<p>
									<Link href={`/news/${index}`} className={styles.readMoreLink}>続きを読む</Link>
								</p>
							</div>
						))
					}
				</div>
			</div>
		</main>
	)

}
