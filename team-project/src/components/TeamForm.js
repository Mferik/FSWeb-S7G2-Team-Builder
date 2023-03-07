import React from 'react'
import './TeamForm.css'
const TeamForm = ({handleChange,handleSubmit,newMember}) => {
  return (
    <div className='form-wrapper'>
    <form onSubmit={handleSubmit}>
        <label>
            Name
            <input 
            type="text"
            name='name'
            onChange={handleChange}
            value={newMember.name}
            placeholder='Enter your name...'
            />
        </label>
        <label>
            E-Mail
            <input 
            type="text"
            name='email'
            onChange={handleChange}
            value={newMember.email}
            placeholder='Enter your E-Mail...'
            />
        </label>
        <label>
            Role
            <input 
            type="text"
            name='role'
            onChange={handleChange}
            value={newMember.role}
            placeholder='Enter your role...'
            />
        </label>
        <button>Add New Team Member</button>
    </form>
    </div>
  )
}

export default TeamForm