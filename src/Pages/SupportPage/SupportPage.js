import React from 'react'
import './SupportPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function SupportPage() {

    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const defaultCenter = {
        lat: 35.6892, // عرض جغرافیایی
        lng: 51.3890, // طول جغرافیایی
    };

    return (
        <>
            <Navbar />
            <section className='support-page site-container'>
                <div className="support-page__container">
                    <h1>تماس با واسط کالا</h1>
                    <div className="support-page__top-title dfb">
                        <p>لطفا پیش از ارسال ایمیل یا تماس تلفنی ، ابتدا <a href='#'>پرسش متداول</a> را مشاهد نمایید</p>
                        <a href="#" className='support-page__top-title-link'>پرسش متداول</a>
                    </div>

                    <div className="support-page__form-box">
                        <form className='support-page__form'>
                            <p>برای پیگیری یا سوال درباره سفارش و ارسال پیام بهتر است از فرم زیر استفاده کنید.</p>
                            <div className="support-page__form-input-box dfb">
                                <div>
                                    <label htmlFor="Issue">موضوع</label>
                                    <input type="text" name="Issue" id="Issue" />
                                </div>
                                <div>
                                    <label htmlFor="username">نام و نام خانوادگی</label>
                                    <input type="text" name="username" id="username" />
                                </div>
                            </div>
                            <div className="support-page__form-input-box dfb">
                                <div>
                                    <label htmlFor="email">ایمیل</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div>
                                    <label htmlFor="phone">تلفن</label>
                                    <input type="number" name="phone" id="phone" />
                                </div>
                            </div>
                            <div className="support-page__form-input-box">
                                <label htmlFor="text">متن پیام</label>
                                <textarea className='support-page__form-input-textarea' name="text" id="text" cols="30" rows="10"></textarea>
                            </div>
                            <div className="support-page__form-input-box start">
                                <p>فایل یا عکس مورد نظر خود را انتخاب کنید</p>
                                <label htmlFor="file" className='support-page__form-file-label'>
                                    <div>
                                        <AiOutlinePlusCircle className='support-page__form-file-icon' />
                                        <span>اضافه کن</span>
                                    </div>
                                </label>
                                <input className='support-page__form-file-input' type="file" name="file" id="file" />
                            </div>
                            <div className="support-page__form-btn-box">
                                <button>
                                    <span>ارسال</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Info Container */}

                    <div className="support-page__info-container-box">
                        <div className="support-page__info-container ">
                            <div className="support-page__map-info-container">
                                <h6>اطلاعات</h6>
                                <div className="support-page__map-info-box">
                                    <span>دفتر مرکزی</span>
                                    <p>تهران - بلوار پاسدارن برج تک طبقه 2</p>
                                </div>
                                <div className="support-page__map-info-box">
                                    <span>تلفن تماس و فکس</span>
                                    <p>0513-67754785</p>
                                </div>
                                <div className="support-page__map-info-box">
                                    <span>ایمیل سازمانی</span>
                                    <p>mohammad.mgs.98@gmail.com</p>
                                </div>
                            </div>
                            <div className="support-page__map-container">
                                <LoadScript googleMapsApiKey="AIzaSyC7crQyfB_bV9f3Fn5eMhO3zfKhHRGszeY">
                                    <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
                                        <Marker position={defaultCenter} />
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

