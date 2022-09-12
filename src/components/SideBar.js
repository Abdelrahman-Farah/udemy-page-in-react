import React, { useState} from 'react'
import alarm from '../assets/alarm.svg'
import wishlistOn from '../assets/wishlist-true.png'
import wishlistOff from '../assets/wishlist-false.png'
import video from '../assets/video.svg'
import article from '../assets/article.svg'
import downloadable from '../assets/downloadable.svg'
import lifetime from '../assets/lifetime.svg'
import mobile from '../assets/mobile.svg'
import trophy from '../assets/trophy.svg'

function SideBar(props) {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const renderOldPrice = () => {
        return <>
            <span className="old-price">E£{props.course['oldprice']}</span>
            <div className="offer-deadline">
                <img src={alarm} className="small-icon" alt="star" />
                <span className="fw-bold"> 1 day</span> left at this price!
            </div>
        </>
    }
    return (
        <div className="lift-sidebar-up">
            <img src={props.course['img']} className="sidebar-image" alt="thumbnail"></img>
            <div className="sidebar-info">
                <div className="">
                    <span className="sidebar-price fw-bold ">E£ {props.course['price']}</span>
                    {props.course['price'] !== props.course['oldprice'] && renderOldPrice()}
                </div>

                <span className="d-flex mt-4">
                    <button className="add-to-cart">Add to cart</button>
                    <button className="add-to-wishlist" onClick={() => setIsWishlisted(!isWishlisted)}>
                        <img src={isWishlisted ? wishlistOn : wishlistOff} alt="wishlist"></img>
                    </button>
                </span>
                <button className="buy-now mt-2 mb-3">Buy Now</button>

                <div className="d-flex justify-content-around mb-4">30-Day Money-Back Guarantee</div>

                <h5 className="fw-bold">This course includes:</h5>
                <div className="mb-2">
                    <img src={video} className="mid-icon me-2" alt="video" />
                    <span>15 hours on-demand video</span>
                </div>
                <div className="mb-2">
                    <img src={article} className="mid-icon me-2" alt="article" />
                    <span>2 articles</span>
                </div>
                <div className="mb-2">
                    <img src={downloadable} className="mid-icon me-2" alt="lifetime" />
                    <span>3 downloadable resources</span>
                </div>
                <div className="mb-2">
                    <img src={lifetime} className="mid-icon me-2" alt="lifetime" />
                    <span>Full lifetime access</span>
                </div>
                <div className="mb-2">
                    <img src={mobile} className="mid-icon me-2" alt="mobile" />
                    <span>Access on mobile and TV</span>
                </div>
                <div className="mb-2">
                    <img src={trophy} className="mid-icon me-2" alt="trophy" />
                    <span>Certificate of completion</span>
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <span className="link-like-button">Share</span>
                    <span className="link-like-button">Gift this course</span>
                    <span className="link-like-button">Apply coupon</span>
                </div>

                <hr className="my-4" />
                <div>
                    <h5 className="fw-bold">Training 5 or more people?</h5>
                    <div>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</div>
                    <button className="buy-now my-3">Try Udemy Business</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar