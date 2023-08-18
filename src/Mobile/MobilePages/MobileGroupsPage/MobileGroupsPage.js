import React, { useContext } from 'react'
import './MobileGroupsPage.css'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'
import MobileGroupList from '../../MobileComponents/MobileGroupList/MobileGroupList'
import groups from '../../../assets/fakeData/groups'
import { context } from '../../../context/context'

export default function MobileGroupsPage() {

    const contextSite = useContext(context)

    return (
        <>
            <section className='mobile-groups-page'>
                <nav className='mobile-title-nav'>
                    دسته بندی آگهی ها
                </nav>
                <ul className='mobile-groups-page__ul'>
                    <MobileGroupList list={[{ id: 21254, title: 'همه آگهی ها', link: contextSite.locationName === 'all' ? '/list/all' : contextSite.locationName.link }, ...groups]} />
                </ul>
            </section>
            <MobileBar />
        </>
    )
}
