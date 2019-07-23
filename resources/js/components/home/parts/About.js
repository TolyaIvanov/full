import React, {memo} from 'react';
import {Link} from "react-router-dom";

import about from '../../../../images/large/about.png';
import aboutSmall from '../../../../images/small/aboutSmall.png'

import ProgressiveImage from './../../ProgressiveImage'


const About = memo((props) => (
	<section className={'about'}>
		<h2 className={'section-title'}>about us</h2>
		<p className={'section-text'}>Enjoy contemporary AI art. Be original. {"\n"}
			The NeuroArt.ai service provides the ability to create {"\n"}
			paintings using Artificial Intelligence algorithms!</p>

		<div className="content">
			<div className="about-photo">
				<ProgressiveImage
					image={about}
					preview={aboutSmall}
					alt={'image'}
				/>
			</div>
			<div className="content-main">
				<h2 className={'section-title'}>You can either create a new
					painted art or
					process your own photo</h2>
				<p className={'section-text'}>The NeuroArt service provides the ability to creat paintings using
					Artificial Intelligence algorithms !
					You always get a unique and original result ! We can print a picture for you on almost anything
					(paper, canvas, cloth, mugs, clothes)! We will find a way to fulfill an order anywhere in the world.
					Rest assured!</p>
				<div className="buttons">
					<Link className={'button example'} to={'/gallery'}>see examples</Link>
					<a className={'button order'} rel="noreferrer" href="http://t.me/neuroartaibot" target="_blank">buy
						now</a>
				</div>
			</div>
		</div>
	</section>
));

export default About;