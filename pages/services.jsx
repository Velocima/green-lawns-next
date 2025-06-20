import Head from 'next/head';
import { useRef } from 'react';
import useAnimationPlaystate from '../hooks/useAnimationPlaystate';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/services.module.css';

export default function Services() {
	const pricesTitleRef = useRef(null),
		infoTitleRef = useRef(null),
		pricesSVGRef = useRef(null),
		infoSVGRef = useRef(null),
		pricesTableRef = useRef(null),
		doggyDaycareRef = useRef(null),
		infoTableRef = useRef(null),
		infoListRef = useRef(null);

	const pricesTitlePlaystate = useAnimationPlaystate(pricesTitleRef),
		infoTitlePlaystate = useAnimationPlaystate(infoTitleRef),
		pricesSVGPlaystate = useAnimationPlaystate(pricesSVGRef),
		infoSVGPlaystate = useAnimationPlaystate(infoSVGRef),
		pricesTablePlaystate = useAnimationPlaystate(pricesTableRef),
		doggyDaycarePlaystate = useAnimationPlaystate(doggyDaycareRef),
		infoTablePlaystate = useAnimationPlaystate(infoTableRef),
		infoListPlaystate = useAnimationPlaystate(infoListRef);
	return (
		<>
			<Head>
				<title>Our Services, Pricing and Opening Hours | Green Lawns</title>
				<link rel='icon' href='/images/favicon.png' />
				<meta
					name='description'
					content='Important information to help you book with us. Find our prices, opening hours and everything you need to know ready for your dog’s stay with us.'
				/>
			</Head>
			<Nav />
			<main className={style.main}>
				<div className={style.paragraph}>
					<div className={style.imageContainer}>
						<img
							src='/images/services/good-boy.jpg'
							alt='Ted is one of the families very happy dogs.'
						/>
					</div>
					<p>
						At Green Lawns Boarding Kennels we offer day boarding, single nights or longer stays to
						suit your needs.
						<br />
						<br />
						All meals and treats are included and every dog gets to exercise three times per day in
						the safety of our paddocks.
					</p>
				</div>
				<div className={style.info}>
					<section className={style.prices}>
						<h1 ref={pricesTitleRef} style={{ animationPlayState: pricesTitlePlaystate }}>
							PRICES
						</h1>
						<div
							className={style.tableContainer}
							ref={pricesTableRef}
							style={{ animationPlayState: pricesTablePlaystate }}
						>
							<div className={style.svgContainer}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 0 24 24'
									width='24'
									ref={pricesSVGRef}
									style={{ animationPlayState: pricesSVGPlaystate }}
								>
									<path d='M0 0h24v24H0z' fill='none' />
									<path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' />
								</svg>
							</div>
							<table>
								<tbody>
									<tr>
										<th colSpan='2'>
											OVERNIGHT STAYS
											<sup>
												<small>*</small>
											</sup>
										</th>
									</tr>
									<tr>
										<td>1 Dog</td>
										<td>£21 per night</td>
									</tr>
									<tr>
										<td>2 Dogs (small)</td>
										<td>£28.50 per night</td>
									</tr>
									<tr>
										<td>2 Dogs (medium/large)</td>
										<td>£30.50 per night</td>
									</tr>
									<tr>
										<td>3 Dogs (small)</td>
										<td>£34.50 per night</td>
									</tr>
									<tr>
										<td>3 Dogs (medium/large)</td>
										<td>£36.50 per night</td>
									</tr>
								</tbody>
							</table>
							<sub>
								<em>*Two nights minimum charge</em>
							</sub>
						</div>
						<div
							className={style.doggyDaycare}
							ref={doggyDaycareRef}
							style={{ animationPlayState: doggyDaycarePlaystate }}
						>
							<h2>DOGGY DAY CARE</h2>
							<p>
								Monday-Friday, 8:30a.m - 5:30pm
								<br />
								1 x dog - £16 per day
								<br />
								2 x dogs - £22 per day
								<br />
								Price includes three walks and mid day meal if required.
							</p>
						</div>
					</section>
					<section className={style.importantInformation}>
						<h1 ref={infoTitleRef} style={{ animationPlayState: infoTitlePlaystate }}>
							IMPORTANT
							<br />
							INFORMATION
						</h1>
						<div
							className={style.tableContainer}
							ref={infoTableRef}
							style={{ animationPlayState: infoTablePlaystate }}
						>
							<div
								className={style.svgContainer}
								ref={infoSVGRef}
								style={{ animationPlayState: infoSVGPlaystate }}
							>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' />
								</svg>
							</div>
							<table>
								<tbody>
									<tr>
										<th colSpan='2'>OPENING HOURS</th>
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
						</div>
						<ul ref={infoListRef} style={{ animationPlayState: infoListPlaystate }}>
							<li>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<circle cx='4.5' cy='9.5' r='2.5' />
									<circle cx='9' cy='5.5' r='2.5' />
									<circle cx='15' cy='5.5' r='2.5' />
									<circle cx='19.5' cy='9.5' r='2.5' />
									<path d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' />
								</svg>
								<p>
									All guests must be up to date with their vaccinations, including the kennel cough
									vaccine. This vaccine should be done annually with the main vaccines. However,
									please make sure it is completed at least two weeks before entering our kennels.
									Relevant certificates should accompany your dog(s) on every visit. Flea and worm
									treatments should be administered regularly. Please take advice from your vet as
									to how and when these should be administered.
								</p>
							</li>
							<li>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<circle cx='4.5' cy='9.5' r='2.5' />
									<circle cx='9' cy='5.5' r='2.5' />
									<circle cx='15' cy='5.5' r='2.5' />
									<circle cx='19.5' cy='9.5' r='2.5' />
									<path d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' />
								</svg>
								<p>
									A 20% non-refundable or transferable deposit will be collected at the time of
									booking. The rest will be due in full upon collection.
								</p>
							</li>
							<li>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<circle cx='4.5' cy='9.5' r='2.5' />
									<circle cx='9' cy='5.5' r='2.5' />
									<circle cx='15' cy='5.5' r='2.5' />
									<circle cx='19.5' cy='9.5' r='2.5' />
									<path d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' />
								</svg>
								<p>We only accept payments via BACS, cash or cheque.</p>
							</li>
							<li>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<circle cx='4.5' cy='9.5' r='2.5' />
									<circle cx='9' cy='5.5' r='2.5' />
									<circle cx='15' cy='5.5' r='2.5' />
									<circle cx='19.5' cy='9.5' r='2.5' />
									<path d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' />
								</svg>
								<p>
									Another day’s charge will be added if collection takes place in the afternoon.
								</p>
							</li>
							<li>
								<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'>
									<path d='M0 0h24v24H0z' fill='none' />
									<circle cx='4.5' cy='9.5' r='2.5' />
									<circle cx='9' cy='5.5' r='2.5' />
									<circle cx='15' cy='5.5' r='2.5' />
									<circle cx='19.5' cy='9.5' r='2.5' />
									<path d='M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z' />
								</svg>
								<p>All prices are subject to VAT.</p>
							</li>
						</ul>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
