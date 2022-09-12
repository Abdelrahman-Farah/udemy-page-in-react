import React from 'react'

import tick from '../assets/tick.svg';

function CourseLearnings(props) {
    const renderLearnItems = () => {
        const learnItems = props['learnings'].map((learnItem) => {
            return (
                <div className="learn-item">
                    <img src={tick} className="tick me-2" alt="tick"></img>
                    <span>{learnItem}</span>
                </div>
            )
        });
        return learnItems;
    }

    return (
        <div className="learn-items-container mt-4">
            <h3 className="fw-bold ms-2 mt-2">What you'll learn</h3>
            <div className="container learnings">{renderLearnItems()}</div>
        </div>
    )
}

export default CourseLearnings