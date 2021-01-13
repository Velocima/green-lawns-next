import { useState, useEffect } from 'react';
import style from '../styles/gallery.module.css';
import { galleryImages } from '../infoJs/galleryImages';
import Nav from '../components/nav';
import Footer from '../components/footer';

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

	return (
		<>
			<Nav />
			<section className={style.gallery}>
				{galleryImages.map((image, i) => (
					<div className={style.overflowContainer} key={i}>
						<img src={image.image} alt={image.alt} onClick={handleImageClick} />
						<div className={style.hover}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 0 24 24'
								width='24'
							>
								<path d='M0 0h24v24H0V0z' fill='none' />
								<path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
								<path d='M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z' />
							</svg>
						</div>
					</div>
				))}
				<div
					className={style.modal}
					style={{
						opacity: isModalOpen ? '1' : '0',
						pointerEvents: isModalOpen ? 'all' : 'none',
					}}
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
