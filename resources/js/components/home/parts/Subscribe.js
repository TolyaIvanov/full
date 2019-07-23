import React, {memo} from 'react';

const Subscribe = memo((props) => (
	<section className={'subscribe'}>
		<h2 className={'subscribe-title'}>don't miss our latest news !</h2>
		<p className={'subscribe-text'}>Subscribe to us for mailing</p>
		<form
			className="send-wrapper"
			onSubmit={props.send}
		>
			<input
				placeholder={'Email'}
				className={'subscribe-email'}
				value={props.value || ''}
				onChange={props.input}
			/>
			<input
				type={'submit'}
				className={'subscribe-submit'}
				value={'subscribe'}
			/>
		</form>
	</section>
));

export default Subscribe