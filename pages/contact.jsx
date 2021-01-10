import Head from 'next/head';
import { useRef, useState, useLayoutEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Contact() {
	const [width, height] = useWindowSize();
	const [animationIsPlaying, setAnimationIsPlaying] = useState({
		openingHours: 'paused',
		address: 'paused',
	});

	const openingHoursRef = useRef(null),
		addressRef = useRef(null);

	useLayoutEffect(() => {
		const topPosition = (element) => element.current.getBoundingClientRect().top;

		const openingHoursPosition = topPosition(openingHoursRef),
			addressPosition = topPosition(addressRef);

		const onScroll = () => {
			const scrollPosition = window.scrollY + height;
			if (
				animationIsPlaying.openingHours !== 'running' &&
				openingHoursPosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, openingHours: 'running' }));
			}
			if (animationIsPlaying.address !== 'running' && addressPosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, address: 'running' }));
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [width, height]);

	return (
		<>
			<Head>
				<title>Contact | Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/green-lawns-logo.png' />
			</Head>
			<Nav />
			<main className='contact'>
				<section className='contact-info'>
					<div className='banner'>
						<h1>Get In Touch</h1>
						<h2>We'd Love to Hear from You!</h2>
					</div>
					<div className='phone-numbers'>
						<p>
							<span className='phone-numbers-header'>Book now via:</span>
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
					</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2468.211355908111!2d-2.7741205!3d51.7840232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871c7a3c31bcd37%3A0x2e3a5debcce221b8!2sGreen%20Lawns%20Boarding%20Kennels!5e0!3m2!1sen!2suk!4v1604681217217!5m2!1sen!2suk'
						width='600'
						height='450'
						frameBorder='0'
						allowFullScreen=''
						aria-hidden='false'
						tabIndex='0'
						title='Google maps'
					></iframe>
					<div className='table-background'></div>
					<table
						ref={openingHoursRef}
						style={{ animationPlayState: animationIsPlaying.openingHours }}
					>
						<tbody>
							<tr>
								<th colSpan='2'>Opening Hours</th>
							</tr>
							<tr>
								<td>Monday - Friday</td>
								<td>
									9:00am - 11:00am
									<br></br>
									2:00pm - 4:00pm
								</td>
							</tr>
							<tr>
								<td>Saturday - Sunday</td>
								<td>9:00am - 11:00am</td>
							</tr>
						</tbody>
					</table>
					<div className='address'>
						<p
							ref={addressRef}
							style={{ animationPlayState: animationIsPlaying.address }}
						>
							<span className='address-header'>Our Address</span>
							<br />
							Green Lawns
							<br />
							Mitchel Troy
							<br />
							Monmouth
							<br />
							NP25 4BX
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
