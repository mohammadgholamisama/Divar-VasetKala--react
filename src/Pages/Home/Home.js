import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div className='home-page'>
            <div>
                <Navbar />
                <HomeHeader />
            </div>
            <div>
                <HomeAbout />
                <Footer />
            </div>
        </div>
    )
}
