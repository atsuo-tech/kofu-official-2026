import { Lato, Noto_Sans_JP } from "next/font/google";
import Navbar from "@/components/navbar";
import Link from "next/link";
import ThemeProvider from "@/theme/context";
import React from "react";
import { cookies } from "next/headers";
import { Theme } from "@/theme";

import "./globals.css";
import "@/theme/light";
import "@/theme/dark";

import styles from './layout.module.css';
import PageTransition from "@/components/page-transition";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();

  const initialTheme = cookieStore.get('theme')?.value === 'dark' ? Theme.DARK : Theme.LIGHT;

  return (
    <html lang="ja" data-theme={initialTheme}>
      <body
        className={`${lato.variable} ${notoSansJp.variable} ${styles.body}`}
      >
        <ThemeProvider
          initialTheme={initialTheme}
        >
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <footer>
            <div className={styles.footerBackground}></div>
            <h2><span>2026年度</span> <wbr /><span>興風祭</span></h2>
            <p>
              早稲田中学校・高等学校 学芸大会実行委員会<br />
              無断転載・複製を禁じます。<br />
              <Link href="/copyright">著作権について</Link>
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
                  <li><Link scroll href="/exhibition#kofu">興風館・理科棟</Link></li>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
