import React from 'react';

export default function Review(props) {
	return (
		<div
			className={props.className}
			ref={props.reviewRef}
			style={{
				animationPlayState: props.animate ? 'running' : 'paused',
				gridRowStart: props.gridRowStart,
				gridRowEnd: props.gridRowStart + 1,
			}}
		>
			<p>{props.review}</p>
			<p>{` - ${props.author}`}</p>
		</div>
	);
}
