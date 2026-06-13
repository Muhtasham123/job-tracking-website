import React from 'react'
import 'react-calendar/dist/Calendar.css'
import {Calendar} from 'react-calendar'
import {useState, useContext} from 'react'
import {context} from "../contexts/ContextProvider"

const MyCalendar = () => {
    const {jobs} = useContext(context)
    const [date, setDate] = useState(new Date())

    const interviewDates = jobs.map((job)=>{
      if(job.status === "interview"){
        return job.date
      }
      return
    })

    console.log(interviewDates)

  return (
    <Calendar
    onChange = {setDate}
    value={date}
    tileClassName={({date, view})=>{
      if (view === 'month'){
        const foramtedDate = date.toISOString().split("T")[0]
        if(interviewDates.includes(foramtedDate)){
          return "interview-date"
        }
      }

      return null
    }}/>
  )
}

export default MyCalendar