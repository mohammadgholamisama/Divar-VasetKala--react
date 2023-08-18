import React from 'react'
import './Footer.css'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='desktop-footer site-container'>
            <div className="desktop-footer__right">
                <a href="#" className='desktop-footer__right-banner'>واسط کالا</a>
                <ul>
                    <li>
                        <a href="#">
                            درباره واسط کالا
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            پشتیبانی و قوانین
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            بلاگ واسط کالا
                        </a>
                    </li>
                </ul>
            </div>
            <div className="desktop-footer__left">
                <a href="#"><AiOutlineInstagram /></a>
                <a href="#"><AiOutlineYoutube /></a>
            </div>
        </footer>
    )
}