import React from 'react';

import { Input } from '../../../../../../common/Input';
import { Button } from '../../../../../../common/Button';

import './addAuthor.css';

const AddAuthor = (props) => {
	let buttonStyle = {
		margin: '15px auto',
	};

	return (
		<fieldset className='create-course__add-author'>
			<legend className='create-course__details-title'>Add author</legend>
			<Input
				id='addAuthorInput'
				name='authorName'
				labelText='Author name'
				placeholder='Enter author name...'
			/>
			<Button
				onClick={props.addAuthor}
				type='button'
				style={buttonStyle}
				buttonText='Create author'
			/>
		</fieldset>
	);
};

export default AddAuthor;
