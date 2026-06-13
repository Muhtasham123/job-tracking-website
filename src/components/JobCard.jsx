import React from 'react'
import {Link} from "react-router-dom"

const JobCard = ({title, jobType, companyLogo, companyName, url, id}) => {
  return (
    <div className = "p-4 rounded-md bg-gradient-to-b from-gray-800 to-black text-white w-full">
        <div className = "flex items-center gap-4">
            <div className = "w-20 h-20 bg-gray-500 text-black flex items-center justify-center text-3xl font-bold">
                  {companyName[0].toUpperCase()}
            </div>
            <h1 className = "text-xl">{companyName}</h1>
        </div>

        <div>Job title : {title}</div>
        <div>Job type : {jobType}</div>


        <div className = "flex gap-4">
            <div className = "h-10 w-30 flex items-center mt-6">
                <a href = {url} className = "text-black rounded-md bg-blue-400 h-full w-full flex items-center justify-center hover:bg-gray-400" target="_blank">Apply</a>
            </div>

            <div className="h-10 w-30 flex items-center mt-6">
            <Link
                to={`job-details/${id}`}
                className="text-black rounded-md bg-blue-400 h-full w-full flex items-center justify-center hover:bg-gray-400"
            >View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default JobCard