"use client";

import styles from './navbar.module.css';
import { useState } from 'react';
import HappyLink from '../happylink/page';
import { usePathname } from 'next/navigation';

const NAV_LINKS: { name: string; href: string; hoverColor?: string }[] = [
	{ name: 'ホーム', href: '/', hoverColor: '#1565c0' },
	{ name: '興風祭について', href: '/about', hoverColor: '#d32f2f' },
	{ name: 'お知らせ', href: '/news', hoverColor: '#fbc02d' },
	{ name: '展示一覧', href: '/exhibition', hoverColor: '#388e3c' },
	{ name: 'アクセス', href: '/access', hoverColor: '#f57c00' },
];

export default function Navbar() {

	const [humburgerOpen, setHamburgerOpen] = useState(false);
	const pathname = usePathname();

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
			</div>
			<div className={styles.hamburger + (humburgerOpen ? ` ${styles.active}` : '')} onClick={() => setHamburgerOpen(!humburgerOpen)}>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>
		</nav>
	);

}
