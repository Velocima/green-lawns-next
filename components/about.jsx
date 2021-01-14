import React, { useRef, useState } from 'react';
import useAnimationPlaystate from '../hooks/useAnimationPlaystate';

import style from '../styles/about.module.css';

export default function About() {
	const imageContainerRef = useRef(null),
		familyTextRef = useRef(null),
		tileOneRef = useRef(null),
		tileTwoRef = useRef(null),
		tileThreeRef = useRef(null),
		tileFourRef = useRef(null),
		tileFiveRef = useRef(null),
		tileSixRef = useRef(null),
		tileTextOneRef = useRef(null),
		tileTextTwoRef = useRef(null),
		tileTextThreeRef = useRef(null);

	const imageContainerPlayState = useAnimationPlaystate(imageContainerRef),
		familyTextPlayState = useAnimationPlaystate(familyTextRef),
		tileOnePlayState = useAnimationPlaystate(tileOneRef),
		tileTwoPlayState = useAnimationPlaystate(tileTwoRef),
		tileThreePlayState = useAnimationPlaystate(tileThreeRef),
		tileFourPlayState = useAnimationPlaystate(tileFourRef),
		tileFivePlayState = useAnimationPlaystate(tileFiveRef),
		tileSixPlayState = useAnimationPlaystate(tileSixRef),
		tileTextOnePlayState = useAnimationPlaystate(tileTextOneRef),
		tileTextTwoPlayState = useAnimationPlaystate(tileTextTwoRef),
		tileTextThreePlayState = useAnimationPlaystate(tileTextThreeRef);

	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const imageOneStyle = {
		animationPlayState: imageContainerPlayState,
		transform: isHovered ? 'rotate(-23deg) translate(-5px, -7px)' : 'rotate(-19deg)',
	};
	const imageTwoStyle = {
		animationPlayState: imageContainerPlayState,
		transform: isHovered ? 'rotate(1deg) translate(3px, -10px) scale(1.05)' : 'rotate(2deg)',
	};
	const imageThreeStyle = {
		animationPlayState: imageContainerPlayState,
		transform: isHovered ? 'rotate(13deg) translate(7px, -5px) scale(1.02)' : 'rotate(11deg)',
	};
	return (
		<section className={style.about}>
			<section className={style.family}>
				<div
					className={style.imageContainer}
					ref={imageContainerRef}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<img src='/images/about/hope.jpg' alt='' style={imageOneStyle} />
					<img src='/images/about/julie.jpg' alt='' style={imageTwoStyle} />
					<img src='/images/about/ted.jpg' alt='' style={imageThreeStyle} />
				</div>
				<p ref={familyTextRef} style={{ animationPlayState: familyTextPlayState }}>
					We are a highly reputable and established boarding kennels offering first class
					care for our guests. We are situated just outside Monmouth within easy reach of
					the M4 and A449. Our Kennels are fully licensed by Monmouthshire County Council
					and Insured by Pet Plan UK Ltd. We pride ourselves in treating each guest as an
					individual and we care with our kindness and attention to detail. We exercise
					our doggies three times a day in our beautiful enclosed paddocks where they can
					socialise with others or, if you prefer can be exercised individually. We
					specialise in anxious or nervous dogs, giving them the extra time to either make
					friends with others or to be relaxed just with us.
				</p>
			</section>
			<section>
				<div className={style.tiles}>
					<div
						className={style.textTile}
						ref={tileOneRef}
						style={{ animationPlayState: tileOnePlayState }}
					>
						<p
							ref={tileTextOneRef}
							style={{ animationPlayState: tileTextOnePlayState }}
						>
							Our Kennels are arranged in two blocks with ten kennels in each. They
							are all heated and temperature checked twice daily. Every kennel has a
							inside cosy house and an outside exercise covered area. All bedding and
							beds are provided but we welcome you to bring yours should you wish.
						</p>
					</div>
					<img
						src='/images/about/tile-one.jpg'
						alt=''
						ref={tileTwoRef}
						style={{ animationPlayState: tileTwoPlayState }}
					/>
					<img
						src='/images/about/tile-three.jpg'
						alt=''
						ref={tileThreeRef}
						style={{ animationPlayState: tileThreePlayState }}
					/>
					<div
						className={style.textTile}
						ref={tileFourRef}
						style={{ animationPlayState: tileFourPlayState }}
					>
						<p
							ref={tileTextTwoRef}
							style={{ animationPlayState: tileTextTwoPlayState }}
						>
							Our top of the range foods include both wet and dry. If your dog
							requires a specific diet, we ask that you provide this for them. Bowls
							are supplied and we offer fresh water in their kennel at all times.
						</p>
					</div>
					<div
						className={style.textTile}
						ref={tileFiveRef}
						style={{ animationPlayState: tileFivePlayState }}
					>
						<p
							ref={tileTextThreeRef}
							style={{ animationPlayState: tileTextThreePlayState }}
						>
							If your doggie requires medication during their stay, we can happily
							administer this. We simply require that you write all the details on the
							medication boxes and we will require you to fill out a quick medical
							form for them.
						</p>
					</div>
					<img
						src='/images/about/tile-two.jpg'
						alt=''
						ref={tileSixRef}
						style={{ animationPlayState: tileSixPlayState }}
					/>
				</div>
			</section>
		</section>
	);
}
