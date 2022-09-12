import React, { useState } from 'react'

function CourseDescription(props) {
  const [show, setShow] = useState("LESS");
  const toggleShow = () => {
    setShow(show === "LESS" ? "MORE" : "LESS");
  }

  const renderDescription = () => {
    const descriptions = props['description'].map((description) => {
      return <li className="mt-2"><span>{description}</span></li>
    });
    return descriptions;
  }

  const renderStructure = () => {
    if (show === "LESS") {
      return <div className="read-less">
        {renderDescription()}
        <div onClick={toggleShow} className="show-more">Show More</div>
      </div>
    }
    else {
      return <div className="read-more">
        {renderDescription()}
        <div onClick={toggleShow} className="show-less">Show Less</div>
      </div>
    }
  }
  return (
    <section>
      <h2 className="fw-bold mt-4 mb-2">Description</h2>
      <ul>{renderStructure()}</ul>
    </section>
  )
}

export default CourseDescription