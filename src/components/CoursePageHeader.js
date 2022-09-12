import React from 'react'
import lastUpdate from '../assets/new.svg'
import languageWhite from '../assets/language white.svg'
import captions from '../assets/captions.svg'
import BuildStars from './BuildStars'

function CoursePageHeader(props) {
  return (
    <header className="course-header">
      <div className="header-view">
        <div className="course-meta">
          <img src={props.course['img']} className="header-image" alt="thumbnail"></img>
          <h1 className="header-title fw-bold mt-4 mb-2">{props.course['title']}</h1>
          <div className="5 mb-2">{props.course['description']}</div>

          <div className="header-statistics">
            <span className="6 rating">{props.course['rating']}</span>
            <BuildStars stars={Math.round(props.course['rating'])}></BuildStars>
            <span className="6 raters pointer-on-hover">({props.course['totalreviews']} ratings)</span>
            <span className="6 students-number">{props.course['enrollments']} stdents</span>
          </div>

          <div className="my-2">Created by <span className="header-name">{props.course['instructors'][0]['name']}</span></div>

          <div className="d-flex mt-4">
            <div>
              <img className="mid-icon me-1" src={lastUpdate} alt="new" />
              <span>Last updated {props.course['lastupdated']}</span>
            </div>

            <div>
              <img className="mid-icon ms-4 me-1" src={languageWhite} alt="new" />
              <span>English</span></div>

            <div>
              <img className="mid-icon ms-4 me-1" src={captions} alt="new" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default CoursePageHeader