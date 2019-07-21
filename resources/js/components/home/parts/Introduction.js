import React from 'react';

import picturePhoto from "../../../../images/large/picture.png";
import smallPicturePhoto from '../../../../images/small/pictureSmall.png';

import ProgressiveImage from './../../ProgressiveImage'

const Introduction = props => (
	<section className={'home'}>
		<div className="container">
			<div className="home-text">
				<p className={'intro-text'}>We are painting with <br/> artificial intelligence</p>
				<p className={'about-text'}>You can make your own NeuroArt picture using our bots! We have
					3 types of art like Make Art, Style Transfer and Deep Dream. Let’s try
					to create a beautiful picture with artificial intelligence!</p>
				<div className="buttons">
					<div className={'buy-now button'}>
						<p>Buy now</p>
					</div>
					<div className={'contact-us button'}>
						<p>Contact us</p>
					</div>
				</div>
			</div>
			<div className="home-picture">
				<ProgressiveImage
					image={picturePhoto}
					preview={smallPicturePhoto}
					alt={'image'}
				/>
			</div>
		</div>
	</section>
);

export default Introduction;