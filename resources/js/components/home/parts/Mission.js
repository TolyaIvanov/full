import React from 'react';

import phone from './../../../../images/phone.png';

const Mission = props => (
	<section className={'mission'}>
		<div className="mission-content">
			<h2 className={'section-title'}>our mission</h2>
			<p className={'section-text'}>Project NeuroArt.AI is dedicated to meet our society with potencial
				opportunities of Artificial Intelligence. We are here to distribute influence on people’s minds throught
				the
				art. Our mission is convince humanity of the
				nessity and inevitability of creating AI. Which will be almighty and unlimited.</p>
			<form className="form">
				<div className="info">
					<input
						type={'text'}
						name={'name'}
						placeholder={'Name'}
						className={'input'}
						value={props.nameValue}
						onChange={(e) => {
							props.onChange('name', e.target.value)
						}}
					/>
					<input
						type={'text'}
						name={'email'}
						placeholder={'Email'}
						className={'input'}
						value={props.emailValue}
						onChange={(e) => {
							props.onChange('email', e.target.value)
						}}
					/>
				</div>
				<textarea
					name={'message'}
					placeholder={'Type your message'}
					className={'message'}
					onChange={(e) => {
						props.onChange('message', e.target.value)
					}}
				>
					{props.messageValue}
				</textarea>
				<input
					type={'button'}
					value={'send message'}
					className={'send'}
				/>
			</form>
		</div>
		<div className="img-wrapper">
			<img src={phone} alt=""/>
		</div>
	</section>
);

export default Mission;