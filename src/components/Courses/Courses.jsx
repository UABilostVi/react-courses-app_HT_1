import React, { useState } from 'react';

import './courses.css';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { Button } from '../../common/Button';

import {
	mockedCoursesList as coursesList,
	mockedAuthorsList as authorsList,
} from '../../constants';

const Courses = () => {
	let [searchText, setSearch] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setSearch(e.target.elements.search.value.toLowerCase());
	}

	function handleChange(e) {
		if (e.target.value === '') {
			setSearch(e.target.value);
		}
	}

	return (
		<div className='container'>
			<div className='courses-nav'>
				<SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
				<Button buttonText='Add new course' />
			</div>
			<div className='courses-list'>
				{coursesList
					.filter((course) => {
						return (
							course.title.toLocaleLowerCase().includes(searchText) ||
							course.id.toLocaleLowerCase().includes(searchText)
						);
					})
					.map((course) => {
						return (
							<CourseCard
								key={course.id}
								course={course}
								authorsList={authorsList}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Courses;
