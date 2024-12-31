import DashboardCard from '../components/DashboardCard'
import {motion} from "framer-motion"
import DualAxisChart from "../components/DualAxisChart"
import { useContext } from 'react'
import { StateContext } from '../store/ContextStore'

export default function Dashboard() {
  const {darkMode} = useContext(StateContext)
  return (
    <div className='px-5 py-4'>
      <motion.div initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }} className={`flex items-center text-2xl font-bold ${darkMode ? 'text-[#B8BBC7]' : 'text-[#22222B]'}  gap-5 mb-4`}>
        <i className="fa-solid fa-chart-column text-[#BA77FF]"></i>
        <p>Dashboard</p>
      </motion.div>
      <motion.div  initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }} className='flex gap-5 justify-center'>
        <DashboardCard 
          icon="fa-solid fa-dollar-sign" 
          title="Transactions Overview"
          firstDesc={{desc: "Total Count", count: 9, money: false}}
          secondDesc={{desc: "Total Settled", count: "364.00", money: true}}
          thirdDesc={{desc: "Total Refunded", count: "0.00", money: true}}
          fourthDec={[{count: "52.00", money: true, desc: "Average"}, {count: "120.00", money: true, desc: "Highest"}]}
        />
        <DashboardCard 
          icon="fa-regular fa-envelope-open" 
          title="Invoice Overview"
          firstDesc={{desc: "Total Overdue", count: "1.00", money: true}}
          secondDesc={{desc: "Invoice Due", count: 0, money: false}}
          thirdDesc={{desc: "Total Due", count: "0.00", money: true}}
          fourthDec={[{count: "362.00", money: true, desc: "Total Paid"}]}
        />
        <DashboardCard 
          icon="fa-solid fa-arrows-spin" 
          title="Recurring Overview"
          firstDesc={{desc: "Schedules Total", count: "0.00", money: true}}
          secondDesc={{desc: "Schedules Count", count: 0, money: false}}
          thirdDesc={{desc: "Ending Schedules Count", count: 0, money: false}}
          fourthDec={[{count: "52.00", money: true, desc: "Schedules with Expiring Cards"}]}
        />   
        <DashboardCard 
          icon="fa-solid fa-briefcase" 
          title="Top Customers"
          firstDesc={{desc: "Castillo Architecture and Planning", count: "120.00", money: true}}
          secondDesc={{desc: "Eleos Services Inc", count: "108.40", money: true}}
          thirdDesc={{desc: "Norvell Signs", count: "30.20", money: true}}
          fourthDec={[{count: "30.00", money: true, desc: "Christian Crayton & Associates"}]}
        />        
      </motion.div>
      <div className='flex items-center gap-5'>
        <DualAxisChart/>
        <DashboardCard last={true}/>        
      </div>
    </div>
  )
}