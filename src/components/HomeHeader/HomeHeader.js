import React, { useContext, useState } from 'react'
import './HomeHeader.css'
import { iranProvinces, popularStates } from '../../assets/fakeData/stateNames'
import { Link } from 'react-router-dom'
import { context } from '../../context/context';

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
            <div className="home-page-header-top">
                <div className="home-page-header-top__icon-bgr">
                    <img src="/images/home-page/right-icon.svg" alt="icon" />
                </div>
                <div className="home-page-header-top__title-box">
                    <h1
                    >خرید وفروش املاک ، آپارتمان، خودرو ،گوشی و موبایل <br />
                        لوازم دست دوم ، استخدام و هر چه فکر کنید!
                    </h1>
                </div>
            </div>

            {/* bottom */}
            <div className="home-page-header-bottom">
                <div className="home-page-header-bottom__top">
                    <h2>خرید آسان، فروش و بازاریابی در هر نقطه ای کشور را با ما تجربه کنید</h2>
                    <div className='home-page-header-bottom__top-input-box'>
                        <input className={searchInput ? 'active' : ''} type="text" name="city name" placeholder='نام شهر یا محله' value={searchInput} onChange={e => searchInputHandler(e)} />
                        {searchInput && (
                            <div className="home-page-header-bottom__top-search-menus">
                                {filteredProvinces.map((item, index) => (
                                    <Link to={item.link} key={index} onClick={() => handleProvinceSelection(item)}>{item.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <span>استان های پر بازدید</span>
                    <div className="home-page-header-bottom__top-citys">
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
                        <div className="home-page-header-bottom__top-citys-border"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}