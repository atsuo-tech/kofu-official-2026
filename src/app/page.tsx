import Floormap from "@/components/floormap";
import styles from './page.module.css';

export default function Home() {

	return (
		<main className={styles.main}>
			<header>
				<div className={styles.title}>
					<h1>興風祭 2026</h1>
					<br />
					<span>
						<span>10</span>
						<span>/3</span> <span>Sat.</span>
						<span> ▶▶ </span>
						<span>/4</span> <span>Sun.</span>
					</span>
				</div>
			</header>
			<h2>概要</h2>
			<p>
				興風祭は、早稲田中学校・高等学校の学園祭です。<br />
				2026年度の興風祭は、10/3(土)、10/4(日)に開催されます。<br />
				皆様のご来場を心よりお待ちしております。
			</p>
			<h2>校内案内図</h2>
			<Floormap />
		</main>
	)

}
