import React, { useContext, useState } from 'react'
import './MobileNavbar.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import LocationModal from '../../../components/LocationModal/LocationModal'
import { context } from '../../../context/context'
import { useNavigate } from 'react-router-dom'

export default function MobileNavbar() {
    const contextSite = useContext(context)
    const navigate = useNavigate();

    const [openLocationModal, setOpenLocationModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const openLocationModalHandler = () => {
        setOpenLocationModal(prev => !prev)
    }

    const handleSearch = () => {
        searchValue && searchValue !== 'all' && navigate(`/list/${encodeURIComponent(searchValue)}`)
        searchValue && contextSite.setNavbarSearchValue(searchValue)
        setSearchValue('')
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        handleSearch()
    }

    return (
        <>
            <LocationModal open={openLocationModal} setOpen={setOpenLocationModal} />
            <nav className='mobile-navbar'>
                <form onSubmit={e => handleSearchClick(e)}>
                    <input className='mobile-navbar__input' type="text" name="search" placeholder='جستجو در واسط کالا' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                </form>
                <button className='mobile-navbar__btn' onClick={openLocationModalHandler}>
                    <HiOutlineLocationMarker className='mobile-navbar__btn-icon' />
                    <span className='mobile-navbar__btn-text'>{contextSite.locationName.name ? contextSite.locationName.name : contextSite.locationName === 'all' ? 'تمام استان ها' : 'لطفا شهر خود را انتخاب کنید'}</span>
                </button>
            </nav>
        </>
    )
}
