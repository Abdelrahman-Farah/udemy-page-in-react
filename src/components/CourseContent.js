import React, { useState } from 'react'
import CourseSection from './CourseSection';

function CourseContent(props) {
    const sectionsLength = () => {
        return props['sections'].length;
    }

    const lecturesLength = () => {
        let length = 0;
        for (let section of props.sections) {
            length += section['lectures'].length;
        }
        return length;
    }

    const renderSectionsList = () => {
        const sections = props.sections.slice(0, showedSectionsCounter).map((section) => {
            return <CourseSection section={section}></CourseSection>;
        });
        return sections;
    }

    const [showedSectionsCounter, setShowedSectionsCounter] = useState(Math.min(10, sectionsLength()));
    const seeMoreSections = () => {
        return (
            <div onClick={() => { setShowedSectionsCounter(sectionsLength) }} >
                <button className="more-sections">{sectionsLength() - showedSectionsCounter} more sections</button>
            </div>
        )
    }

    return (
        <section>
            <h2 className="fw-bold mt-4 mb-2">Course Content</h2>

            <span className="ms-1">{sectionsLength(props.sections)} sections </span>
            <span className="ms-3">{lecturesLength(props.sections)} lectures </span>

            <div>{renderSectionsList()}</div>
            {showedSectionsCounter !== sectionsLength() && <>{seeMoreSections()}</>}
        </section>
    )
}

export default CourseContent