import React from 'react'
import LIstProductsContainer from '../../../components/LIstProductsContainer/LIstProductsContainer'
import MobileNavbar from '../../MobileComponents/MobileNavbar/MobileNavbar'
import MobileBar from '../../MobileComponents/MobileBar/MobileBar'

export default function MobileListPage() {
  return (
    <div>
        <MobileNavbar />
        <LIstProductsContainer />
        <MobileBar />
    </div>
  )
}
