import React, { useCallback, useRef, useState } from 'react'
import './LoginForm.css'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import fakeUsers from '../../assets/fakeData/fakeUsers'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

export default function LoginForm({ setFocus }) {
    // State
    const [emailOrNum, setEmailOrNum] = useState('09123456789')
    const [password, setPassword] = useState('12345')
    const [findUser, setFindUser] = useState({})
    const [isUser, setIsUser] = useState(false)
    const [loginedUser, setLoginedUser] = useState(false)

    // Ref
    const userInputRef = useRef(null)
    const passwordInputRef = useRef(null)


    const inputEmailHandler = useCallback((e) => {
        const value = e.target.value
        setEmailOrNum(value)
    }, [])

    const inputPasswordHandler = useCallback((e) => {
        const value = e.target.value
        setPassword(value)
    }, [])

    const emailFormSubmit = (e) => {
        e.preventDefault()
        if (emailOrNum) {
            let findedUser = fakeUsers.find(user => {
                return user.email === emailOrNum || user.phone === emailOrNum
            })
            if (findedUser) {
                setFindUser(findedUser)
                setIsUser(true)
                userInputRef.current.classList.remove('unvalid')
            } else {
                userInputRef.current.classList.add('unvalid')
            }
        }
    }

    const passwordFormSubmit = (e) => {
        e.preventDefault()
        if (password === findUser.password) {
            localStorage.setItem('login', JSON.stringify(findUser))
            setLoginedUser(true)
            setTimeout(() => {
                window.location.href = '/'
            }, 2000);
            passwordInputRef.current.classList.remove('unvalid')
        } else {
            passwordInputRef.current.classList.add('unvalid')
        }
    }

    const inputFocusHandler = () => {
        setFocus(true)
    }

    const inputBlurHandler = () => {
        setFocus(false)
    }

    return (
        <>
            <div className="login-page__right-banner">
                <Link to='/'>
                    <h1>واسط کالا</h1>
                </Link>
            </div>
            {!isUser ? (
                //   Email || PhoneNumber
                <div className="login-email-form">
                    <div className='login-page__right-box'>
                        <h2>ورود | ثبت نام</h2>
                        <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    </div>
                    <form className='login-page__right-form' onSubmit={e => emailFormSubmit(e)}>
                        <input ref={userInputRef} type="text" name="login input" value={emailOrNum} onChange={e => inputEmailHandler(e)} onFocus={inputFocusHandler} onBlur={inputBlurHandler} />
                        <div className='login-page__right-form-btns'>
                            <Link to='/'>صفحه اصلی</Link>
                            <button>مرحله بعد</button>
                        </div>
                        <p className='login-page__right-rules'>ورود شما به معنای پذیرش <a href="#"> شرایط و قوانین حریم‌خصوصی</a> است</p>
                    </form>
                </div>
            ) : (
                // Password
                <div className="login-password-form">
                    <div className='login-page__right-box'>
                        <h2>رمز عبور را وارد کنید</h2>
                        <p dir='ltr'>{emailOrNum} :</p>
                    </div>
                    <form className='login-page__right-form pass' onSubmit={e => passwordFormSubmit(e)}>
                        <input ref={passwordInputRef} type="password" name="login input" value={password} onChange={e => inputPasswordHandler(e)} onFocus={inputFocusHandler} onBlur={inputBlurHandler} />
                        <div className='login-page__right-form-btns'>
                            {loginedUser ? (
                                <CircularProgress color="success"
                                    size={50}
                                    thickness={5}
                                />
                            ) : (
                                <button className='login-btn'>ورود</button>
                            )}
                        </div>
                        <div className="login-password__forget-box">
                            <a href="#"> <span>فراموشی رمز عبور</span> <LiaAngleLeftSolid /></a>
                            <a href="#"> <span>ورود با رمز یک بار مصرف</span> <LiaAngleLeftSolid /></a>
                        </div>
                    </form>
                </div>
            )}

        </>
    )
}
