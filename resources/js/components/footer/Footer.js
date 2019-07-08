import React from 'react'

import logoSmall from './../../../images/logo-small.png'

import FacebookLogo from '../../icons/facebookLogo'
import VkLogo from '../../icons/VkLogo'
import TelegramLogo from '../../icons/TelegramLogo'
import InstagramLogo from './../../icons/InstagramLogo'

const Footer = () => (
	<footer className={'footer'}>
		<img className={'logo-small'} src={logoSmall} alt=""/>
		<div className="social-icons">
			<a href="">
				<FacebookLogo
					className={'icon'}
					fill={'#fff'}
				/>
			</a>
			<a href="">
				<VkLogo
					className={'icon'}
					fill={'#fff'}
				/>
			</a>
			<a href="">
				<TelegramLogo
					className={'icon'}
					fill={'#fff'}
				/>
			</a>
			<a href="">
				<InstagramLogo
					className={'icon'}
					fill={'#fff'}
				/>
			</a>
		</div>
	</footer>
);

export default Footer;
