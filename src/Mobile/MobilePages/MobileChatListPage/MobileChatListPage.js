import React, { useContext, useEffect } from 'react'
import './MobileChatListPage.css'
import MobileNavbar from '../../MobileComponents/MobileNavbar/MobileNavbar'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'
import { context } from '../../../context/context'
import { useNavigate } from 'react-router-dom'

export default function MobileChatListPage() {

    const contextSite = useContext(context)

    const navigate = useNavigate()
    useEffect(() => {
        !contextSite.userInfoNotEmpty && navigate('/login')
    }, [])
    
    return (
        <>
            <MobileNavbar />
            <section className='mobile-chat-list-page'>
                <div className='mobile-chat-list-page__input'>
                    <input type="text" name="search chat" placeholder='جستجوی چت ...' />
                </div>
                <ul className="mobile-chat-list-page__ul">
                    <li>
                        <a href="#" className='acv'>
                            <div className="mobile-chat-list-page__item-right">
                                <img src="/images/icon.png" alt="icon" />
                                <div>
                                    <h6>پستچی واسط کالا</h6>
                                    <span>هویت شما تایید شد ...</span>
                                </div>
                            </div>
                            <div className="mobile-chat-list-page__item-left">
                                <p className='time'>12:05</p>
                                <div className='count'>
                                    <span>2</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
            <MobileBar />
        </>
    )
}
