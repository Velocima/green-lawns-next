import Link from 'next/link';
import { pages } from '../infoJs/pages';

export default function Footer() {
	return (
		<footer>
			<ul>
				<li key='first-item'>Navigate:</li>
				{pages.map((page, i) => (
					<li key={`${i}${page}`}>
						<Link href={page.route}>
							<a>{page.navText}</a>
						</Link>
					</li>
				))}
			</ul>
			<p>
				Our Address:
				<br />
				Green Lawns
				<br />
				Mitchel Troy
				<br />
				Monmouth
				<br />
				NP25 4BX
			</p>
			<p>
				Contact us: <br />
				Telephone:{' '}
				<a href='tel:01600740111'>
					<span>01600 740111</span>
				</a>{' '}
				<br />
				Mobile:{' '}
				<a href='tel:07815534990'>
					<span>07815 534990</span>
				</a>
				<br />
				Email:{' '}
				<a href='mailto:greenlawnskennels@icloud.com'>
					<span className='email'>greenlawnskennels@icloud.com</span>
				</a>
			</p>
			<p>
				Website created by:<br></br>
				Max Hartley
			</p>
		</footer>
	);
}
