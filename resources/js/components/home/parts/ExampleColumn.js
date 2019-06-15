import React from 'react';

const ExampleColumn = props => (
	<div>
		<div className="column">
			<p className={'image-styles'}>{props.style}</p>
			<div className="style-image-wrapper">
				<img src={props.firstUri} alt=""/>
			</div>
			<div className="under-image">
				<p className={'image-description'}>{props.description}</p>
			</div>
		</div>
	</div>
);

export default ExampleColumn;
