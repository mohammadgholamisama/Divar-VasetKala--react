import React from 'react'
import './UserAccountPanel.css'
import { AiOutlineUser } from 'react-icons/ai'
import { PiWarningCircleLight } from 'react-icons/pi'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { BsChatText } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function UserAccountPanel() {

    const logOutAccountHandler = () => {
        localStorage.setItem('login', '')  // LogOut in Account
        window.location.href = '/'
    }

    return (
        <section className='user-account-panel site-container'>
            <div className="user-account-panel__container">
                {/* right */}
                <div className="user-account-panel__right">
                    <div className="panel-right__info-box">
                        <div className='panel-right__info__icon-box'>
                            <AiOutlineUser />
                        </div>
                        <div className='panel-right__info-user'>
                            <span className='panel-right__info__username'>محمد غلامی</span>
                            <span className='panel-right__info__phone'>09123456789</span>
                        </div>
                    </div>
                    <div className="panel-right__warning">
                        <div>
                            <PiWarningCircleLight />
                            <span>اطلاعات پروفایل خود را تکمیل کنید</span>
                            <a href="#">ویرایش</a>
                        </div>
                    </div>
                    <ul className="panel-right-menu__ul">
                        <li>
                            <a href="#">
                                <span>آگهی های من</span>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>خرید های من</span>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div>
                                    <span>پیام های من</span>
                                    <span className="warning">3 پیام جدید</span>
                                </div>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>نشان ها</span>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>پشتیبانی و ارتباط با ما</span>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>بازدید اخیر</span>
                                <LiaAngleLeftSolid />
                            </a>
                        </li>
                    </ul>
                    <div className="panel-right__logout-box">
                        <button onClick={logOutAccountHandler}>خروج از حساب کاربری</button>
                    </div>
                </div>
                {/* left */}
                <div className="user-account-panel__left">
                    <div className="panel-left__location">
                        <div> <span>حساب کاربری</span> <LiaAngleLeftSolid /></div>
                        <a href='#'>
                            <span>آگهی های من</span>
                        </a>
                    </div>
                    <div className="panel__left-item-box">
                        <div className='panel-add__addvertise'>
                            <div className="panel-left-icon-box">
                                <BsChatText />
                            </div>
                            <p className='panel-add__addvertise-warning'>هنوز آگهی فعال ندارید</p>
                            <Link to='/add-advertising' className='panel-add__addvertise-add-btn'>ثبت آگهی</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
