import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AuthorListItem } from './components/AuthorListItem';
import { AddAuthor } from './components/AddAuthor';
import { Duration } from './components/Duration';
import { mockedAuthorsList as authors } from '../../../../constants';

import './createCourseDetails.css';

const CreateCourseDetails = () => {
	let [newAuthorsList, setAuthorsList] = useState(authors);
	let [newCourseAuthorsList, setCourseAuthorsList] = useState([]);

	function addAuthor() {
		let addAuthorInput = document.getElementById('addAuthorInput');
		let newAuthor = { id: uuidv4(), name: addAuthorInput.value };
		setAuthorsList([newAuthor, ...newAuthorsList]);
		authors.push(newAuthor);
	}

	function addCourseAuthor(e) {
		let newId = e.target.closest('.author-item').id;
		let newname = e.target.closest('.author-item').title;
		let newCourseAuthor = { id: newId, name: newname };
		setCourseAuthorsList([newCourseAuthor, ...newCourseAuthorsList]);
		setAuthorsList((prev) =>
			prev.filter((item) => item.id !== newCourseAuthor.id)
		);
	}

	function delCourseAuthor(e) {
		let newId = e.target.closest('.author-item').id;
		let newname = e.target.closest('.author-item').title;
		let newCourseAuthor = { id: newId, name: newname };
		setAuthorsList([newCourseAuthor, ...newAuthorsList]);
		setCourseAuthorsList((prev) =>
			prev.filter((item) => item.id !== newCourseAuthor.id)
		);
	}

	let authorsList = newAuthorsList.map((author) => {
		return (
			<AuthorListItem
				id={author.id}
				key={author.id}
				title={author.name}
				buttonText='Add author'
				name={author.name}
				className='author-item'
				onClick={addCourseAuthor}
			/>
		);
	});

	let courseAuthorsList = newCourseAuthorsList.map((author) => {
		return (
			<AuthorListItem
				id={author.id}
				key={author.id}
				title={author.name}
				buttonText='Del author'
				name={author.name}
				className='author-item'
				onClick={delCourseAuthor}
			/>
		);
	});

	// function getNewList(list) {
	// 	return list.map((author) => {
	// 		return (
	// 			<AuthorListItem
	// 				id={author.id}
	// 				key={author.id}
	// 				title={author.name}
	// 				buttonText='Del author'
	// 				name={author.name}
	// 				className='author-item'
	// 				onClick={delCourseAuthor}
	// 			/>
	// 		);
	// 	});
	// }

	return (
		<div className='create-course__details'>
			<div className='create-course__details-col'>
				<AddAuthor addAuthor={addAuthor} />
				<Duration />
			</div>
			<div className='create-course__details-col'>
				<fieldset className='create-course__authors'>
					<legend className='create-course__details-title'>Authors</legend>
					{authorsList}
				</fieldset>
				<fieldset className='create-course__authors-list'>
					<legend className='create-course__details-title'>
						Course authors
					</legend>
					{courseAuthorsList}
				</fieldset>
			</div>
		</div>
	);
};

export default CreateCourseDetails;
