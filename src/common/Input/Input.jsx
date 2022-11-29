import React from 'react';

import './input.css';

const Input = (props) => {
	return (
		<label htmlFor={props.id}>
			{props.labelText}
			<input
				name={props.name}
				onChange={props.onChange}
				style={props.style}
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				required={props.required}
				min={props.min}
			/>
		</label>
	);
};

export default Input;
