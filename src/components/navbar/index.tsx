"use client";

import styles from './navbar.module.css';
import { useState } from 'react';
import HappyLink from '../happylink/page';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/theme/context';
import { Theme, THEME_ICONS, THEME_NAMES } from '@/theme';
import { InvertColors } from '@mui/icons-material';

const NAV_LINKS: { name: string; href: string; hoverColor?: string }[] = [
	{ name: 'ホーム', href: '/' },
	{ name: '興風祭について', href: '/about' },
	{ name: 'お知らせ', href: '/news' },
	{ name: '展示一覧', href: '/exhibition' },
	{ name: 'アクセス', href: '/access' },
];

export default function Navbar() {

	const [humburgerOpen, setHamburgerOpen] = useState(false);
	const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);

	const pathname = usePathname();

	const { theme, setTheme } = useTheme();

	return (
		<nav className={styles.header}>
			<div className={styles.title}>2026年度 興風祭</div>
			<div className={styles.links + (humburgerOpen ? ` ${styles.active}` : '')}>
				{NAV_LINKS.map((link) => (
					<HappyLink
						key={link.href}
						href={link.href}
						onClick={() => setHamburgerOpen(false)}
						hovercolor={link.hoverColor}
						className={styles.link}
						aria-current={pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'page' : undefined}
					>
						{link.name}
					</HappyLink>
				))}
				<div className={styles.themeSelectorContainer}>
					<button
						onClick={() => {
							setThemeSelectorOpen(!themeSelectorOpen);
						}}
						className={styles.themeToggleButton}
					>
						<InvertColors />
					</button>
					<div
						className={styles.themeSelector + (themeSelectorOpen ? ` ${styles.active}` : '')}
					>
						{
							Object.values(Theme).map((t) => (
								<button
									key={t}
									onClick={() => {
										setTheme(t);
										setThemeSelectorOpen(false);
									}}
									className={theme === t ? styles.active : ''}
								>
									{THEME_ICONS[t]} <span>{THEME_NAMES[t]}</span>
								</button>
							))
						}
					</div>
				</div>
			</div>
			<div className={styles.hamburger + (humburgerOpen ? ` ${styles.active}` : '')} onClick={() => setHamburgerOpen(!humburgerOpen)}>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>
		</nav>
	);

}
