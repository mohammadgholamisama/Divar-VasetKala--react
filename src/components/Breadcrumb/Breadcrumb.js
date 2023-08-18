import React from 'react'
import './Breadcrumb.css'

export default function Breadcrumb({group , item}) {
    return (
        <>
            <div className="product-page__top-breadcrumb-box dfb">
                <div className="product-page__top-breadcrumb">
                    <a href='#'>واسط کالا</a>
                    <a href="#">{group}</a>
                    <a href="#">{item}</a>
                </div>
                <p className='product-page__top-id'>شناسه آگهی : 123456789</p>
            </div>
        </>
    )
}
