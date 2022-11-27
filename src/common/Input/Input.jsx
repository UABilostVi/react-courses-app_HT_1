import React from 'react';

import './input.css';

const Input = (props) => {
	return (
		<label htmlFor={props.id}>
			{props.labelText}
			<input
				onChange={props.onChange}
				style={props.style}
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
			/>
		</label>
	);
};

export default Input;
