import React from 'react'
import './HomeMobile.css'
import MobileNavbar from '../../MobileComponents/MobileNavbar/MobileNavbar'
import groups from '../../../assets/fakeData/groups'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'

export default function HomeMobile() {
  return (
    <>
      <MobileNavbar />
      <section className='mobile_home-page'>
        <div className='mobile_home-page__icon'>
          <img src="/images/icon.png" alt="icon" />
        </div>
        <h1 className='mobile_home-page__title'>
          خرید وفروش املاک ، آپارتمان، خودرو ،گوشی و موبایل لوازم دست دوم ، استخدام و هر چه فکر کنید!
        </h1>
        <span className='mobile_home-page__desk'>
          خرید آسان، فروش و بازاریابی در هر نقطه ای کشور را با ما تجربه کنید
        </span>
        <div className='mobile_home-page__groups'>
          <div className='mobile_home-page__groups-nav dfb'>
            <span>از دسته بندی های واسط کالا انتخاب کن</span>
            <a href="#">همه دسته بندی ها <LiaAngleLeftSolid /></a>
          </div>
          <ul className='mobile_home-page__groups-ul'>
            {groups.map(item => (
              <li key={item.id}>
                <a href="#" className='acv'>
                  <img src={item.img} alt="img" />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MobileBar />
    </>
  )
}
