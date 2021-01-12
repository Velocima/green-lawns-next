import React, { useRef, useState, useEffect } from 'react';
import useAnimationPlayState from '../hooks/useAnimationPlayState';

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

	const imageContainerPlayState = useAnimationPlayState(imageContainerRef),
		familyTextPlayState = useAnimationPlayState(familyTextRef),
		tileOnePlayState = useAnimationPlayState(tileOneRef),
		tileTwoPlayState = useAnimationPlayState(tileTwoRef),
		tileThreePlayState = useAnimationPlayState(tileThreeRef),
		tileFourPlayState = useAnimationPlayState(tileFourRef),
		tileFivePlayState = useAnimationPlayState(tileFiveRef),
		tileSixPlayState = useAnimationPlayState(tileSixRef),
		tileTextOnePlayState = useAnimationPlayState(tileTextOneRef),
		tileTextTwoPlayState = useAnimationPlayState(tileTextTwoRef),
		tileTextThreePlayState = useAnimationPlayState(tileTextThreeRef);

	return (
		<section className={style.about}>
			<section className={style.family}>
				<div className={style.imageContainer} ref={imageContainerRef}>
					<img
						src='/images/about/hope.png'
						alt=''
						style={{ animationPlayState: imageContainerPlayState }}
					/>
					<img
						src='/images/about/julie.png'
						alt=''
						style={{ animationPlayState: imageContainerPlayState }}
					/>
					<img
						src='/images/about/ted.png'
						alt=''
						style={{ animationPlayState: imageContainerPlayState }}
					/>
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
						src='/images/about/dog-placeholder-1.jpg'
						alt=''
						ref={tileTwoRef}
						style={{ animationPlayState: tileTwoPlayState }}
					/>
					<img
						src='/images/about/dog-placeholder-3.jpg'
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
						src='/images/about/dog-placeholder-2.jpg'
						alt=''
						ref={tileSixRef}
						style={{ animationPlayState: tileSixPlayState }}
					/>
				</div>
			</section>
		</section>
	);
}
