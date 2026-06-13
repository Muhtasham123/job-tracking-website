import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import { ClipLoader } from "react-spinners"

const JobDetails = () => {
    const {id} = useParams()
    const [job, setJob] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchJob = async()=>{
        console.log("hello")
            try {
                const response = await axios.get("https://remotive.com/api/remote-jobs")
                const jobs = response.data.jobs

                const requiredJob = jobs.filter((job)=>{
                    return job.id == id
                })

                console.log(requiredJob[0])
                setJob(requiredJob[0])
            } catch (error) {
                setError(true)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
    
        useEffect(()=>{
            fetchJob()
        }, [id])
    
  return (
      loading ?
      <div className="w-screen h-screen flex items-center justify-center"><ClipLoader /></div>
      :
      error ?
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
      </div>
      :
    <div className = "lg:w-[90%] w-full p-4 bg-gradient-to-b from-gray-800 to-black text-white mt-20">
          <div className="flex items-center gap-4">
              <div className="w-40 h-40 bg-gray-500 text-black flex items-center justify-center text-3xl font-bold">
                  {job.company_name[0].toUpperCase()}
              </div>
              <h1 className="text-4xl font-bold">{job.company_name}</h1>
          </div>

          <div className = "mt-8">
            <div className = "text-xl font-bold">Location : {job.candidate_required_location}</div>
            <div className="text-xl font-bold">Job Title : {job.title}</div>
            <div className="text-xl font-bold">Job Type : {job.job_type}</div>
            <div className="text-xl font-bold">Category : {job.category}</div>
            <div className="text-xl font-bold">Salary : {job.salary ? job.salary : "Not Mentioned"}</div>
          </div>

          <div className="h-10 w-30 flex items-center mt-6">
              <a href={job.url} className="text-black rounded-md bg-blue-400 h-full w-full flex items-center justify-center hover:bg-gray-400" target="_blank">Apply</a>
          </div>

          <div className = "mt-15">
            <h1 className = "text-2xl font-bold">Description</h1>
          <div dangerouslySetInnerHTML={{ __html: job.description }}/>
          </div>

          <div className="mt-15 text-blue-500 font-bold">
              {
                job.tags.map((tag)=>{
                    return <span>#{tag}</span>
                })
              }
          </div>
          
    </div>
  )
}

export default JobDetails