import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

import Spinner from 'react-bootstrap/Spinner';
import HomePageHeader from '../components/HomePageHeader';

import { SearchContext } from '../contexts/SearchContext';

function HomePage() {
  let globalSearch = useContext(SearchContext);
  function containsSearch(course) {
    let searchText = globalSearch.globalSearchText.toLowerCase();
    if (course['title'].toLowerCase().includes(searchText)
        || course['description'].toLowerCase().includes(searchText))
        return true;

    for (let instructor of course['instructors']) {
        if (instructor['name'].toLowerCase().includes(searchText))
            return true;
    }
    return false;
  }


  //TODO (error)
  const [trackInfo, setTrackInfo] = useState();
  // const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.npoint.io/ce2c44ae7887d3b7ef24/Python/`)
      .then((response) => response.json())
      .then((json) => {
        setTrackInfo(json);
        setIsLoading(false);
      })
      .catch(() => { });
  }, []);

  const renderCoursesCards = () => {
    const filteredCourses = Object.values(trackInfo['courses']).filter(containsSearch);
    const coursesView = filteredCourses.map((course) => {
      return (
        <Link to={`/udemy-page-in-react/course/${course.id}`}>
          <CourseCard course={course}></CourseCard>
        </Link>
      )
    });
    return coursesView;
  }


  return (
    <>
      <HomePageHeader></HomePageHeader>
      <section className="tracks-section mb-5">
        <h2 className="ms-3">A broad selection of courses</h2>
        <p className="ms-3">Choose from 204,000 online video courses with new additions published every month.</p>

        <ul className="tracks-tabs">
          <li className="track purple-on-hover pointer-on-hover">Python</li>
          <li className="track purple-on-hover pointer-on-hover">Excel</li>
          <li className="track purple-on-hover pointer-on-hover">Web Development</li>
          <li className="track purple-on-hover pointer-on-hover">JavaScript</li>
          <li className="track purple-on-hover pointer-on-hover">Data Science</li>
          <li className="track purple-on-hover pointer-on-hover">AWS Certification</li>
          <li className="track purple-on-hover pointer-on-hover">Drawing</li>
        </ul>

        <div className="track-explore">
          {
            isLoading
              ?
              <div className="spinner">
                <Spinner animation="border" />
              </div>
              :
              <>
                <h3>{trackInfo['header']}</h3>
                <p>{trackInfo['description']}</p>
                <button className="custom-button explore_button">Explore Python</button>

                <div className="courses">
                  {renderCoursesCards()}
                </div>
              </>
          }
        </div>
      </section>
    </>
  )
}

export default HomePage