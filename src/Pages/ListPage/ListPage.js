import React from 'react'
import './ListPage.css'
import Navbar from '../../components/Navbar/Navbar'
import ListGroups from '../../components/ListGroups/ListGroups'
import LIstProductsContainer from '../../components/LIstProductsContainer/LIstProductsContainer'


export default function ListPage() {

    return (
        <>
            <Navbar />
            <div className='list-page site-container'>
                <section className="list-page__section">
                    <ListGroups />
                    <LIstProductsContainer />
                </section>
            </div>
        </>
    )
}
