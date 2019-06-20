import React from 'react';

const ExampleColumn = props => (
	<div className="column">
		<p className={'image-styles'}>{props.style}</p>
		<div className="style-image-wrapper">
			<img src={props.firstUri} alt=""/>
		</div>
		<div className="style-image-wrapper">
			<img src={props.secondUri} alt=""/>
		</div>
	</div>
);

export default ExampleColumn;
