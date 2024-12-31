import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { StateContext } from '../store/ContextStore'
export default function SidebarItem({icon, title, link}) {
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if(location.pathname === link){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }, [location, link])

    const {sidebarOpen} = useContext(StateContext)
  return (
    <Link to={link} className={`flex items-center gap-3 p-3 
        bg-[#131728] text-[#B8BBC7] text-xl cursor-pointer transition-all border-l-4
            ${!sidebarOpen && 'justify-center pb-5'}
            ${isActive && ' border-[#BA77FF] text-white bg-[#33343f]'} 
            ${!isActive && 'hover:bg-[#0f1220] border-transparent'}
        `}>
        {<i className={`${icon} ${isActive && 'text-[#BA77FF]'} ${sidebarOpen && 'text-base'}`}></i>}
      {sidebarOpen && title}
    </Link>
  )
}
