import React from 'react';

import ExamplesPhotoCols from '../../../containers/examples/ExampleColumnContainer'

const Examples = props => (
	<section className={'examples'}>
		<div className="examples-text">
			<h3 className={'examples-title'}>examples</h3>
			<p className={'examples-description'}>Choose one of the several types of NeuroArt.AI. We have 3 types
				like Make Art, Style Transfer and Deep Dream. Let’s see some examples.</p>
		</div>
		<div className="styles">
			<ExamplesPhotoCols/>
		</div>
	</section>
);

export default Examples;