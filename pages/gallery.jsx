import { useState, useEffect } from 'react';
import style from '../styles/gallery.module.css';
import { galleryImages } from '../infoJs/galleryImages';
import Nav from '../components/nav';
import Footer from '../components/footer';
import GalleryImage from '../components/galleryImage';
import Head from 'next/head';

export default function Gallery(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState(galleryImages[0]);

	const handleImageClick = ({ target }) => {
		setIsModalOpen(true);
		setModalImage({ image: target.src, alt: target.alt });
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const handleEscape = ({ key }) => {
			if (key === 'Escape') {
				setIsModalOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [isModalOpen]);
	const handleModalWhiteSpaceClick = ({ target }) => {
		if (target.nodeName === 'DIV') {
			setIsModalOpen(false);
		}
	};
	return (
		<>
			<Head>
				<title>Cute Photos Of Our Favourite Doggy Guests</title>
				<link rel='icon' href='/images/favicon.png' />
				<meta
					name='description'
					content='View our pictures of cute and adorable dogs! A photo gallery of dogs we’ve had to stay with us.'
				/>
			</Head>
			<Nav />
			<section className={style.gallery}>
				{galleryImages.map((image, i) => (
					<GalleryImage
						image={image.image}
						alt={image.alt}
						index={i}
						onClick={handleImageClick}
						key={i}
					/>
				))}
				<div
					className={style.modal}
					style={{
						opacity: isModalOpen ? '1' : '0',
						pointerEvents: isModalOpen ? 'all' : 'none',
					}}
					id='modal'
					onClick={handleModalWhiteSpaceClick}
				>
					<svg
						onClick={closeModal}
						id='Outlined'
						viewBox='0 0 32 32'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title />
						<g id='Fill'>
							<polygon points='28.71 4.71 27.29 3.29 16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29 4.71 28.71 16 17.41 27.29 28.71 28.71 27.29 17.41 16 28.71 4.71' />
						</g>
					</svg>
					<img src={modalImage.image} alt={modalImage.alt} />
				</div>
			</section>
			<Footer />
		</>
	);
}
