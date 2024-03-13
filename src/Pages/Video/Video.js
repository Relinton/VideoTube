import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recomendado/Recommended'

const video = () => {
    return (
        <div className='play-container'>
            <PlayVideo />
            <Recommended />
        </div>
    )
}

export default video