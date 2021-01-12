import { useState, useEffect } from 'react';
import style from '../styles/gallery.module.css';
import { galleryImages } from '../infoJs/galleryImages';
import Nav from '../components/nav';

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
					</div>
				))}
				<div
					className={style.modal}
					style={{
						opacity: isModalOpen ? '1' : '0',
						pointerEvents: isModalOpen ? 'all' : 'none',
					}}
				>
					<button onClick={closeModal}>X</button>
					<img src={modalImage.image} alt={modalImage.alt} />
				</div>
			</section>
		</>
	);
}
