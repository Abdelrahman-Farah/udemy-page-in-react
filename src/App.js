import './App.css';
import data from './db.json';

import CourseCard from './components/CourseCard';

function App() {
  let courses = data['courses'].map((course) => {
    return <CourseCard course={course}></CourseCard>
  });

  return (
    <div className="App">
      <h2>{data['header']}</h2>
      <p>{data['description']}</p>
      <button className='explore_button'>Explore Python</button>

      <div className='course-container'>
        {courses}
      </div>
    </div>
  );
}

export default App;
