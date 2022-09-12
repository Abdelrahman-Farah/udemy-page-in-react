import React from 'react'

function CourseRequirements(props) {
    const renderRequirements = () => {
        const requirements = props['requirements'].map((requirement) => {
            return <li className="mt-2"> <span>{requirement}</span></li>
        });
        return requirements;
    }
    return (
        <>
            <h2 className="fw-bold mt-4 mb-2">Requirements</h2>
            <ul>
                {renderRequirements()}
            </ul>
        </>
    )
}

export default CourseRequirements