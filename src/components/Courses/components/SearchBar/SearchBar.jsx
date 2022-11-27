import React from 'react';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';

import './searchBar.css';

const SearchBar = (props) => {
	let buttonStyle = {
		marginLeft: '15px',
	};

	let inputStyle = {
		padding: '5px',
	};

	return (
		<form className='search-wapper' onSubmit={props.handleSubmit}>
			<Input
				onChange={props.handleChange}
				style={inputStyle}
				type='text'
				id='search'
				placeholder='Enter course name...'
			/>
			<Button type='submit' style={buttonStyle} buttonText='Search' />
		</form>
	);
};

export default SearchBar;
