import React, { useContext, useState } from 'react'
import './HomeHeader.css'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { iranProvinces, popularStates } from '../../assets/fakeData/stateNames'
import { Link } from 'react-router-dom'
import { context } from '../../context/context';
import GroupBox from '../GroupBox/GroupBox'
import groups from '../../assets/fakeData/groups'

export default function HomeHeader() {
    const contextSite = useContext(context)

    const [searchInput, setSearchInput] = useState('')
    const [filteredProvinces, setFilteredProvinces] = useState([])

    const searchInputHandler = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        let foundItems = iranProvinces.filter(item => item.name.includes(value));

        if (foundItems.length === 0) {
            let filteredCities = [];

            iranProvinces.forEach(item => {
                let cities = item.cities.filter(city => city.name.includes(value));
                filteredCities = filteredCities.concat(cities);
            });

            setFilteredProvinces(filteredCities);
        } else {
            setFilteredProvinces(foundItems);
        }
    }


    const handleProvinceSelection = (value) => {
        setSearchInput(value.name)
        contextSite.setLocationName(value)
    }
    const popularStatesHandler = (state) => {
        contextSite.setLocationName(state)
        contextSite.setNavbarSearchValue("")
    }

    return (
        <section className='home-page-header site-container'>
            <div className="home-page-header-right">
                <div className="home-page-header-right__icon-bgr">
                    <img src="/images/home-page/right-icon.svg" alt="icon" />
                </div>
                <div className="home-page-header-right__title-box">
                    <h1
                    >خرید وفروش املاک ، آپارتمان، خودرو ،گوشی و موبایل <br />
                        لوازم دست دوم ، استخدام و هر چه فکر کنید!
                    </h1>
                    <p>
                        هم آگهی ثبت کیند و هم میلیون ها آگهی و نیازمندی در سرتاسر کشور مشاهده کنید.
                    </p>
                </div>
                <p className='home-page-header-right__desk'>اگه دنبال چیزی هستی ، شهرت رو انتخاب کن و تو دسته بندی ها به دنبالش بگرد . <br />اگر هم میخواهی چیزی بفروشی، چندتا عکس خوب ازش بگیر و آگهیت بچسون  در واسط کالا .<br />علاوه بر وبسایت، میتونی واسط کالا روی دستگاه های اندرویدی، آیفون و آیپد هم استفاده کنی.
                </p>
            </div>

            {/* left */}
            <div className="home-page-header-left">
                <div className="home-page-header-left__top">
                    <h2>خرید آسان، فروش و بازاریابی در هر نقطه ای کشور را با ما تجربه کنید</h2>
                    <div className='home-page-header-left__top-input-box'>
                        <input type="text" name="city name" placeholder='نام شهر یا محله' value={searchInput} onChange={e => searchInputHandler(e)} />
                        {searchInput && (
                            <div className="home-page-header-left__top-search-menus">
                                {filteredProvinces.map((item, index) => (
                                    <Link to={item.link} key={index} onClick={() => handleProvinceSelection(item)}>{item.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <span>استان های پر بازدید</span>
                    <div className="home-page-header-left__top-citys">
                        <ul>
                            <li>
                                <Link to="/list/all" onClick={() => contextSite.setLocationName('all')}>تمام استان ها</Link>
                            </li>
                            {popularStates.map(state => (
                                <li key={state.id}>
                                    <Link to={state.link} onClick={() => popularStatesHandler(state)}>{state.name}</Link>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
                <div className="home-page-header-left__bottom">
                    <a href='#' className='home-page-header-left__bottom-all-link'><span>همه دسته بندی ها</span> <LiaAngleLeftSolid /></a>
                    <ul>
                        {/* States Lists */}
                        {groups.slice(0,3).map((item) => (
                            <GroupBox title={item.title} img={item.img} key={item.id} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
