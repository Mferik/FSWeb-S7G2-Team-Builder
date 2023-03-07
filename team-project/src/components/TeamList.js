import React from 'react'
import './TeamList.css'
const TeamList = ({teamMembers}) => {
  return (
    <div className='list-wrapper'>
      {teamMembers.map((member,index) =>(
        <div className='list-item-wrapper' key={index}>
        <span className='list-item'>
         Name: {member.name}
        </span>
        <span className='list-item'>
          Email: {member.email}
        </span>
        <span className='list-item'>
          Role: {member.role}
        </span>
        </div>
      ))}
    </div>
  )
}

export default TeamList