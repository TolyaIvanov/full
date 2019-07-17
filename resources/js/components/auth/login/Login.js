import React from 'react';
import {Link} from "react-router-dom";

const Login = (props) => {
	return (
		<div className={'login'}>
			<p className={'login-or-reg'}>
				<span className={'title'}>Login </span>
				or{' '}
				<Link className={'link-to-reg'} to={'/registration'}>
					sign up
				</Link>
			</p>
			<form
				className={'form'}
				onSubmit={props.onSubmit}
			>
				<input
					className={'input'}
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => props.onInput('login_email', e.target.value)}
					value={props.email || ''}
					autoComplete={'off'}
				/>
				{props.errors && (<div className="invalid-feedback">{props.errors.login_email}</div>)}
				<input
					className={'input'}
					type="password"
					placeholder="Password"
					name="password"
					onChange={(e) => props.onInput('login_password', e.target.value)}
					value={props.password || ''}
					autoComplete={'off'}
				/>
				{props.errors && (
					<div className="invalid-feedback">{props.errors.login_password}</div>)}
				<button
					className={'submit'}
				>
					Login User
				</button>
			</form>
		</div>
	);
};

export default Login;