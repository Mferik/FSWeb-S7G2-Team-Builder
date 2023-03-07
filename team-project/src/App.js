import {useState} from 'react'
import TeamList from './components/TeamList'
import TeamForm from './components/TeamForm'
import './App.css';

function App() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [newMember, setNewMember] = useState({ name:'', email:'', role:''});

    const handleSubmit = (event) => {
      event.preventDefault();
      setTeamMembers([...teamMembers,newMember])
      setNewMember({name:'', email:'', role:''});
    };

    const handleChange = (event) =>{
      setNewMember({...newMember, [event.target.name]: event.target.value})
    }


  return (
    <div className="App">
      <h1>TEAM BUILDER APP</h1>
      <div className='team-form'>
      <TeamForm
      newMember={newMember}
      handleChange ={handleChange}
      handleSubmit ={handleSubmit}/>
      </div>
      <div className='team-list'>
      <TeamList teamMembers={teamMembers}/>
      </div>
    </div>
  );
}

export default App;
