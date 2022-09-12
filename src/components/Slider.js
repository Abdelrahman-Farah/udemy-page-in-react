import React from 'react'
import star from '../assets/star.svg'

function Slider(props) {
  return (
    <div className="slider">
      <h6 className="fw-bold mb-0">{props.course['title']}</h6>

      <span className="fs-14px rating">{props.course['rating']}</span>
      <img src={star} className="small-icon star" alt="star" />
      <span className="fs-14px raters pointer-on-hover">({props.course['totalreviews']} ratings)</span>
      <span className="fs-14px ">{props.course['enrollments']} stdents</span>
    </div>
  )
}

export default Slider