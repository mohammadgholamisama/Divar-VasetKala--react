import React, { useContext, useLayoutEffect, useState } from 'react'
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/context'
import { LiaAngleUpSolid } from 'react-icons/lia'

export default function LoginPage() {

    const contextSite = useContext(context)
    const [focusInput, setFocusInput] = useState(false)

    const navigate = useNavigate()
    useLayoutEffect(() => {
        contextSite.userInfoNotEmpty && navigate('/')
    }, [])

    return (
        <section className='login-page'>
            <div className="login-page__right">
                {/* login */}
                <LoginForm setFocus={setFocusInput} />
            </div>
            <div className={focusInput ? "login-page__left active" : "login-page__left"}>
                <div className="login-page__left-box">
                    <p className='login-page__left-title'>لذت خرید را با ما تجربه کنید <br /> بهترین محصولات را از ما بخواهید</p>
                    <p className='login-page__left-desk'>آگهی و محصولات متنوع و متناسب با سلقیه ی شماست. <br />
                        میتوانید آگهی موردنظر خود را جستجو و یا آگهی خود را ثبت نماید</p>
                </div>
                <LiaAngleUpSolid className="login-page__left-angle" />
            </div>
        </section>
    )
}
