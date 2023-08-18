import React, { useContext, useEffect } from 'react'
import './MobileAddAdvertisingPage.css'
import MobileNavbar from '../../MobileComponents/MobileNavbar/MobileNavbar'
import groups from '../../../assets/fakeData/groups'
import GroupBox from '../../../components/GroupBox/GroupBox'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'
import { context } from '../../../context/context'
import { useNavigate } from 'react-router-dom'

export default function MobileAddAdvertisingPage() {
    const contextSite = useContext(context)

    const navigate = useNavigate()
    useEffect(() => {
        !contextSite.userInfoNotEmpty && navigate('/login')
    }, [])

    return (
        <>
            <MobileNavbar />
            <section className='add-advertising-page-mobile'>
                <div className="add-advertising-page-mobile-nav dfb">
                    <h1>ثبت آگهی</h1>
                    <div className="add-advertising-page-mobile__nav-groups">
                        <div className='circle'>1</div>
                        <h6>دسته بندی</h6>
                    </div>
                </div>
                <div className="add-advertising-page-mobile__title">
                    <h2>انتخاب دسته بندی</h2>
                </div>
                <ul className='level-1__ul'>
                    {groups.map(item => (
                        <GroupBox title={item.title} img={item.img} key={item.id} />
                    ))}
                </ul>
            </section>
            <MobileBar />
        </>
    )
}
