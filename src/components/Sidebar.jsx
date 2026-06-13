import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

const Sidebar = ({isOpen,setIsOpen}) => {
  return (
    <aside className =  {`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden w-1/2 min-h-screen transition-all duration-500 fixed bg-gradient-to-r from-gray-800 to-black text-white z-1`}>
      <div className = "flex w-full p-4 justify-end">
        <button onClick={() => { setIsOpen(false) }} className="text-lg font-bold rounded-md flex items-center justify-center md:hidden bg-black text-blue-300 p-2"><FaBars /></button>
      </div>
      <Link to = '/' className = "p-4 flex items-center">
        <MdDashboard className="size-8" />
        Dashboard
      </Link>

      <Link to='/add-job' className="p-4 flex items-center">
        <IoIosAddCircleOutline className="size-8" />
        Add Job
      </Link>

      <Link to='/status' className="p-4 flex items-center">
        <IoMdStats className="size-8" />
        View stats
      </Link>

      <Link to='/calendar' className="p-4 flex items-center">
        <FaCalendarDays className="size-8" />
        Calendar
      </Link>

      <Link to='/jobs' className="p-4 flex items-center">
      <FaBriefcase className="size-8" />
        Jobs
      </Link>

    </aside>
  )
}

export default Sidebar