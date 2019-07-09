import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function LoginLogo({className, fill}) {
	return (
		<Fragment>
			<svg className={className}
			     version="1.1"
			     xmlns="http://www.w3.org/2000/svg"
			     xmlnsXlink="http://www.w3.org/1999/xlink"
			     x="0px" y="0px"
			     viewBox="0 0 258.75 258.75"
			     xmlSpace="preserve">
				<g>
					<circle fill={fill} cx="129.375" cy="60" r="60"/>
					<path fill={fill}
					      d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
				</g>
			</svg>
		</Fragment>

	);
}

LoginLogo.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
};

LoginLogo.defaultProps = {
	className: undefined,
	fill: '#333',
};

export default LoginLogo;