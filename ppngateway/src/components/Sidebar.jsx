import { useState, useContext } from 'react'
import ppnImg from "../assets/ppnImg.png"
import ppnImgSmall from "../assets/ppnImgSmall.png"
import SidebarItem from './SidebarItem'
import { Link } from 'react-router-dom'
import { StateContext } from '../store/ContextStore'
export default function Sidebar() {
  const [helpIsClicked, setHelpIsClicked] = useState(false)
  const {sidebarOpen} = useContext(StateContext)
  return (
    <div className='flex flex-col h-screen transition-transform duration-1000'>
      {sidebarOpen ? <img src={ppnImg} alt="" className='p-3 bg-white transition-transform duration-500'/> : <img src={ppnImgSmall} />}
      <div className='flex-1 overflow-y-auto custom-scrollbar'>
        <SidebarItem title="Dashboard" link={"/dashboard"} icon="fa-solid fa-chart-column"/>
        <SidebarItem title="Process Transaction" link={"/transaction"} icon="fa-solid fa-dollar-sign"/>
        <SidebarItem title="Batches" link={"/batches"} icon="fa-solid fa-list"/>
        <SidebarItem title="Invoices" link={"/invoice/list"} icon="fa-regular fa-envelope-open"/>
        <SidebarItem title="Customers" link={"/customer/list"} icon="fa-solid fa-briefcase"/>
        <SidebarItem title="Recurring" link={"/recurring"} icon="fa-solid fa-arrows-spin"/>
        <SidebarItem title="Reports" link={"/reports/transactions"} icon="fa-solid fa-file-invoice"/>
        <SidebarItem title="Payment Pages" link={"/payment-pages/list"} icon="fa-solid fa-file-invoice-dollar"/>
        <SidebarItem title="Fraud Controls" link={"/fraud-center"} icon="fa-solid fa-shield-halved"/>
        <SidebarItem title="Control Panels" link={"/control-panel"} icon="fa-solid fa-gear"/>        
      </div>

      <div className='bg-[#131728] relative'>
        {helpIsClicked ?
            <div className='w-[120%] bg-[#404153] text-white z-10 cursor-pointer py-2 mb-5 ml-5 shadow-2xl' 
              onClick={() => setHelpIsClicked(prev => !prev)}>
              <div className='bg-[#2A2B3A] text-white p-3 text-center'>Support</div>
              <div className='flex flex-col'>
                <Link to="mailto:mywondervic@gmail.com" className='flex items-center gap-3 p-3 hover:bg-[#838499] transition-all'>
                  <i class="fa-solid fa-envelope"></i>
                  <p>support@processpayments.com</p>
                </Link>
                <Link to="tel:5403152828" className='flex items-center gap-3 p-3 hover:bg-[#838499] transition-all'>
                  <i class="fa-solid fa-phone"></i>
                  <p>(540) 315-2828</p>
                </Link>
                <div className='p-3'>
                  Email is the fastest way to get a response. We have agents available 24/7/365.
                </div>                
              </div>

            </div> :
            <p className='bg-[#A6A6A6] p-3 w-fit rounded-full cursor-pointer' onClick={() => setHelpIsClicked(prev => !prev)}>?</p>
          }
      </div>
    </div>
  )
}
