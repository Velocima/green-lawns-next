import Head from 'next/head';
import { useRef, useState, useLayoutEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/services.module.css';

export default function Services() {
	const [width, height] = useWindowSize();
	const [animationIsPlaying, setAnimationIsPlaying] = useState({
		pricesTitle: 'paused',
		pricesTable: 'paused',
		doggyDayCare: 'paused',
		infoTitle: 'paused',
		infoList: 'paused',
		openingHours: 'paused',
	});

	const pricesTitleRef = useRef(null),
		pricesTableRef = useRef(null),
		doggyDayCareRef = useRef(null),
		infoTitleRef = useRef(null),
		infoListRef = useRef(null),
		openingHoursRef = useRef(null);

	useLayoutEffect(() => {
		const topPosition = (element) => element.current.getBoundingClientRect().top;

		const pricesTitlePosition = topPosition(pricesTitleRef),
			pricesTablePosition = topPosition(pricesTableRef),
			doggyDayCarePosition = topPosition(doggyDayCareRef),
			infoTitlePosition = topPosition(infoTitleRef),
			infoListPosition = topPosition(infoListRef),
			openingHoursPosition = topPosition(openingHoursRef);

		const onScroll = () => {
			const scrollPosition = window.scrollY + height;

			if (
				animationIsPlaying.pricesTitle !== 'running' &&
				pricesTitlePosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, pricesTitle: 'running' }));
			}
			if (
				animationIsPlaying.pricesTable !== 'running' &&
				pricesTablePosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, pricesTable: 'running' }));
			}
			if (
				animationIsPlaying.doggyDayCare !== 'running' &&
				doggyDayCarePosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, doggyDayCare: 'running' }));
			}
			if (animationIsPlaying.infoTitle !== 'running' && infoTitlePosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, infoTitle: 'running' }));
			}
			if (animationIsPlaying.infoList !== 'running' && infoListPosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, infoList: 'running' }));
			}
			if (
				animationIsPlaying.openingHours !== 'running' &&
				openingHoursPosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, openingHours: 'running' }));
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [width, height]);

	return (
		<>
			<Head>
				<title>Sevices | Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/green-lawns-logo.png' />
			</Head>
			<Nav />
			<main className={style.services}>
				<section className={style.ourServices}>
					<div className={style.imageContainer}>
						<img
							src='/images/good-boy.jpg'
							alt='Ted is one of the families very happy dogs.'
						/>
					</div>
					<div className={style.container}>
						<div className={style.overflowContainer}>
							<h1>Our Services</h1>
						</div>
						<div className={style.overflowContainer}>
							<p>
								We offer single nights or longer stays as well as day boarding for
								our guests. Every dog will have exercise three times per day in our
								lovely paddocks with Meals all included and extra treats in between
								times! Please see our opening times for day nursery.
							</p>
						</div>
					</div>
				</section>
				<section className={style.prices}>
					<h1
						ref={pricesTitleRef}
						style={{ animationPlayState: animationIsPlaying.pricesTitle }}
					>
						Prices
					</h1>
					<table
						className={style.multipleNights}
						ref={pricesTableRef}
						style={{ animationPlayState: animationIsPlaying.pricesTable }}
					>
						<tbody>
							<tr>
								<th colSpan='2'>For Multiple Nights</th>
							</tr>
							<tr>
								<td>1 Dog</td>
								<td>£14 per night</td>
							</tr>
							<tr>
								<td>2 Dogs (small)</td>
								<td>£20 per night</td>
							</tr>
							<tr>
								<td>2 Dogs (medium/large)</td>
								<td>£22 per night</td>
							</tr>
							<tr>
								<td>3 Dogs (small)</td>
								<td>£26 per night</td>
							</tr>
							<tr>
								<td>3 Dogs (medium/large)</td>
								<td>£28 per night</td>
							</tr>
							<tr>
								<th colSpan='2'>For One Night</th>
							</tr>
							<tr>
								<td>1 Dog</td>
								<td>£20</td>
							</tr>
							<tr>
								<td>2 Dogs</td>
								<td>£25</td>
							</tr>
							<tr>
								<td>3 Dogs </td>
								<td>£30</td>
							</tr>
						</tbody>
					</table>
					<p
						className={style.doggyDaycare}
						ref={doggyDayCareRef}
						style={{ animationPlayState: animationIsPlaying.doggyDayCare }}
					>
						<span>Doggy Day Care</span>
						Monday-Friday, 8:30a.m - 5:30pm
						<br />
						1 x dog - £14 per day
						<br />
						2 x dogs - £20 per day
						<br />
						Price includes three walks and mid day meal if required.
					</p>
				</section>
				<section className={style.importantInformation}>
					<h1
						ref={infoTitleRef}
						style={{ animationPlayState: animationIsPlaying.infoTitle }}
					>
						Important Information
					</h1>
					<ul
						ref={infoListRef}
						style={{ animationPlayState: animationIsPlaying.infoList }}
					>
						<li>
							<img src='/images/paw-bullet.png' alt='' />
							<p>
								All guests must be up to date with their vaccinations, including the
								kennel cough vaccine. This vaccine should be done annually with the
								main vaccines, however, please make sure it’s completed at least two
								weeks before entering our Kennels. The certificates should accompany
								the doggies on every visit. Flea and worm treatments should be
								applied regularly however, please take advice from your vet to how
								and when these should be taken.
							</p>
						</li>
						<li>
							<img src='/images/paw-bullet.png' alt='' />
							<p>
								A 20% non refundable or transferable deposit will be applied when
								bookings are taken. The rest is to be paid in full upon collection.
							</p>
						</li>
						<li>
							<img src='/images/paw-bullet.png' alt='' />
							<p>We only accept payments via BACS, cash or cheque.</p>
						</li>
						<li>
							<img src='/images/paw-bullet.png' alt='' />
							<p>
								Another days charge will be added if collection is in the afternoon.
							</p>
						</li>
					</ul>
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
				</section>
			</main>
			<Footer />
		</>
	);
}
