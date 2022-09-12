import React from 'react'
import BuildStars from './BuildStars'

function CourseCard(props) {
  return (
    <div className="course-card pointer-on-hover">
        <img className="course-image" src={props.course['img']} alt={`course ${props.course['id']}`}/>
        <div className="course-title">{props.course['title']}</div>
        <div className="course-instructor">{props.course['instructors'][0]['name']}</div>
        <div className="d-flex">
          <div className="course-card-rating me-2">{props.course['rating']}</div>
          <BuildStars stars={Math.round(props.course['rating'])}></BuildStars>
        </div>
        <div className="course-price">E£ {props.course['price']}</div>
    </div>
  )
}

export default CourseCard