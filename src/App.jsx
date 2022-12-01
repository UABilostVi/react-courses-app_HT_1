import React, { useState } from 'react';

import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';

import './App.css';

function App() {
	let [isAddCourse, setAddCourse] = useState(false);

	function renderAddCourse() {
		setAddCourse(!isAddCourse);
	}

	return (
		<div>
			<Header />
			{isAddCourse ? (
				<CreateCourse handleAddCourse={renderAddCourse} />
			) : (
				<Courses handleAddCourse={renderAddCourse} />
			)}
		</div>
	);
}

export default App;
