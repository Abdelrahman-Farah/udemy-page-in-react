import React from 'react'
import BuildStars from './BuildStars'

function CourseFeedback(props) {
  const renderStatistics = () => {
    const starsAndBars = props['feedbacks'].map((stars) => {
      return (
        <div className="d-flex justify-content-between align-items-baseline">
          <div className="bars">
            <div className="filled-bar" style={{width: `${stars['percentage']}%`}}></div>
          </div>
          <BuildStars stars={stars['value']}></BuildStars>
          <span>{stars['percentage']}%</span>
        </div>
      );
    });
    return starsAndBars;
  }

  return (
    <>
      <h2 className="fw-bold mt-4 mb-2">Student feedback</h2>
      <div className="feedbacks-details">
        <div>
          <div className="feedback-rating">{props.rating}</div>
          <BuildStars stars={Math.round(props.rating)}></BuildStars>
          <div className="fw-bold mt-2" style={{ color: "#b4690e" }}>Course Rating</div>
        </div>
        <div className="statistics ms-4">{renderStatistics()}</div>
      </div>
    </>
  )
}

export default CourseFeedback