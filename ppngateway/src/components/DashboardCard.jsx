import { useContext } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import { StateContext } from "../store/ContextStore";

export default function DashboardCard({icon, title, firstDesc, secondDesc, thirdDesc, fourthDec, last}) {
  const {darkMode} = useContext(StateContext)

  if (!last) return (
    <div 
        className={`flex flex-col ${darkMode ? 'bg-[#22222B] text-[#f5f3f3] border-4' : 'bg-[#f5f3f3] text-[#22222B] border'}  
             w-60 h-[26rem] px-5 py-2 items-center gap-3  border-gray-500 rounded-xl shadow-lg shadow-stone-950`}>
        <div className="flex flex-col items-center text-[#989aa2]">
            <i className={`${icon} p-2 text-[#BA77FF]`}></i>
            <div className="flex items-center gap-1 justify-center">
              <p>{title}</p>
              <IoIosInformationCircle />
            </div>
            
        </div>
      {firstDesc && <div className="flex flex-col items-center">
        <p className="text-purple-600">{firstDesc.money && '$'}{firstDesc.count}</p>
        <p className="text-center">{firstDesc.desc}</p>
      </div>}
        <hr className="w-full border-t-2 border-gray-600" />
      {secondDesc && <div className="flex flex-col items-center">
        <p className="text-red-400">{secondDesc.money && '$'}{secondDesc.count}</p>
        <p className="text-center">{secondDesc.desc}</p>
      </div>}
      <hr className="w-full border-t-2 border-gray-600" />
      {thirdDesc && <div className="flex flex-col items-center">
        <p className="text-yellow-500">{thirdDesc.money && '$'}{thirdDesc.count}</p>
        <p className="text-center">{thirdDesc.desc}</p>
      </div>}
      <hr className="w-full border-t-2 border-gray-600" />
      {fourthDec && <div className="flex gap-5">
        {fourthDec.map((item) => {
            return(
                <div className="text-center">
                    <p className="text-green-400">{item.money && '$'}{item.count}</p>
                    <p>{item.desc}</p>
                </div>
            )
        })}
      </div>}
    </div>
  )
  if(last) return(
    <div 
    className="flex flex-col bg-[#22222B] 
        text-[white] justify-center w-60 h-80 px-5 py-2 items-center gap-3 border-4 border-gray-500 rounded-xl shadow-lg shadow-stone-950">
      <div className="text-4xl"><WiStars/></div>
      <p>You're all caught up! New cards will be added here as they become available.</p>
    </div>
  )
}
