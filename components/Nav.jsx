import Link from 'next/link';
import { useState, useEffect } from 'react';
import { pages } from '../infoJs/pages';
import useWindowSize from '../hooks/useWindowSize';

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

	return (
		<nav>
			<div className='overflow-container'>
				<Link href='/' className='logo'>
					<a>
						<img src='../images/green-lawns-logo.png' alt='logo placeholder.' />
						<h4>Green Lawns {width > 1050 && <br></br>}Boarding Kennels</h4>
					</a>
				</Link>
			</div>
			<div className='nav-button' onClick={handleNavButtonClick}>
				<div className={`line ${showNav ? '' : 'line-animated'}`}></div>
				<div className={`line ${showNav ? '' : 'middle-line-animated'}`}></div>
				<div className={`line ${showNav ? '' : 'line-animated'}`}></div>
			</div>
			<ul style={{ pointerEvents: width > 1050 ? 'auto' : !showNav ? 'none' : 'auto' }}>
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
