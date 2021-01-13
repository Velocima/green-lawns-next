import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/contact.module.css';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact | Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/favicon.png' />
			</Head>
			<Nav />
			<main className={style.contact}>
				<div className={style.banner}></div>
				<section className={style.contactInfo}>
					<div className=''>
						<h1>BOOK NOW:</h1>
						<a href='tel:01600740111'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 0 24 24'
								width='24'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
							</svg>
							01600 740111
						</a>
						<a href='tel:07815534990'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 0 24 24'
								width='24'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' />
							</svg>
							07815 534990
						</a>
						<a href='mailto:greenlawnskennels@icloud.com'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 0 24 24'
								width='24'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
							</svg>
							greenlawnskennels@icloud.com
						</a>
					</div>
				</section>
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
				<section className={style.tables}>
					<div className={style.table}>
						<table>
							<tbody>
								<tr>
									<th colSpan='2'>OPENING HOURS</th>
								</tr>
								<tr>
									<td>Monday - Friday</td>
									<td>
										9:00am - 11:00am
										<br />
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
					<div className={style.address}>
						<h2>OUT ADDRESS</h2>
						<p>
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
