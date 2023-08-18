import React, { useContext, useEffect, useState } from 'react'
import './LocationModal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { iranProvinces, popularStates } from '../../assets/fakeData/stateNames'
import { context } from '../../context/context'
import { Link } from 'react-router-dom'

export default function LocationModal({ open, setOpen }) {

    const contextSite = useContext(context)

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [open]);

    const handleCloseModal = () => {
        setOpen(false)
        setSearchValue('')
        contextSite.setNavbarSearchValue('')
    }

    const locationNameHandler = (item) => {
        contextSite.setLocationName(item)
        handleCloseModal()
    }

    const allLocationHandler = () => {
        handleCloseModal()
        contextSite.setLocationName('all');
    }

    return (
        <div className={open ? "location-modal active" : 'location-modal'}>
            <div className="location-modal-box">
                <div className="location-modal-box__nav dfb">
                    <span>انتخاب شهر</span>
                    <button onClick={handleCloseModal}>
                        <AiOutlineClose />
                    </button>
                </div>
                <input className='location-modal-box__input' type="text" name="search state" placeholder='نام استان' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <div className="location-modal-box__popular-box">
                    <p>استان های پر بازدید</p>
                    <div className='dfb'>
                        {popularStates.map(item => (
                            <Link to={item.link} key={item.id} onClick={() => locationNameHandler(item)}>{item.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="location-modal-box__state-list">
                    <div className="dfb">
                        <p>لیست استان ها</p>
                        <Link to='/list/all' className='location-modal-box__state-list-all' onClick={allLocationHandler}>از تمام استان ها</Link>
                    </div>
                    <ul>
                        {!searchValue
                            ? iranProvinces.map((item) => (
                                <li key={item.id} onClick={handleCloseModal}>
                                    <Link to={item.link}
                                        className={contextSite.locationName.name === item.name ? 'active' : ''}
                                        onClick={() => locationNameHandler(item)}
                                    >
                                        <span>{item.name}</span>
                                        <LiaAngleLeftSolid />
                                    </Link>
                                </li>
                            ))
                            : iranProvinces
                                .filter((item) => item.name.includes(searchValue))
                                .map((state) => (
                                    <li key={state.id}>
                                        <Link to={state.link} onClick={() => locationNameHandler(state)}>
                                            <span>{state.name}</span>
                                            <LiaAngleLeftSolid />
                                        </Link>
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
