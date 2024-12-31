import {useContext, useEffect, useState} from 'react'
import { StateContext } from '../store/ContextStore'
import {loginData} from "../utils/data"
import { RiLogoutBoxRLine } from "react-icons/ri";


export default function Navbar() {
  const {handleSideOpen, isLoggedIn, setIsLoggedIn, darkMode, setDarkMode} = useContext(StateContext)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className='bg-[#404153] flex gap-9 sticky top-0'>
      {/* Sidebar Toggle */}
      <i class="
        fa-solid fa-bars-staggered text-[#7493FE] 
        text-xl p-5 border-r-2 border-[#2d2d3c] hover:bg-[#585971] 
        cursor-pointer" onClick={() => handleSideOpen()}></i>

        {/* Dark Mode Toggle */}
      <div className='flex items-center gap-2 p-1 rounded-full text-white bg-[#2A2B3A] h-fit ml-auto my-auto'>
        <div 
          className={`flex items-center justify-center ${darkMode && 'bg-[#B275FE]'} w-6 h-6 rounded-full transition-transform duration-700`}
          onClick={() => setDarkMode(true)}
        >
          <i className={`fa-solid fa-moon`}></i></div>
        <i className={`fa-solid fa-rotate`}></i>
        <div 
          className={`flex items-center justify-center ${!darkMode && 'bg-[#B275FE]'} w-6 h-6 rounded-full transition-transform duration-700`}
          onClick={() => setDarkMode(false)}
        ><i className={`fa-solid fa-sun`}></i></div>
      </div>

      {/* Login Details */}
      <div 
        className='relative text-white px-6 flex items-center gap-2 cursor-pointer hover:bg-[#3c3d4e] transition duration-600'
        onClick={() => setMenuIsOpen(prev => !prev)}>
        {loginData.merchant} / {loginData.user}
        <i class="fa-solid fa-caret-down"></i>
        {menuIsOpen && <div className='absolute top-16 bg-[#404153] px-2 text-lg flex flex-col gap-5 shadow-md shadow-slate-900 z-10'>
          <div className='flex items-center gap-4 p-5 pr-[5rem] border-b-[1px] border-stone-400'>
            <i class="fa-solid fa-key"></i>
            <p>Change Password</p>
          </div>
          <div className='flex items-center gap-4 px-5 pb-5' onClick={() => setIsLoggedIn(prev => !prev)}>
            <RiLogoutBoxRLine size="1.5rem"/>
            <p>Log Out</p>
          </div>
        </div>}
      </div>
    </div>
  )
}
