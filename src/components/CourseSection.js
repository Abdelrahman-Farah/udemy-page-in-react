import React, { useState, useRef } from 'react'
import Collapse from 'react-bootstrap/Collapse';

import RenderLecture from './RenderLecture';

import expand from '../assets/expand.svg'


function CourseSection(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef(null); //TODO (is it required?)

    const expandAndCollapse = () => {
        setIsExpanded((old) => !old);
    }

    function renderLectures() {
        const lectures = props.section['lectures'].map((lecture) => {
            return <RenderLecture lecture={lecture}></RenderLecture>
        });
        return lectures;
    }

    return (
        <>
            <div ref={sectionRef} onClick={expandAndCollapse} className="course-section pointer-on-hover">
                <div className="d-flex align-items-center">
                    <img src={expand} className="small-icon me-3" alt="expand"></img>
                    <h6 className="fw-bold m-0 me-2">{props.section['title']}</h6>
                </div>
                <span className="lectures-counter">{props.section['lectures'].length} lectures</span>
            </div>

            {/* Laggy animation happens when the child of "collapse" has padding (so the child must be wrapped)*/}
            <Collapse in={isExpanded} timeout={1000}>
                <div>
                    <div className="course-section-expanded">
                        <div>
                        {renderLectures()}
                        </div>

                    </div>
                </div>
            </Collapse>
        </>
    )
}

export default CourseSection