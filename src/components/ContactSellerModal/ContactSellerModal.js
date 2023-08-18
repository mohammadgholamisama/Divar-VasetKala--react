import React from 'react'
import './ContactSellerModal.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'

export default function ContactSellerModal({ openModal, closeModal }) {
    return (
        <>
            {openModal && (
                <div className='product-page__contact-seller-container'>
                    <div className="product-page__contact-seller-box">
                        <div className="dfb product-page__contact-seller-item">
                            <span>اطلاعات تماس</span>
                            <button onClick={() => closeModal(false)}>
                                <AiOutlineCloseCircle className='product-page__contact-modal-close' />
                            </button>
                        </div>
                        <div className="dfb product-page__contact-seller-item">
                            <div>
                                <BsTelephone className='product-page__contact-seller-item-icon' />
                                <span>شماره موبایل</span>
                            </div>
                            <span className='product-page__contact-seller-item-number'>09123456789</span>
                        </div>
                        <a  className='product-page__contact-seller-item'>
                            <BiMessageSquareDetail className='product-page__contact-seller-item-icon' />
                            <span>چت در واسط کالا</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}
