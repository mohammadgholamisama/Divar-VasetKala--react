import React from 'react'
import './MobileGroupList.css'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

export default function MobileGroupList({ list }) {
    return (
        <>
            {list.map(item => (
                <li className='mobile-one-menu' key={item.id}>
                    <Link to={item.link ? item.link : "#"} className='dfb acv'>
                        <div>
                            {typeof item.img === 'string' ? (
                                <img src={item.img} alt="icon" />
                            ) :
                                (item.img)}
                            <span>{item.title}</span>
                        </div>
                        <LiaAngleLeftSolid />
                    </Link>
                </li>
            ))}
        </>
    )
}
