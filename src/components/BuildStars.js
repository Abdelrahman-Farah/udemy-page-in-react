import React from 'react'

import star from '../assets/stars/star.svg'
import filledStar from '../assets/stars/filled-star.svg'
// import halfFilledStar from '../assets/stars/half-filled-star.svg'

function BuildStars(props) {
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < props.stars; i++)
             stars.push(<img src={filledStar} className="built-star" alt="star"></img>);
        for (let i = 0; i < 5-props.stars; i++)
             stars.push(<img src={star} className="built-star" alt="star"></img>);

        return stars;
    }
    return (
        <span>{renderStars()}</span>
    )
}

export default BuildStars