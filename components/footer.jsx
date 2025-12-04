import Link from 'next/link';
import { pages } from '../infoJs/pages';
import style from '../styles/footer.module.css';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<ul>
				{pages.map((page, i) => (
					<li key={`${i}${page}`}>
						<Link href={page.route}>
							<a>{page.navText}</a>
						</Link>
					</li>
				))}
			</ul>
			<p>
				OUR ADDRESS:
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
				CONTACT US: <br />
				TELEPHONE:{' '}
				<a href='tel:01600740111'>
					<span>01600 740111</span>
				</a>{' '}
				<br />
				MOBILE:{' '}
				<a href='tel:07815534990'>
					<span>07980 728975</span>
				</a>
				<br />
				EMAIL:{' '}
				<a href='mailto:greenlawnskennels@yahoo.com'>
					<span className={style.email}>greenlawnskennels@yahoo.com</span>
				</a>
			</p>
			<p>
				Website created by:<br></br>
				<a href='mailto:hartley.max@outlook.com'>Max Hartley</a>
			</p>
		</footer>
	);
}
