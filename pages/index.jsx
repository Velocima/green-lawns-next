import Head from 'next/head';
import Link from 'next/link';
import About from '../components/about';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/index.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Green Lawns Boarding Kennels | Local Dog Boarding & Daycare</title>
				<link rel='icon' href='/images/favicon.png' />
			</Head>
			<Nav />
			<main className={style.main}>
				<section className={style.landing}>
					<div className={style.banner}>
						<div className={style.titles}>
							<h1>Green Lawns Boarding Kennels</h1>
							<h2>Your dog's home away from home</h2>
						</div>
					</div>
					<div className={style.callToAction}>
						<Link href='/contact'>
							<a>
								BOOK NOW
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 0 24 24'
									width='24'
								>
									<path d='M0 0h24v24H0z' fill='none' />
									<path d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z' />
								</svg>
							</a>
						</Link>
					</div>
				</section>
				<About />
			</main>
			<Footer />
		</>
	);
}
