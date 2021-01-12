import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';

export default function useAnimationPlaystate(elementRef) {
	const [playState, setPlayState] = useState('paused');
	const [width, height] = useWindowSize();

	useEffect(() => {
		const topPosition = (element) => element.current.getBoundingClientRect().top;
		const elementHeight = topPosition(elementRef);

		const onScroll = () => {
			const scrollPosition = window.scrollY + height;
			if (playState !== 'running' && elementHeight < scrollPosition) {
				setPlayState('running');
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [height]);
	return playState;
}
