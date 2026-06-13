import {useState, useEffect} from "react"
import axios from "axios"
import JobCard from "./JobCard"
import {ClipLoader} from "react-spinners"

const JobsList = () => {
    const [jobs, setJobs ] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchJobs = async()=>{
        try {
            const response = await axios.get("https://remotive.com/api/remote-jobs")
            console.log(response.data)
            setJobs(response.data.jobs)
        } catch (error) {
            setError(true)
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchJobs()
    }, [])

  return (
    loading ? 
    <div className="w-screen h-screen flex items-center justify-center"><ClipLoader /></div>
    :
    error ?
    <div className = "w-screen h-screen flex items-center justify-center">
        <h1 className = "text-2xl font-bold">Something went wrong</h1>
    </div>
    :
    <div className = "mt-20 flex flex-wrap justify-center gap-8">
        {
            jobs.map((job)=>{
                return <li key = {job.id} className = "list-none lg:w-[45%] w-full">
                    <JobCard title = {job.title} companyLogo={job.company_logo} companyName={job.company_name} jobType={job.job_type} url = {job.url} id = {job.id}/>
                </li>
            })
        }
    </div>
  )
}

export default JobsList