import React from 'react'
import './ProductInfo.css'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

export default function ProductInfo({ product, setModalSellerHandler }) {

    return (
        <>
            <section className='product-page '>
                {product && product.map(item => (
                    <div className="product-page__product" key={item.id}>
                        <Breadcrumb group={item.group} item={item.groupTitle} />
                        {/* product info */}
                        <div className="product-page__info-container">
                            {/* product right */}
                            <div className="product-page__right">
                                <h1 className='product-page__info-title'>{item.title}</h1>
                                <div className="product-page__info-time">
                                    <span>{item.time}</span>
                                    <span>{item.presianState}</span>
                                    <span>{item.presianCity}</span>
                                </div>
                                <div className="product-page__info-Contact-btns">
                                    <button>
                                        <BiMessageSquareDetail />
                                        <span>چت</span>
                                    </button>
                                    <button onClick={() => setModalSellerHandler(true)}>تماس با فروشنده</button>
                                </div>
                                <div className="product-page__info-tabel">
                                    {product[0].infoArray.map(item => (
                                        <div className="product-page__info-tabel-item dfb" key={item.id}>
                                            <span>{item.title}</span>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                    <div className="product-page__info-tabel-item dfb">
                                        <span>قیمت</span>
                                        <span>{product[0].price.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="product-page__info-more">
                                    <h6>جزئیات بیشتر</h6>
                                    <span className='product-page__info-more-desk'>
                                        {item.desk}
                                    </span>
                                </div>
                            </div>
                            {/* product left */}
                            <div className="product-page__left">
                                {product[0].group === 'املاک' && (
                                    <div className="product-page__left-group-box dfb">
                                        <div>
                                            <span>آژانس املاک</span>
                                            <h2>بهارستان</h2>
                                        </div>
                                        <div>
                                            <a href="#">
                                                <span>آگهی های دیگر</span>
                                                <LiaAngleLeftSolid />
                                            </a>
                                        </div>
                                    </div>
                                )}
                                {/* gallery */}
                                {product && <ProductGallery images={product[0].imgArray} />}

                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
