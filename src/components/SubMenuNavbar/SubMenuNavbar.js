import React, { useState, useContext } from 'react';
import './SubMenuNavbar.css';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import menus from '../../assets/fakeData/subMenu';
import { Link } from 'react-router-dom';
import { context } from '../../context/context'

export default function SubMenuNavbar({ open, setOpen }) {
    const contextSite = useContext(context)
    const [activeItemId, setActiveItemId] = useState(1);

    const handleItemHover = (id) => {
        setActiveItemId(id - 1);
    };

    return (
        <>
            <div className={open ? 'nav-bar__group-sub active' : 'nav-bar__group-sub'} >
                <div className="nav-bar__group-sub-menu" onClick={() => setOpen(prev => !prev)}>
                    <div className="nav-bar__group-sub-menu-list">
                        <Link to={contextSite.locationName === 'all' ? '/list/all' : contextSite.locationName.link} className="nav-bar__group-sub-menu-all">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.75 3.06043L11.64 7.95043C12.2175 8.52793 12.2175 9.47293 11.64 10.0504L6.74999 14.9404" stroke="#9E9B9B" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h6>همه آگهی ها</h6>
                        </Link>
                        <ul>
                            {menus.map(item => (
                                <li
                                    className={`nav-bar__group-sub-li dfb cup ${activeItemId === item.id - 1 ? 'active' : ''}`}
                                    key={item.id}
                                    onMouseEnter={() => handleItemHover(item.id)}
                                >
                                    <div>
                                        <img src={item.img} alt="" />
                                        <span className='nav-bar__group-sub-li-title'>{item.title}</span>
                                    </div>
                                    <LiaAngleLeftSolid />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {menus[activeItemId].subMenus.map((sub, index) => (
                        <div className="nav-bar__group-sub-menu-list-items" key={index}>
                            <a href={menus[activeItemId].link} className='nav-bar__group-sub-menu-list-text all'>همه آگهی های {menus[activeItemId].title} <LiaAngleLeftSolid /></a>
                            <div className="nav-bar__group-sub-menu-list-item" >
                                {sub.sub.map(item => (
                                    <div className={`nav-bar__group-sub-menu-list-items-box ${!item.subTitle && 'mt-45'}`} key={item.id}>
                                        {item.subTitle && (
                                            <a href='#' className='nav-bar__group-sub-menu-list-text'>{item.subTitle} <LiaAngleLeftSolid /></a>
                                        )}
                                        {item.subTitle ? (
                                            <ul>
                                                {item.subMenuItems.map(subItem => (
                                                    <li key={subItem.id}>
                                                        <a href={subItem.link}>{subItem.title}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <ul className='title'>
                                                {item.subMenuItems.map(subItem => (
                                                    <li key={subItem.id}>
                                                        <a href={subItem.link} className='nav-bar__group-sub-menu-list-text'>{subItem.title} <LiaAngleLeftSolid /></a>

                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
