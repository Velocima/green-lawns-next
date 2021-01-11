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
				<title>Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/green-lawns-logo.png' />
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
							<a>Book Now</a>
						</Link>
					</div>
				</section>
				<About />
			</main>
			<Footer />
		</>
	);
}
