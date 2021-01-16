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
					As a highly reputable and established boarding kennels we offer first class care
					for dogs of all shapes and sizes. Green Lawns Boarding Kennels is situated just
					outside Monmouth within easy reach of the M4 and A449. In keeping with the
					highest practice standards, our business is fully licensed by Monmouthshire
					County Council and Insured by Pet Plan UK Ltd.
					<br />
					<br />
					We pride ourselves in caring for each guest as an individual, paying detailed
					attention to their specific needs. Specialising in caring for anxious or nervous
					dogs, we understand and provide the necessary extra time they need to become
					comfortable with us and to make friends at their own pace. All our guests get
					the chance to play in our lovely paddocks three times a day where they can
					exercise and socialise with other dogs or individually if you’d prefer.
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
							Our Kennels are arranged in two blocks of ten kennels in each. They are
							all heated and the temperature is checked twice daily. Each kennel
							comprises a cosy little house and an external covered exercise area.
							Although comfortable beds and bedding are provided, please feel welcome
							to bring your dog’s own cushion or blanket to help them feel more at
							home.
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
							The top of the range balanced nutrition we offer includes both wet and
							dry varieties. If your dog requires a specific diet, we ask that you
							provide this for them. Bowls are supplied and we ensure fresh water is
							available at all times.
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
							If your dog requires medication during their stay, we are happy to
							administer this. We ask that any specific detailed instructions should
							be written on the medication boxes. You will also have to fill out a
							brief medical form.
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
