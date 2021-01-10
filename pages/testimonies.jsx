import { useRef, useState, useLayoutEffect } from 'react';
import Review from '../components/review';
import { reviews } from '../infoJs/Reviews';
import useWindowSize from '../hooks/useWindowSize';
import Nav from '../components/nav';

export default function Testimonials() {
	const [width, height] = useWindowSize();
	const [isVisible, setIsVisible] = useState({
		reviewBanner: false,
		reviewBackground: false,
		review1: false,
		review2: false,
		review3: false,
		review4: false,
		review5: false,
		review6: false,
		review7: false,
		review8: false,
		review9: false,
	});

	const reviewBannerRef = useRef(null),
		reviewBackgroundRef = useRef(null),
		review1Ref = useRef(null),
		review2Ref = useRef(null),
		review3Ref = useRef(null),
		review4Ref = useRef(null),
		review5Ref = useRef(null),
		review6Ref = useRef(null),
		review7Ref = useRef(null),
		review8Ref = useRef(null),
		review9Ref = useRef(null);

	const reviewRefs = [
		review1Ref,
		review2Ref,
		review3Ref,
		review4Ref,
		review5Ref,
		review6Ref,
		review7Ref,
		review8Ref,
		review9Ref,
	];
	useLayoutEffect(() => {
		const topPosition = (element) => element.current.getBoundingClientRect().top;

		const reviewBannerPosition = topPosition(reviewBannerRef),
			reviewBackgroundPosition = topPosition(reviewBackgroundRef),
			review1Position = topPosition(review1Ref),
			review2Position = topPosition(review2Ref),
			review3Position = topPosition(review3Ref),
			review4Position = topPosition(review4Ref),
			review5Position = topPosition(review5Ref),
			review6Position = topPosition(review6Ref),
			review7Position = topPosition(review7Ref),
			review8Position = topPosition(review8Ref),
			review9Position = topPosition(review9Ref);

		const onScroll = () => {
			const scrollPosition = window.scrollY + height;
			if (!isVisible.reviewBanner && reviewBannerPosition < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, reviewBanner: true }));
			}
			if (!isVisible.reviewBackground && reviewBackgroundPosition < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, reviewBackground: true }));
			}
			if (!isVisible.review1 && review1Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review1: true }));
			}
			if (!isVisible.review2 && review2Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review2: true }));
			}
			if (!isVisible.review3 && review3Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review3: true }));
			}
			if (!isVisible.review4 && review4Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review4: true }));
			}
			if (!isVisible.review5 && review5Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review5: true }));
			}
			if (!isVisible.review6 && review6Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review6: true }));
			}
			if (!isVisible.review7 && review7Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review7: true }));
			}
			if (!isVisible.review8 && review8Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review8: true }));
			}
			if (!isVisible.review9 && review9Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review9: true }));
			}
		};
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [width, height]);
	return (
		<>
			<Nav />
			<main className='reviews'>
				<div
					className='reviews-banner'
					ref={reviewBannerRef}
					style={{ animationPlayState: isVisible.reviewBanner ? 'running' : 'paused' }}
				>
					<h2>Testimonies</h2>
				</div>
				<div className='reviews-container'>
					<div
						className='background-shader'
						ref={reviewBackgroundRef}
						style={{
							animationPlayState: isVisible.reviewBackground ? 'running' : 'paused',
						}}
					></div>
					{reviews.map((review, i) => (
						<Review
							className={`review review${i + 1}`}
							review={review.review}
							author={review.author}
							key={`${i}${review.author}`}
							reviewRef={reviewRefs[i]}
							animate={isVisible[`review${i + 1}`]}
						/>
					))}
				</div>
			</main>
		</>
	);
}
