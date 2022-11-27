import React from 'react';
import { Button } from '../../../../common/Button';

import './courseCard.css';

const CourseCard = (props) => {
	function getCourseAuthors() {
		return props.course.authors
			.map((authorId) => {
				return props.authorsList.find(({ id }) => {
					return id === authorId;
				});
			})
			.map((author, index, array) => {
				if (index + 1 === array.length) {
					return <span key={author.id}>{author.name}</span>;
				} else return <span key={author.id}>{author.name}, </span>;
			});
	}

	function getCourseDuration() {
		return new Date(props.course.duration * 60 * 1000)
			.toISOString()
			.substr(11, 5);
	}

	let buttonStyle = {
		display: 'block',
		margin: '15px auto',
	};

	return (
		<div className='course-card'>
			<div className='course-card__info'>
				<h2 className='course-card__title'>{props.course.title}</h2>
				<p className='course-card__desc'>{props.course.description}</p>
			</div>
			<div className='course-card__details'>
				<div className='course-card__authors'>
					<strong>Authors: </strong>
					<div className='course-card__authors-wrapper'>
						{getCourseAuthors()}
					</div>
				</div>
				<div>
					<strong>Duration: </strong>
					{getCourseDuration()} hours
				</div>
				<div>
					<strong>Created: </strong>
					{props.course.creationDate}
				</div>
				<Button style={buttonStyle} buttonText='Show course' />
			</div>
		</div>
	);
};

export default CourseCard;
