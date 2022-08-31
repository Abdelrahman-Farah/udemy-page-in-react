import React from 'react'

function CourseCard(props) {
  return (
    <div className='course-card'>
        <img src={`${props.course['image']}`} alt={`course ${props.course['id']}`}/>
        <h3 className='title'>{props.course['title']}</h3>
        <h4>{props.course['instructors'][0]['name']}</h4>
        <h3 className='price'>${props.course['price']}</h3>
    </div>
  )
}

export default CourseCard