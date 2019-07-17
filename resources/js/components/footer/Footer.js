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
			<a href="https://www.facebook.com/neuroartai" rel={'nofollow'}>
				<FacebookLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="https://vk.com/neuroartai" rel={'nofollow'}>
				<VkLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="http://t.me/neuroartai" rel={'nofollow'}>
				<TelegramLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="https://www.instagram.com/neuroart.ai/" rel={'nofollow'}>
				<InstagramLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
		</div>
	</footer>
);

export default Footer;
