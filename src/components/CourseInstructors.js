import React, { useState } from 'react'

function Instructor(props) {
    // TODO : ("show more" custom hook?)
    const [show, setShow] = useState("LESS");
    const toggleShow = () => {
        setShow(show === "LESS" ? "MORE" : "LESS");
    }
    const renderStructure = () => {
        if (show === "LESS") {
            return <div className="read-less">
                <p>{props.info['description']}</p>
                <div onClick={toggleShow} className="show-more">Show More</div>
            </div>
        }
        else {
            return <div className="read-more">
                <p>{props.info['description']}</p>
                <div onClick={toggleShow} className="show-less">Show Less</div>
            </div>
        }
    }
    return (
        <div className="mb-4">
            <h4 className="instructor-name">{props.info['name']}</h4>
            <h6 className="text-secondary">{props.info['job']}</h6>
            <div className="d-flex mb-3">
                <img className="instructor-image" src={props.info['img']} alt="instructor" />
                <div className="ms-4">
                    <div>{props.info['rating']} Instructor Rating</div>
                    <div>{props.info['reviews']} Reviews</div>
                    <div>{props.info['students']} Students</div>
                    <div>{props.info['courses']} Courses</div>
                </div>
            </div>
            {renderStructure()}
        </div>
    )
}

function CourseInstructors(props) {
    const renderInstructors = () => {
        const instructors = props['instructors'].map((instructor) => {
            return <Instructor info={instructor}></Instructor>
        });
        return instructors;
    }

    return (
        <>
            <h2 className="fw-bold mt-4 mb-2">Instructors</h2>
            {renderInstructors()}
        </>
    )
}

export default CourseInstructors