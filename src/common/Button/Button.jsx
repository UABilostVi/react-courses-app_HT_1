import React from 'react';

import './button.css';

export const Button = (props) => (
	<button className='button' style={props.style} type={props.type}>
		{props.buttonText}
	</button>
);
