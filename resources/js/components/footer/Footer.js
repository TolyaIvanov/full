import React, {memo} from 'react'

import logoSmall from '../../../images/large/logo-small.png'

import FacebookLogo from '../../icons/facebookLogo'
import VkLogo from '../../icons/VkLogo'
import TelegramLogo from '../../icons/TelegramLogo'
import InstagramLogo from './../../icons/InstagramLogo'

const Footer = memo(() => (
	<footer className={'footer'}>
		<img className={'logo-small'} src={logoSmall} alt="logo"/>
		<div className="social-icons">
			<a href="https://www.facebook.com/neuroartai" rel="noreferrer">
				<FacebookLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="https://vk.com/neuroartai" rel="noreferrer">
				<VkLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="http://t.me/neuroartai" rel="noreferrer">
				<TelegramLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
			<a href="https://www.instagram.com/neuroart.ai/" rel="noreferrer">
				<InstagramLogo
					className={'icon'}
					fill={'#7c7c7c'}
				/>
			</a>
		</div>
	</footer>
));

export default Footer;
