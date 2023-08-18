import React from 'react'
import './ListItemBox.css'
import { Link } from 'react-router-dom'

export default function ListItemBox({ title, price, time, img, id }) {
    return (
        <>
            <div className='list-page__item-body'>
                <Link to={`/product/${id}`} className="list-page__item-link">
                    <div className="list-page__item-body-info">
                        <h2>{title}</h2>
                        <span className='list-page__item-body-info-price'>{price.toLocaleString()} تومان</span>
                        <span className='list-page__item-body-info-time'>{time}</span>
                    </div>
                    <div className='list-page__item-img'>
                        <img src={img} alt="icon" />
                    </div>
                </Link>
            </div>
        </>
    )
}
