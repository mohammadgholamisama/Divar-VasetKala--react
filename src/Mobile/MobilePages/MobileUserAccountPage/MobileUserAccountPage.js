import React, { useContext } from 'react'
import './MobileUserAccountPage.css'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'
import { context } from '../../../context/context'
// icons
import { BiSolidUser } from 'react-icons/bi'
import { MdOutlinePayment, MdUpdate } from 'react-icons/md'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { RiSettings4Fill } from 'react-icons/ri'
import MobileGroupList from '../../MobileComponents/MobileGroupList/MobileGroupList'


export default function MobileUserAccountPage() {
    const contextSite = useContext(context)

    const menuList = [
        { id: 1, title: 'آگهی های من', img: < BiSolidUser /> },
        { id: 2, title: 'پرداخت های من', img: < MdOutlinePayment /> },
        { id: 3, title: 'نشان ها و یادداشت ها', img: <BsFillBookmarkFill /> },
        { id: 4, title: 'بازدید های اخیر', img: <MdUpdate /> },
        { id: 5, title: 'تنظیمات', img: < RiSettings4Fill /> },
    ]

    const logOutAccountHandler = () => {
        localStorage.setItem('login', '')  // LogOut in Account
        window.location.href = '/'
    }

    return (
        <section className='mobile-account-page'>
            <nav className='mobile-title-nav'>
                واسط کالای من
            </nav>
            <div className="mobile-account-page__info">
                <p>کاربر {contextSite.userInfo.username} شما وارد شده اید و اگهی های ثبت شده با این اکانت را مشاهده می کنید.</p>
                <div className="mobile-account-page__info-logout">
                    <button onClick={logOutAccountHandler}>خروج از حساب کاربری</button>
                </div>
            </div>

            <ul className="mobile-account-page__ul">
                <MobileGroupList list={menuList} />
            </ul>
            <MobileBar />
        </section>
    )
}
