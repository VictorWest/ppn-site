import { useState } from "react";
import { FaCalendarDay } from "react-icons/fa";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { GoTriangleDown } from "react-icons/go";

const RecurringScheduleForm = () => {
  const [formData, setFormData] = useState({
    recurringSchedule: false,
    paymentTitle: "",
    firstRun: "",
    frequency: "",
    repeatType: "times",
    repeatCount: "",
    billFirstTransaction: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [recurringDetailsShow, setRecurringDetailsShow] = useState({
    title: false,
    firstRun: false,
    frequency: false
  })
  const [isRecurring, setIsRecurring] = useState(false)
  const dateArray = ["daily", "monthly", "yearly"]
  return (
    <form className="bg-[#2A2B3A] text-gray-100 w-full h-full text-sm font-thin">
        <div className="flex items-center gap-2 text-lg mr-auto mb-10 cursor-pointer" onClick={() => setIsRecurring(prev=>!prev)}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Create recurring schedule</label>
        </div>
        <div className="flex items-center gap-3">
        {/* Payment Title */}
          <div className='relative' onFocus={() => setRecurringDetailsShow( prev => ({
              ...prev,
              title: true
            }))} onBlur={() =>  setRecurringDetailsShow(prev => ({
              ...prev,
              title: false
            }))}>
            {(recurringDetailsShow.title || formData.paymentTitle !== '') && <label htmlFor="" className='absolute -top-7 left-0'>Payment Title</label>}
            <input 
              type="text" 
              className='bg-[#313242] p-2 outline-none text-white' 
              placeholder={!recurringDetailsShow.title && ` Payment Title*`} 
              onChange={(e) => setFormData(prev => ({...prev, paymentTitle: e.target.value}))}
              disabled={isRecurring}  
            />
          </div>

          {/* First Run Date */}
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="First Run*"           
                sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#313242",
              fontSize: "0.875rem",
              fontWeight: 300, 
              color: "white",
              "& fieldset": {
                borderColor: "#44475A",
              },
              "&:hover fieldset": {
                borderColor: "#6272A4",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6272A4",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888E9B",
              fontSize: "0.875rem",
              fontWeight: 50
            },
            "& .MuiSvgIcon-root": {
              color: "#888E9B",
            },
          }}/>
              </DemoContainer>
            </LocalizationProvider>            
          </div>

          <div
            id="frequency"
            className="relative flex-1 w-fit"
            onFocus={() =>
              setRecurringDetailsShow((prev) => ({
                ...prev,
                frequency: true,
              }))
            }
            onBlur={() =>
              setRecurringDetailsShow((prev) => ({
                ...prev,
                frequency: false,
              }))
            }
          >
            {(recurringDetailsShow.frequency || formData.frequency !== "") && (
              <label htmlFor="" className="absolute -top-7 left-0">
                Frequency
              </label>
            )}
            <div className="flex bg-[#313242] p-2 items-center relative cursor-pointer">
              <input
                type="text"
                className="outline-none bg-[#313242] text-white w-full cursor-pointe"
                placeholder={!recurringDetailsShow.frequency && `Frequency`}
                onChange={(e) =>
                  setRecurringDetailsShow((prev) => ({ ...prev, frequency: e.target.value }))
                }
                value={formData.frequency}
              />
              <div className={`text-white ${recurringDetailsShow.frequency && 'rotate-180'}`}>
                <GoTriangleDown />
              </div>
              {recurringDetailsShow.frequency && <ul className='absolute -top-50 bg-[#404153] text-white text-lg w-fit mt-2 h-fit overflow-y-auto custom-scrollbar shadow-lg z-10'>
                {dateArray.map((item) => {
                  return <li onClick={() => {
                    setFormData(prev => ({...prev, frequency: item}))
                  }}
                  className='p-3 hover:bg-[#313242] cursor-pointer'>{item}</li>
                })}</ul>
              }              
            </div>
          </div>
        </div>
    </form>
  );
};

export default RecurringScheduleForm;
