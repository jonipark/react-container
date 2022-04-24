import React from 'react'
import './HomePage.css'

import ProjectCard from '../components/Project/ProjectCard'
import { ProjectItems } from'../components/Project/ProjectItems'

function HomePage() {

    return (
        <>
            <div className='home-container'>
                <p style={{display: 'flex', justifyContent: 'center', fontWeight:600,}}>Your Name</p>
                <p style={{display: 'flex', justifyContent: 'center',}}>my project</p>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {ProjectItems.map((card) => 
                        <ProjectCard style={{width: '200px',}} key={card.id} thumbnail={card.thumbnail} title={card.title} type={card.type} desc={card.desc} url={card.url}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage;