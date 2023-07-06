import React, { useState } from 'react';
import { BrandsItems, ProductItems } from './sidebarAndNavbarItems';
import { Link } from 'react-router-dom';
import '../styles/navbarDropdown.css'


export const ProductsDropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
                {ProductItems.map((items, index) => {
                    return (
                        <li key={index} >
                            <Link to={items.path} className={items.cName} onClick={() => setDropdown(false)}>
                                {items.icon}
                                <br />
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export const BrandsDropdown = () => {

    const [dropdown, setDropdown] = useState(false);
    
    return (
        <>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
                {BrandsItems.map((items, index) => {
                    return (
                        <li key={index} >
                            <Link to={items.path} className={items.cName} onClick={() => setDropdown(false)}>
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
}
