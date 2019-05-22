import React from 'react';

const ExampleColumn = props => (
	<div>
		<div className="column">
			<p className={'column-title'}>{this.props.title}</p>
			<div className="style-image-wrapper"><img src={this.props.firstUri} alt=""/></div>
			<div className="style-image-wrapper"><img src={this.props.secondUri} alt=""/></div>
		</div>
	</div>
);

export default ExampleColumn;
