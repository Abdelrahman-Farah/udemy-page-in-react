import React, { useState } from 'react'

import like from '../assets/like.svg'
import likeFilled from '../assets/like-filled.svg'
import dislike from '../assets/dislike.svg'
import dislikeFilled from '../assets/dislike-filled.svg'
import BuildStars from './BuildStars'

function Review(props) {
    const [likeDislike, setLikeDislike] = useState("NOT_SET");

    return (
        <>
            <div className="d-flex">
                <div className="avatar">{props.info['initials']}</div>
                <div>
                    <h4 className="fw-bold">{props.info['name']}</h4>
                    <div className="mb-2 d-flex align-items-center">
                        <BuildStars stars={Math.round(props.info['rating'])}></BuildStars>
                        <div className="text-secondary ms-3 mt-1">{props.info['timeago']}</div>
                    </div>
                    <h5 className="fw-light">{props.info['review']}</h5>
                    <h6 className="fw-100">Was this review helpful?</h6>

                    <div>
                        <button
                            className={`like-dislike ${likeDislike === "LIKE" ? "checked" : ""}`}
                            onClick={() => setLikeDislike("LIKE")}>
                            <img src={likeDislike === "LIKE" ? likeFilled : like} className="mid-icon" alt="like"></img>
                        </button>

                        <button
                            className={`like-dislike ${likeDislike === "DISLIKE" ? "checked" : ""}`}
                            onClick={() => setLikeDislike("DISLIKE")}>
                            <img src={likeDislike === "DISLIKE" ? dislikeFilled : dislike} className="mid-icon" alt="dislike"></img>
                        </button>
                        <span className="report">Report</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

function CourseReviews(props) {
    const renderReviews = () => {
        const reviews = props['reviews'].map((review) => {
            return <Review info={review}></Review>
        });
        return reviews;
    }
    return (
        <section>
            <h2 className="fw-bold mt-4 mb-2">Reviews</h2>
            {renderReviews()}
        </section>
    )
}

export default CourseReviews