import React from 'react'
import './GroupBox.css'

export default function GroupBox({ title, img }) {
    return (
        <>
            <li className='group-box__li'>
                <a href="#">
                    {img && (
                        <img src={img} alt="icon" />
                    )}
                    <span>
                        {title}
                    </span>
                </a>
            </li>
        </>
    )
}
