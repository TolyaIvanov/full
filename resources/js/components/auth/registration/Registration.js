import React, {memo} from 'react';

const Registration = memo((props) => {
	return (
		<div className={'registration'}>
			<h2 className={'title'}>Registration</h2>
			<form
				className={'form'}
				onSubmit={props.onSubmit}
			>
				<input
					className={'input'}
					type="text"
					placeholder="Username"
					name="username"
					onChange={(e) => props.onInput('username', e.target.value)}
					value={props.username}
					autoComplete={'off'}
				/>
				{props.errors && (<div className="invalid-feedback">{props.errors.name}</div>)}
				<input
					className={'input'}
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => props.onInput('email', e.target.value)}
					value={props.email}
					autoComplete={'off'}
				/>
				{props.errors && (<div className="invalid-feedback">{props.errors.email}</div>)}
				<input
					className={'input'}
					type="password"
					placeholder="Password"
					name="password"
					onChange={(e) => props.onInput('password', e.target.value)}
					value={props.password}
					autoComplete={'off'}
				/>
				{props.errors && (<div className="invalid-feedback">{props.errors.password}</div>)}
				<input
					className={'input'}
					type="password"
					placeholder="Confirm Password"
					name="c_password"
					onChange={(e) => props.onInput('c_password', e.target.value)}
					value={props.password_confirm}
					autoComplete={'off'}
				/>
				{props.errors && (
					<div className="invalid-feedback">{props.errors.password_confirm}</div>)}
				<button
					className={'submit'}
				>
					Register User
				</button>
			</form>
		</div>
	);
});

export default Registration;