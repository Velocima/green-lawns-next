import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pages } from '../infoJs/pages';
import useWindowSize from '../hooks/useWindowSize';
import style from '../styles/nav.module.css';
import { useRouter } from 'next/router';

export default function Nav(props) {
	const [width] = useWindowSize();
	const [showNav, setShowNav] = useState(width < 1050 ? false : true);
	const handleNavButtonClick = () => {
		if (width < 1050) {
			setShowNav((prevState) => !prevState);
		}
	};
	useEffect(() => {
		setShowNav(width < 1050 ? false : true);
	}, [width]);

	const topLineStyle = {
		transform: !showNav ? 'none' : 'rotate(-405deg)',
		top: showNav ? '11px' : 0,
	};
	const middleLineStyle = { transform: !showNav ? 'none' : 'rotate(405deg)' };
	const bottomLineStyle = {
		transform: !showNav ? 'none' : 'rotate(-405deg)',
		top: showNav ? '-11px' : 0,
	};

	const { pathname } = useRouter();

	const tabStyle = {
		backgroundColor:
			pathname === '/'
				? '#d7fbe8'
				: pathname === '/services'
				? '#9df3c4'
				: pathname === '/gallery'
				? '#62d2a2'
				: pathname === '/testimonies'
				? '#1fab89'
				: '#13614d',
	};

	return (
		<nav className={style.nav}>
			<Link href='/'>
				<a className={style.logo}>
					<img
						src='../images/nav/green-lawns-logo.png'
						alt='The logo for Green Lawns Boarding Kennels.'
					/>
				</a>
			</Link>
			<div className={style.navButton} onClick={handleNavButtonClick}>
				<div className={style.line} style={topLineStyle}></div>
				<div className={style.line} style={middleLineStyle}></div>
				<div className={style.line} style={bottomLineStyle}></div>
			</div>
			<ul
				className={style.links}
				style={{ pointerEvents: width > 1050 ? 'auto' : !showNav ? 'none' : 'auto' }}
			>
				{pages.map((page, i) => (
					<li key={`${i}${page}`} style={{ opacity: showNav ? 1 : 0 }}>
						<Link href={page.route} onClick={handleNavButtonClick}>
							<a>{page.navText}</a>
						</Link>
					</li>
				))}
			</ul>
			<div className={style.tab} style={tabStyle}></div>
		</nav>
	);
}
