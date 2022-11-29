import React from 'react';

import './button.css';

const Button = (props) => {
	return (
		<button
			className='button'
			style={props.style}
			type={props.type}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
};

export default Button;
