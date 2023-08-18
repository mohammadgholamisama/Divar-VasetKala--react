import React from 'react'
import './ListGroups.css'
import menus from '../../assets/fakeData/subMenu'

export default function ListGroups() {
    return (
        <section className='lists-group site-container'>
            <h2>دسته ها</h2>
            <ul>
                {menus.map(item => (
                    <li key={item.id}>
                        <a href={item.link}>
                            <img src={item.img} alt="icon" />
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
