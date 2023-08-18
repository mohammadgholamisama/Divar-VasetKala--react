import React, { useContext } from 'react'
import './MobileBar.css'
import { NavLink } from 'react-router-dom'
import { context } from '../../../context/context';
import { BiCategoryAlt, BiMessageSquareAdd } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';


export default function MobileBar() {
    const contextSite = useContext(context)

    return (
        <div className="mobile-bar__container">
            <div className='mobile-bar'>
                <ul className='mobile-bar__ul'>
                    <li>
                        <NavLink to={contextSite.userInfoNotEmpty ? '/add-advertising' : '/login'}>
                            <BiMessageSquareAdd />
                            <span>ثبت آگهی</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/groups'>
                            <BiCategoryAlt />
                            <span>دسته بندی</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5.5L15.5834 2.75L20.1667 5.5V16.5L15.5834 19.25L6.41669 13.75V8.25L15.5834 13.75V8.25L11 5.5Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 5.5L6.41665 2.75L1.83331 5.5V16.5L6.41665 19.25L10.725 16.3808" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>واسط کالا</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={contextSite.userInfoNotEmpty ? '/chat-list' : '/login'}>
                            <BsChatDots />
                            <span>چت</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={contextSite.userInfoNotEmpty ? '/user-account' : '/login'} >
                            <AiOutlineUser />
                            <span>حساب کاربری</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
