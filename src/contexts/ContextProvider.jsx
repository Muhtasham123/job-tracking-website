import {createContext, useState, useEffect} from 'react'

export const context = createContext()

const ContextProvider = ({children}) => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]')
        setJobs(savedJobs)
    }, [])
  return (
    <context.Provider value = {{jobs, setJobs}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider