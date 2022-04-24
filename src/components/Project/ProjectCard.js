import React from 'react'
import "./ProjectCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: ProjectCard
 */

function ProjectCard({thumbnail, title, type, desc, url}) {
    return(
        <div className='projectcard-container' onClick={() => window.location.href=url}>
            <div className='flex justify-center thumbnail-container'>
                <img src={thumbnail} alt='project-thumbnail' width="100%" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{type}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard