import type { Metadata } from "next";
import { Lato, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import styles from './layout.module.css';
import Link from "next/link";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${lato.variable} ${notoSansJp.variable} ${styles.body}`}
      >
        <Navbar />
        {children}
        <footer>
          <div className={styles.footerBackground}></div>
          <h1>2026年度 興風祭</h1>
          <p>
            主催：早稲田中学校・高等学校 学芸大会実行委員会<br />
            このサイトの内容・画像はPCプログラミング部 Web 開発班若しくは各展示団体に帰属します。<br />
            無断転載・複製を禁じます。
          </p>
          <div className={styles.footerLinks}>
            <div>
              <h2>概要</h2>
              <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/about">興風祭について</Link></li>
                <li><Link href="/news">お知らせ</Link></li>
                <li><Link href="/exhibition">展示一覧</Link></li>
                <li><Link href="/access">アクセス</Link></li>
              </ul>
            </div>
            <div>
              <h2>展示</h2>
              <ul>
                <li><Link href="/exhibition#birdseye">ステージ</Link></li>
                <li><Link href="/exhibition#junior">中学棟</Link></li>
                <li><Link href="/exhibition#senior">高校棟</Link></li>
                <li><Link href="/exhibition#kofu">興風館・理科棟</Link></li>
              </ul>
            </div>
            <div>
              <h2>外部リンク</h2>
              <ul>
                <li><Link href="https://www.waseda-h.ed.jp">早稲田中学校・高等学校</Link></li>
                <li><Link href="https://x.com/waseda_kofufes">公式 X（旧 Twitter）</Link></li>
                <li><Link href="https://www.instagram.com/waseda_kofufes/">公式 Instagram</Link></li>
                <li><Link href="https://www.youtube.com/@早稲田中学校高等学校">公式 YouTube</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
