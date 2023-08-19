import React, { useContext, useState } from 'react'
import './Navbar.css'
import SubMenuNavbar from '../SubMenuNavbar/SubMenuNavbar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { context } from '../../context/context';
import LocationModal from '../LocationModal/LocationModal';
import { LiaAngleDownSolid } from 'react-icons/lia'

export default function Navbar() {

  const contextSite = useContext(context)
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('')
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [openLocationModal, setOpenLocationModal] = useState(false)

  const openSubMenuHandler = () => {
    setOpenSubMenu(prev => !prev)
  }

  const openLocationModalHandler = () => {
    setOpenLocationModal(prev => !prev)
  }

  const handleSearch = () => {
    searchValue && searchValue !== 'all' && navigate(`/list/${encodeURIComponent(searchValue)}`)
    searchValue && contextSite.setNavbarSearchValue(searchValue)
    setSearchValue('')
  }

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearchClick = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <>
      <nav className='nav-bar'>
        <div className='nav-bar__content '>
          <div className="site-container">
            <>
              <div className="nav-bar__content-top dfb">
                <div className="nav-bar-right">
                  <Link to="/" className='nav-bar__banner'>
                    <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.52197 1.51123L6.86963 6.36133C7.18408 6.0332 7.42334 5.61279 7.5874 5.1001C7.7583 4.5874 7.84375 4.03027 7.84375 3.42871V1.2959H11.1865V3.42871C11.1865 4.47461 11.0088 5.41113 10.6533 6.23828C10.2979 7.05859 9.74072 7.84473 8.98193 8.59668C9.73389 9.2666 10.2876 9.89893 10.6431 10.4937C11.0054 11.0815 11.1865 11.6797 11.1865 12.2881C11.1865 13.4775 10.6704 14.4141 9.63818 15.0977C8.61279 15.7744 7.22168 16.1128 5.46484 16.1128C4.74023 16.1128 4.00537 16.0342 3.26025 15.877C2.51514 15.7197 1.66406 15.4634 0.707031 15.1079V11.4473L4.92139 8.46338L0.255859 3.97217L2.52197 1.51123ZM6.70557 10.104L4.11133 12.0215V12.3291C4.37793 12.4043 4.68896 12.4692 5.04443 12.5239C5.40674 12.5718 5.76221 12.5957 6.11084 12.5957C6.72607 12.5957 7.22852 12.5239 7.61816 12.3804C8.01465 12.2368 8.21289 12.0693 8.21289 11.8779C8.21289 11.5566 7.71045 10.9653 6.70557 10.104ZM13.3091 1.2959H16.6416V10.709C16.6416 11.3789 16.8091 11.8472 17.144 12.1138C17.4858 12.3735 18.0635 12.5034 18.877 12.5034H18.8872V16H18.877C17.1406 16 15.7769 15.5625 14.7856 14.6875C13.8013 13.8125 13.3091 12.5137 13.3091 10.791V1.2959ZM28.4233 0.557617L28.8848 4.03369C27.5244 4.33447 26.3896 4.60791 25.4805 4.854C24.5713 5.1001 23.7373 5.35645 22.9785 5.62305V5.67432C23.9971 6.49463 24.8105 7.22266 25.4189 7.8584C26.0273 8.4873 26.4648 9.0752 26.7314 9.62207C27.0049 10.1689 27.1416 10.7295 27.1416 11.3037C27.1416 12.7939 26.5571 13.9492 25.3882 14.7695C24.2261 15.5898 22.5786 16 20.4458 16H18.8975C18.7334 16 18.6138 15.8667 18.5386 15.6001C18.4634 15.3267 18.4258 14.8721 18.4258 14.2363C18.4258 13.6074 18.4634 13.1631 18.5386 12.9033C18.6138 12.6367 18.7334 12.5034 18.8975 12.5034H20.3638C21.5532 12.5034 22.4248 12.3906 22.9785 12.165C23.5322 11.9395 23.8091 11.5874 23.8091 11.1089C23.8091 10.8286 23.6553 10.5005 23.3477 10.1245C23.0469 9.74854 22.5376 9.27002 21.8198 8.68896C21.1089 8.10791 20.1382 7.37305 18.9077 6.48438L19.1538 3.64404C20.6235 2.92627 22.1138 2.31787 23.6245 1.81885C25.1353 1.31299 26.7349 0.892578 28.4233 0.557617ZM35.6831 12.5034C35.7241 12.4419 35.7651 12.3838 35.8062 12.3291C35.8472 12.2676 35.8882 12.2061 35.9292 12.1445V1.2959H39.2515V6.68945C39.2515 7.70801 39.0293 8.70605 38.585 9.68359L38.6772 9.76562C40.5298 7.57129 42.3105 6.47412 44.0195 6.47412C44.8125 6.47412 45.5029 6.66211 46.0908 7.03809C46.6787 7.41406 47.1333 7.93701 47.4546 8.60693C47.7827 9.27002 47.9468 10.0356 47.9468 10.9038C47.9468 11.1362 47.9331 11.3618 47.9058 11.5806C47.8784 11.7925 47.8306 12.0078 47.7622 12.2266C47.9399 12.3154 48.1143 12.3838 48.2852 12.4316C48.4561 12.4795 48.6509 12.5034 48.8696 12.5034H48.8799V16H48.8696C48.2681 16 47.7485 15.8872 47.311 15.6616C46.8735 15.436 46.4941 15.1147 46.1729 14.6978C45.6123 15.1216 44.915 15.4463 44.0811 15.6719C43.2471 15.8906 42.2661 16 41.1382 16H32.853V12.5034H35.6831ZM39.4053 12.5034H41.9585C42.772 12.5034 43.4658 12.4009 44.04 12.1958C44.6143 11.9907 44.9014 11.6216 44.9014 11.0884C44.9014 10.7534 44.7612 10.4731 44.481 10.2476C44.2075 10.0151 43.8691 9.89893 43.4658 9.89893C42.9463 9.89893 42.3618 10.0835 41.7124 10.4526C41.063 10.8218 40.2939 11.5054 39.4053 12.5034ZM55.9038 12.5034C56.3345 12.5034 56.6318 12.3838 56.7959 12.1445C56.96 11.9053 57.0659 11.5601 57.1138 11.1089L57.2881 8.94531L60.1592 9.12988L60.0156 11.3345C59.9814 11.6899 60.0635 11.9736 60.2617 12.1855C60.46 12.3975 60.7607 12.5034 61.1641 12.5034C61.5742 12.5034 61.8784 12.394 62.0767 12.1753C62.2817 11.9497 62.3843 11.6489 62.3843 11.2729C62.3843 11.1157 62.3672 10.873 62.333 10.5449C62.2988 10.21 62.2544 9.84424 62.1997 9.44775C62.145 9.04443 62.0869 8.66504 62.0254 8.30957L65.2349 7.54053C65.3511 8.14209 65.4502 8.76758 65.5322 9.41699C65.6211 10.0596 65.6655 10.6646 65.6655 11.2319C65.6655 12.8726 65.3306 14.0791 64.6606 14.8516C63.9976 15.6172 63.0405 16 61.7896 16C60.8804 16 60.1831 15.7847 59.6978 15.354C59.2124 14.9233 58.8877 14.3765 58.7236 13.7134H58.6211C58.293 15.2378 57.3257 16 55.7192 16C54.8716 16 54.2153 15.8052 53.7505 15.4155C53.2925 15.0259 52.9678 14.4688 52.7764 13.7441H52.6738C52.3525 14.4209 51.9048 14.9678 51.3306 15.3848C50.7632 15.7949 50.0625 16 49.2285 16H48.8799C48.7158 16 48.5962 15.8599 48.521 15.5796C48.4458 15.2925 48.4082 14.8379 48.4082 14.2158C48.4082 13.6074 48.4458 13.1699 48.521 12.9033C48.5962 12.6367 48.7158 12.5034 48.8799 12.5034H49.2285C49.9463 12.5034 50.4624 12.353 50.7769 12.0522C51.0981 11.7515 51.2896 11.2866 51.3511 10.6577L51.5459 8.38135L54.8579 8.60693L54.6426 11.2422C54.6084 11.5977 54.7007 11.8984 54.9194 12.1445C55.1382 12.3838 55.4663 12.5034 55.9038 12.5034ZM70.813 16H67.501V1.2959H70.813V16ZM78.2061 15.9692L78.1138 15.8154C77.8882 15.8838 77.6387 15.9385 77.3652 15.9795C77.0986 16.0137 76.8354 16.0308 76.5757 16.0308C75.3794 16.0308 74.4565 15.7026 73.8071 15.0464C73.1646 14.3901 72.8433 13.4468 72.8433 12.2163C72.8433 11.2524 72.9902 10.3433 73.2842 9.48877C73.585 8.63428 74.0361 7.94043 74.6377 7.40723C75.2393 6.87402 75.9946 6.60742 76.9038 6.60742C77.7104 6.60742 78.4009 6.8125 78.9751 7.22266C79.5493 7.63281 80.0176 8.19336 80.3799 8.9043C80.749 9.61523 81.019 10.4253 81.1899 11.3345C81.3677 12.2368 81.4565 13.187 81.4565 14.1851C81.4565 15.9897 80.8516 17.4937 79.6416 18.6968C78.4316 19.9067 76.6133 20.9014 74.1865 21.6807L72.6792 18.543C73.52 18.3379 74.313 18.0952 75.0581 17.8149C75.8101 17.5415 76.4595 17.2441 77.0063 16.9229C77.5601 16.6084 77.96 16.2905 78.2061 15.9692ZM78.2983 12.5239C78.2847 11.9087 78.1616 11.3584 77.9292 10.873C77.7036 10.3809 77.3276 10.1348 76.8013 10.1348C76.4048 10.1348 76.0938 10.2954 75.8682 10.6167C75.6494 10.9312 75.54 11.29 75.54 11.6934C75.54 12.0283 75.646 12.2744 75.8579 12.4316C76.0698 12.582 76.3569 12.6572 76.7192 12.6572C76.9927 12.6572 77.2593 12.6436 77.519 12.6162C77.7856 12.5889 78.0454 12.5581 78.2983 12.5239Z" fill="#0AA660" /></svg>
                  </Link>
                  <form className={searchValue ? "nav-bar__input-box active" : "nav-bar__input-box"} onSubmit={e => handleSearchClick(e)}>
                    <input type="text" name="seach" placeholder='جستجو در آگهی ها' value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyDown={(e) => { handleSearchEnter(e) }} />
                    {searchValue && (
                      <div className="nav-bar__input-box-value" onClick={handleSearch}>
                        <p>{searchValue}</p>
                      </div>
                    )}
                  </form>
                </div>

                <div className="nav-bar-left">
                  <div className='nav-bar-left__right'>
                    <Link to={contextSite.userInfoNotEmpty ? '/user-account' : '/login'} className='nav-bar__normal-btn nav-bar__btn'>
                      {contextSite.userInfoNotEmpty ? (
                        <>
                          {contextSite.userInfo.username}
                          <LiaAngleDownSolid />
                        </>
                      ) : (
                        'حساب کاربری'
                      )}
                    </Link>
                    <Link to='/support' className='nav-bar__normal-btn nav-bar__btn'>پشتیبانی</Link>
                  </div>
                  <div className='nav-bar-left__left'>
                    <Link to={contextSite.userInfoNotEmpty ? '/add-advertising' : '/login'} className='nav-bar__add-btn nav-bar__btn'>ثبت آگهی</Link>
                    <a href='#' className={contextSite.userInfoNotEmpty ? "nav-bar__chat-icon active" : "nav-bar__chat-icon"}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.375 14.25H6C3 14.25 1.5 13.5 1.5 9.75V6C1.5 3 3 1.5 6 1.5H12C15 1.5 16.5 3 16.5 6V9.75C16.5 12.75 15 14.25 12 14.25H11.625C11.3925 14.25 11.1675 14.3625 11.025 14.55L9.9 16.05C9.405 16.71 8.595 16.71 8.1 16.05L6.975 14.55C6.855 14.385 6.5775 14.25 6.375 14.25Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 6H12.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 9.75H9.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
            <>
              <div className="nav-bar__content-buttom dfb">
                <div className="nav-bar__bottom-right">
                  <div className="nav-bar__group cup" onClick={openSubMenuHandler}>
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M2 12H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M2 17H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className='nav-bar__bottom-text text1'>دسته بندی آگهی ها</span>
                    <SubMenuNavbar open={openSubMenu} setOpen={setOpenSubMenu} />
                  </div>
                </div>
                <div className="nav-bar__bottom-left">
                  <div className="nav-bar__citys cup">
                    <div className='nav-bar__citys__box' onClick={openLocationModalHandler}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99999 7.83434C8.00515 7.83434 8.81999 7.01949 8.81999 6.01434C8.81999 5.00918 8.00515 4.19434 6.99999 4.19434C5.99483 4.19434 5.17999 5.00918 5.17999 6.01434C5.17999 7.01949 5.99483 7.83434 6.99999 7.83434Z" stroke="#292D32" strokeWidth="1.5" />
                        <path d="M2.11167 4.95234C3.26084 -0.099328 10.745 -0.0934946 11.8883 4.95817C12.5592 7.92151 10.7158 10.4298 9.1 11.9815C7.9275 13.1132 6.0725 13.1132 4.89417 11.9815C3.28417 10.4298 1.44084 7.91567 2.11167 4.95234Z" stroke="#292D32" strokeWidth="1.5" />
                      </svg>
                      <span className='nav-bar__bottom-text text1' >{contextSite.locationName === 'all' ? 'تمام استان ها' : contextSite.locationName.name}</span>
                    </div>
                    <LocationModal open={openLocationModal} setOpen={setOpenLocationModal} />
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </nav>
    </>
  )
}
