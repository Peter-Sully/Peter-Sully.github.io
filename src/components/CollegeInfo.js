import React from 'react'
import './CollegeInfo.css'
const College = ({num, degree, major, college, time}) => {
  return (
    <div className='college'>
            <h2>{degree} {major} -</h2>
            <p1>{college} ({time})</p1>
    </div>
  )
}

export default College