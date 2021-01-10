import React, { useState, useEffect } from 'react';
export default function Gallery(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState(props.images[0]);

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
		<section className='gallery'>
			{props.images.map((image, i) => (
				<div className='overflow-container' key={i}>
					<img src={image.image} alt={image.alt} onClick={handleImageClick} />
				</div>
			))}
			<div
				className='modal'
				style={{
					opacity: isModalOpen ? '1' : '0',
					pointerEvents: isModalOpen ? 'all' : 'none',
				}}
			>
				<button onClick={closeModal}>X</button>
				<img src={modalImage.image} alt={modalImage.alt} />
			</div>
		</section>
	);
}
