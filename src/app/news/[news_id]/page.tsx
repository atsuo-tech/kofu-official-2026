import Heading from "@/components/heading";

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


export default async function NewsDetailPage(
	{
		params
	}: {
		params: Promise<{ news_id: string }>
	}
) {

	const { news_id: id } = await params;

	const numid = parseInt(id, 10);

	if (isNaN(numid) || numid < 0 || numid >= SAMPLE_NEWSES.length) {
		return (
			<main>
				<h1>ニュースが見つかりません</h1>
				<p>指定された ID {numid} のニュースは存在しません。</p>
			</main>
		)
	}

	const news = SAMPLE_NEWSES[numid];

	return (
		<main>
			<Heading>{news.title} | お知らせ</Heading>
			<p>最終更新 {news.date.toLocaleString("ja-jp")}</p>
			<article>
				<p>{news.content}</p>
			</article>
		</main>
	)

}
