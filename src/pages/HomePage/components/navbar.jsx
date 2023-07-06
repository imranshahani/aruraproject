import React, { useState } from 'react'
import companyLogo from '../../../assets/logo.png'
import '../styles/navbar.css';
import { useMediaQuery } from 'react-responsive'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarAndNavbarItems';
import { IconContext } from 'react-icons';
import { NavbarItems } from './sidebarAndNavbarItems';
import { BrandsDropdown, ProductsDropdown } from './navbarDropdown';



function Navbar() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);


  return (

    <>
      {/* THIS IS THE DESKTOP OR LAPTOP VIEW */}
      {isDesktopOrLaptop &&
        <div>
          {/* THIS SECTION IS BELONGS TO SIDE BAR  */}
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sidebar ? "nav-menu active" : "nav-menu"} onMouseLeave={() => { setSidebar(false) }} >
              <ul className='nav-menu-items' onClick={showSideBar}>

                <li className="navbar-toggle">
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>

                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span> {item.title} </span>
                      </Link>
                    </li>
                  )
                })}

              </ul>
            </div>
          </IconContext.Provider>

          {/* -----------END SECTION----------- */}



          {/* THIS SECTION BELONGS TO NAVBAR */}
          <nav className="main-nav">


            <div className="menu-bar">
              <Link to='#' className='menu-bar-icon' onClick={showSideBar}>
                < FaIcons.FaBars />
              </Link>
            </div>

            <div className='navbar-links'>
              <ul>
                {NavbarItems.map((items, index) => {



                  if (items.title === "Products") {
                    return (
                      <li key={index}
                        onMouseEnter={() => setProductsDropdown(true)}
                        onMouseLeave={() => setProductsDropdown(false)}>
                        <Link to={items.path}
                          className={items.cName}>
                          {items.title}
                        </Link>
                        {productsDropdown && <ProductsDropdown />}
                      </li>
                    )
                  }



                  if (items.title === "Brands") {
                    return (
                      <li key={index}
                        onMouseEnter={() => setBrandsDropdown(true)}
                        onMouseLeave={() => setBrandsDropdown(false)}>
                        <Link to={items.path}
                          className={items.cName}>
                          {items.title}
                        </Link>
                        {brandsDropdown && <BrandsDropdown />}
                      </li>
                    )
                  }



                  return (
                    <li key={index}>
                      <Link to={items.path} className={items.cName}>
                        {items.title}
                      </Link>
                    </li>
                  )


                })}

              </ul>


              <div className='navbar-searchbar'>
                <input type="text" placeholder='Search anything here ...'>
                </input>
                <button> < FaIcons.FaSearch /> </button>
              </div>

            </div>

            <div className='logo'>
              <Link to='/'>
                <img src={companyLogo} alt="companyLogo" height={"70px"} width={"100px"} />
              </Link>
            </div>

          </nav>
          {/* -----------END SECTION----------- */}
        </div>
      }


      {/* THIS IS THE TBALET OR MOBILE VIEW */}
      {isTabletOrMobile &&
        <div>
          {/* THIS SECTION IS BELONGS TO SIDE BAR  */}
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sidebar ? "nav-menu active" : "nav-menu"} onMouseLeave={() => { setSidebar(false) }} >
              <ul className='nav-menu-items' onClick={showSideBar}>

                <li className="navbar-toggle">
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>

                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span> {item.title} </span>
                      </Link>
                    </li>
                  )
                })}

              </ul>
            </div>
          </IconContext.Provider>

          {/* -----------END SECTION----------- */}




          {/* THIS SECTION BELONGS TO NAVBAR */}
          <nav className="main-nav">


            <div className="menu-bar">
              <Link to='#' className='menu-bar-icon' onClick={showSideBar}>
                < FaIcons.FaBars />
              </Link>
            </div>

            <div className='navbar-links'>
              <ul>
                {NavbarItems.slice(1, 4).map((items, index) => {



                  if (items.title === "Products") {
                    return (
                      <li key={index}
                        onMouseUpCapture={() => setProductsDropdown(true)}
                        onMouseOutCapture={() => setProductsDropdown(false)}>
                        <Link to={items.path}
                          className={items.cName}>
                          {items.title}
                        </Link>
                        {productsDropdown && <ProductsDropdown />}
                      </li>
                    )
                  }



                  if (items.title === "Brands") {
                    return (
                      <li key={index}
                        onMouseEnter={() => setBrandsDropdown(true)}
                        onMouseLeave={() => setBrandsDropdown(false)}>
                        <Link to={items.path}
                          className={items.cName}>
                          {items.title}
                        </Link>
                        {brandsDropdown && <BrandsDropdown />}
                      </li>
                    )
                  }



                  return (
                    <li key={index}>
                      <Link to={items.path} className={items.cName}>
                        {items.title}
                      </Link>
                    </li>
                  )


                })}

              </ul>


              <div className='navbar-searchbar'>
                <input type="text" placeholder='Search anything here ...'>
                </input>
                <button> < FaIcons.FaSearch /> </button>
              </div>

            </div>

            <div className='logo'>
              <a href='/'>
                <img src={companyLogo} alt="companyLogo" height={"70px"} width={"100px"} />
              </a>
            </div>

          </nav>
          {/* -----------END SECTION----------- */}
        </div>
      }

    </>
  )
}

export default Navbar;