import Head from 'next/head';
import Link from 'next/link';
import About from '../components/about';

export default function Home() {
	return (
		<>
			<Head>
				<title>Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/green-lawns-logo.png' />
			</Head>
			<main>
				<div className='title-banner'>
					<div className='titles'>
						<h1>Green Lawns Boarding Kennels</h1>
						<h2>Your dog's home away from home</h2>
					</div>
				</div>
				<div className='call-to-action'>
					<Link href='/contact'>
						<a>Book Now</a>
					</Link>
				</div>
				<About />
			</main>
		</>
	);
}