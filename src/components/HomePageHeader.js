import React from 'react'

import watch from '../assets/header_watch.jpg'

function HomePageHeader() {
    return (
        <header className="home-page-header">
            <img class="watch" src={watch} alt="header"/>
                <div class="outer">
                    <div class="inner_card">
                        <h3 className="fw-bold">New to Udemy? Lucky you.</h3>
                        <p>Courses start at E£169.99. Get your new-student offer before it expires.</p>
                    </div>
                </div>
        </header>
    )
}

export default HomePageHeader