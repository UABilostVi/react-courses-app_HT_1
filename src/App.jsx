import './App.css';
import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Header } from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<Courses />
			<CreateCourse />
		</div>
	);
}

export default App;
