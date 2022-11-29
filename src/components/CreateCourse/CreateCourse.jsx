import React from 'react';

import { CreateCourseMain } from './components/CreateCourseMain';
import { CreateCourseDetails } from './components/CreateCourseDetails';

import './createCourse.css';

const CreateCourse = () => {
	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);
	}
	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='create-course__wrapper'>
				<CreateCourseMain />
				<CreateCourseDetails />
			</form>
		</div>
	);
};

export default CreateCourse;
