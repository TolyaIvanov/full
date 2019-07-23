import React, {memo} from 'react';

const ExampleColumn = memo((props) => (
	<div className="column">
		<p className={'image-styles'}>{props.style}</p>
		<div className="style-image-wrapper">
			<img src={props.firstUri} alt="image"/>
		</div>
		<div className="style-image-wrapper">
			<img src={props.secondUri} alt="image"/>
		</div>
	</div>
));

export default ExampleColumn;
