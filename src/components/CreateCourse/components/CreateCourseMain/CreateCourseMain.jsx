import React from 'react';

import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';

import './createCourseMain.css';

const CreateCourseMain = () => {
	return (
		<div className='create-course__main'>
			<div className='create-course__title-holder create-course__main-item'>
				<Input
					name='title'
					labelText='Title'
					type='text'
					placeholder='Enter title...'
					required={true}
					minLength={2}
				/>
				<Button buttonText='Create course' type='submit' />
			</div>
			<div className='create-course__main-item'>
				<textarea
					name='description'
					className='create-course__desc'
					placeholder='Enter description'
					rows='5'
					required={true}
					minLength={2}
				></textarea>
			</div>
		</div>
	);
};

export default CreateCourseMain;
