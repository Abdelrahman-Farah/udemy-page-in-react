import React from 'react'

import play from '../assets/play.svg'

function RenderLecture(props) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="pointer-on-hover py-2 d-flex align-items-center">
                <img src={play} className="play me-3" alt="play"></img>
                <span>{props.lecture['name']}</span>
            </div>
            <span className="text-secondary">{props.lecture['duration']}</span>
        </div>
    )
}

export default RenderLecture