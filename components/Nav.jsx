import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pages } from '../infoJs/pages';
import useWindowSize from '../hooks/useWindowSize';
import style from '../styles/nav.module.css';

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

	const outerLineStyle = { transform: showNav ? 'none' : 'rotate3d(1, 0.5, 1, 360deg)' };
	const middleLineStyle = { transform: showNav ? 'none' : 'rotate3d(1, 0.5, 1, -360deg)' };

	// className={`line ${showNav ? '' : 'line-animated'}`}
	return (
		<nav className={style.nav}>
			<div className={style.overflowContainer}>
				<Link href='/'>
					<a className={style.logo}>
						<img src='../images/green-lawns-logo.png' alt='logo placeholder.' />
						<h4>Green Lawns {width > 1050 && <br></br>}Boarding Kennels</h4>
					</a>
				</Link>
			</div>
			<div className={style.navButton} onClick={handleNavButtonClick}>
				<div className={style.line} style={outerLineStyle}></div>
				<div className={style.line} style={middleLineStyle}></div>
				<div className={style.line} style={outerLineStyle}></div>
			</div>
			<ul
				className={style.links}
				style={{ pointerEvents: width > 1050 ? 'auto' : !showNav ? 'none' : 'auto' }}
			>
				{pages.map((page, i) => (
					<li
						key={`${i}${page}`}
						style={{ transform: `translateX(${showNav ? '0' : '100%'})` }}
					>
						<Link href={page.route} onClick={handleNavButtonClick}>
							<a>{page.navText}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
