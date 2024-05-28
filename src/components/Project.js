import React from 'react'

const Project = ({ name, year, info}) => {
  return (
    <div className='project'>
        <h2>{name} - {year}</h2>
        <ul>
        {info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
  )
}

export default Project