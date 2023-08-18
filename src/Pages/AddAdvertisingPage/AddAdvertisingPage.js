import React, { useContext, useEffect } from 'react'
import './AddAdvertisingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import GroupBox from '../../components/GroupBox/GroupBox'
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/context'
import groups from '../../assets/fakeData/groups'

export default function AddAdvertisingPage() {

    const contextSite = useContext(context)

    const navigate = useNavigate()
    useEffect(() => {
        !contextSite.userInfoNotEmpty && navigate('/login')
    }, [])

    return (
        <>
            <Navbar />
            <section className='advertising-page site-container'>
                {/* Right Level */}
                <div className="advertising-page__level">
                    <div className="advertising-page__level-circle active">
                        <div className="circle">1</div>
                        <span>دسته بندی</span>
                    </div>
                    <div className="advertising-page__level-circle">
                        <div className="circle">2</div>
                        <span>زیر دسته</span>
                    </div>
                    <div className="advertising-page__level-circle">
                        <div className="circle">3</div>
                        <span>مشخصات آگهی</span>
                    </div>
                    <div className="advertising-page__level-circle">
                        <div className="circle">4</div>
                        <span>آپلود عکس</span>
                    </div>
                    <div className="advertising-page__level-circle">
                        <div className="circle">5</div>
                        <span>تایید و پرداخت</span>
                    </div>
                </div>
                {/* box level */}
                <div className="advertising-page__box">
                    <div className="level-1">
                        <h2>انتخاب دسته بندی</h2>
                        <div className="level-1__list">
                            <ul className='level-1__ul'>
                                {groups.map(item => (
                                    <GroupBox title={item.title} img={item.img} key={item.id} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}