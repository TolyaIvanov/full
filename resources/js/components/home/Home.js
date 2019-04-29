import React from 'react';

const Home = () => (
	<section className={'home'}>
		<div className="container">
			<div className="home-text">
				<div className="accession">
					<span className="line"></span>
					<p className="title">Let's join us !</p>
				</div>
				<p className={'intro-text'}>We are painting with <br/> artificial intelligence</p>
				<div className="buttons">
					<div className={'buy-now button'}>
						<p>Buy now</p>
					</div>
					<div className={'contact-us button'}>
						<p>Contact us</p>
					</div>
				</div>
				<div className="social-networks">
					<span className="icon"><a href={'https://vk.com/neuroartai'} target={'_blank'}><img src="./images/vk-icon.png"/></a></span>
					<span className="icon"><a href={'http://t.me/neuroartaibot'} target={'_blank'}><img src="./images/tg-icon.png"/></a></span>
					<span className="icon"><a href={'https://www.facebook.com/neuroartai/'} target={'_blank'}><img src="./images/facebook-icon.png"/></a></span>
					<span className="icon"><a href={'https://www.instagram.com/neuroart.ai/'} target={'_blank'}><img src="./images/instagram-icon.png"/></a></span>
				</div>
			</div>
			<div className="home-picture">

			</div>
		</div>
	</section>
);

export default Home;