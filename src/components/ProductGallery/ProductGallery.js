import React, { useState } from 'react'
import './ProductGallery.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'



export default function ProductGallery({ images }) {


    const [activeImgIndex, setActiveImgIndex] = useState(0)
    const [openImg, setOpenImg] = useState(false)

    const activeImgHandler = (ID) => {
        setActiveImgIndex(ID)
    }

    const nextSlideHandler = () => {
        setActiveImgIndex(prev => {
            if (prev === images.length - 1) {
                return images.length - 1;
            } else {
                return prev + 1;
            }
        });
    }
    const prevSlideHandler = () => {
        setActiveImgIndex(prev => {
            if (prev === 0) {
                return 0;
            } else {
                return prev - 1;
            }
        });
    }

    const openImgHandler = () => {
        setOpenImg(true)
    }
    
    const closeImgHandler = () => {
        setOpenImg(false)
    }


    return (
        <>
            <div className="product-page__left-gallery">
                <div className="gallery-main-img-box">
                    <FaAngleRight className='gallery-main-img-prev' onClick={prevSlideHandler} />
                    <div className="gallery-main-img-container">
                        <img src={images[activeImgIndex]} alt="عکس محصول" className='gallery-main-img' onClick={openImgHandler} />
                    </div>
                    <FaAngleLeft className='gallery-main-img-next' onClick={nextSlideHandler} />
                    <ul className={images.length > 3 ? 'gallery-ul dfb' : 'gallery-ul'}>
                        {images.map((item, index) => (
                            <li key={index} onClick={() => activeImgHandler(index)}>
                                <img className={activeImgIndex === index ? "gallery-li-img active" : 'gallery-li-img'} src={item} alt="عکس محصول" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {openImg && (
                <div className="open-img-contaienr" onClick={closeImgHandler}>
                    <img src={images[activeImgIndex]} alt="عکس محصول" className='open-img__img' />
                </div>
            )}
        </>
    )
}
