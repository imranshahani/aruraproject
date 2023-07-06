import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';


export const NavbarItems = [
    {
        title: 'Home',
        path: '/',
        cName: 'navbar-link'
    },
    {
        title: 'Products',
        // path: '/products',
        cName: 'navbar-link'
    },
    {
        title: 'Solutions',
        path: '/solutions',
        cName: 'navbar-link'
    },
    {
        title: 'Brands',
        // path: '/brands',
        cName: 'navbar-link'
    },
    {
        title: 'Gestures',
        path: '/gestures',
        cName: 'navbar-link'
    },
    {
        title: 'Awards',
        path: '/awards',
        cName: 'navbar-link'
    },
    
]







export const SidebarData = [
    {
        title: 'About Us',
        path: '/aboutUs',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'News & Events',
        path: '/newsAndEvents',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Careers',
        path: '/careers',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Books & Case Studies',
        path: '/booksAndCaseStudies',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contactUs',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    
]





export const ProductItems = [
    {
        icon: < TbIcons.TbDeviceIpadHorizontal/>,
        title: "ROOM BOOKING SYSTEM",
        path: '/roomBookingSystem',
        cName: 'submenu-item'
    },
    {
        icon: < SiIcons.SiAnydesk />,
        title: "DESK BOOKING SYSTEM",
        path: '/deskBookingSystem',
        cName: 'submenu-item'
    },
    {
        icon: <GiIcons.GiWireCoil />,
        title: "WIRED & WIRELESS PRESENTER",
        path: '/wired&WirelessPresenter',
        cName: 'submenu-item'
    },{
        icon: <HiIcons.HiSpeakerphone />,
        title: "SPEAKERS",
        path: '/speakers',
        cName: 'submenu-item'
    },
    {
        icon: <BsIcons.BsProjectorFill />,
        title: "PROJECTOR LIFTS & MOUNTS",
        path: '/projectorLifts&Mounts',
        cName: 'submenu-item'
    },
    {
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        title: "PROJECTOR SCREENS",
        path: '/ProjectorScenes',
        cName: 'submenu-item'
    },
    {
        icon: <MdIcons.MdDisplaySettings />,
        title: "INTERACTIVE DISPLAYS",
        path: '/InteractiveDisplays',
        cName: 'submenu-item'
    },
    {
        icon: <FaIcons.FaBroom />,
        title: "DISPLAY MOUNTS & STANDS",
        path: '/DisplayMounts&Stands',
        cName: 'submenu-item'
    },
    {
        icon: <BsIcons.BsEthernet />,
        title: "AV OVER IP SOLUTIONS",
        path: '/AVOverIpSolutions',
        cName: 'submenu-item'
    },
    {
        icon: <ImIcons.ImHome />,
        title: "HOME AUTOMATION",
        path: '/homeApplications',
        cName: 'submenu-item'
    },
    {
        icon: <RiIcons.RiRemoteControlLine />,
        title: "SMART LIGHTING CONTROL",
        path: '/SmartLightingControls',
        cName: 'submenu-item'
    },
    {
        icon: <MdIcons.MdRollerShades />,
        title: "WINDOW SHADES",
        path: '/windowShades',
        cName: 'submenu-item'
    },
    {
        icon: <GoIcons.GoDeviceMobile />,
        title: "DIGITAL SIGNAGE",
        path: '/digitalSignage',
        cName: 'submenu-item'
    },

]






export const BrandsItems = [
    {
        title: 'EVOKO',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'ORIGIN ACOUSTICS',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'AURORA',
        path: '/aurora',
        cName: 'submenu-item'
    },
    {
        title: 'AVOCOR',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'DRAPPER',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'LUTROM',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'PLAYIPP',
        path: '/evoko',
        cName: 'submenu-item'
    },
    {
        title: 'SMS',
        path: '/evoko',
        cName: 'submenu-item'
    },
]