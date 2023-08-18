import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeHeader />
            <HomeAbout />
            <Footer />
        </>
    )
}
