import { useRef, useState, useEffect } from 'react';
import Review from '../components/review';
import { reviews } from '../infoJs/Reviews';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/testimonies.module.css';
import Head from 'next/head';

export default function Testimonials() {
	return (
		<>
			<Head>
				<title>Testimonies | Green Lawns Boarding Kennels</title>
				<link rel='icon' href='/images/favicon.png' />
			</Head>
			<Nav />
			<main className={style.reviews}>
				{reviews.map((review, i) => (
					<Review
						className={style.review}
						review={review.review}
						author={review.author}
						key={`${i}${review.author}`}
					/>
				))}
			</main>
			<Footer />
		</>
	);
}
