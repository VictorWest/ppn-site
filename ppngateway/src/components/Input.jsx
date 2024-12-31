import { GoTriangleDown } from "react-icons/go";

export default function Input({children, noTriangle}) {
  return (
<div
      className="flex items-center justify-between bg-[#313242] h-10 
          border border-gray-600 rounded-sm text-sm font-light cursor-pointer group hover:bg-[#4C4D5A] mt-1"
    >
      {children}
      {!noTriangle && <div className="text-[#6B7280] text-xl">
        <GoTriangleDown />
      </div>}
    </div>
  )
}
