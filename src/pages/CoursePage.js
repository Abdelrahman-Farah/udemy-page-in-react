import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CourseContent from '../components/CourseContent';
import CourseDescription from '../components/CourseDescription';
import CourseFeedback from '../components/CourseFeedback';
import CourseInstructors from '../components/CourseInstructors';
import CourseRequirements from '../components/CourseRequirements';
import CourseReviews from '../components/CourseReviews';
import Slider from '../components/Slider';
import CoursePageHeader from '../components/CoursePageHeader';
import SideBar from '../components/SideBar';
import '../modules/CoursePageStyles.css';
import CourseLearnings from '../components/CourseLearnings';

function CoursePage() {
  const { courseId } = useParams();

  //TODO (error)
  const [course, setCourse] = useState();
  // const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.npoint.io/ce2c44ae7887d3b7ef24/Python/courses/${courseId}`)
      .then((response) => response.json())
      .then((json) => {
        setCourse(json);
        setIsLoading(false);
      })
      .catch(() => { });
  }, [courseId]);


  return (
    <>
      {
        isLoading
          ?
          <div className="spinner">
            <Spinner animation="border" />
          </div>
          :
          <div className="lift-main-up">
            <Slider course={course}></Slider>

            <CoursePageHeader course={course}></CoursePageHeader>
            <main className="d-flex justify-content-between">
              <div className="course-main-details">
                <CourseLearnings learnings={course['learnitems']}></CourseLearnings>
                <CourseContent sections={course['sections']}></CourseContent>
                <CourseRequirements requirements={course['requirements']}></CourseRequirements>
                <CourseDescription description={course['descriptions']}></CourseDescription>
                <CourseInstructors instructors={course['instructors']}></CourseInstructors>
                <CourseFeedback feedbacks={course['feedbacks']} rating={course['rating']}></CourseFeedback>
                <CourseReviews reviews={course['reviewers']}></CourseReviews>
              </div>

              <SideBar course={course}></SideBar>
            </main>
          </div>
      }
    </>
  )
}

export default CoursePage