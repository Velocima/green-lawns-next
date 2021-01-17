import { useRef, useState, useEffect } from 'react';
import Review from '../components/review';
import { reviews } from '../infoJs/reviews';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';
import Footer from '../components/footer';
import style from '../styles/testimonies.module.css';
import Head from 'next/head';

export default function Testimonials() {
	return (
		<>
			<Head>
				<title>What Our Customers Have to Say | Green Lawns Reviews</title>
				<link rel='icon' href='/images/favicon.png' />
			</Head>
			<Nav />
			<div className={style.banner}></div>
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
