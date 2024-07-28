import React from 'react'
import Chat from '../designs/img/icon-chat.png'

function MainCard({ data }) {
    return (
        <div className="feature-item">
            <img src={data.image} alt="Chat Icon" className="feature-icon" />
            <h2 className="feature-item-title">{data.titre}</h2>
            <p>
                {data.description}
            </p>
        </div>
    )
}

export default MainCard