import React from 'react'
import { useState } from 'react'
import Home from './Home';
function Addnewdoctor() {
    let [name,setName]=useState('');
    let [age,setAge]=useState('');
    let [gender,setGender]=useState('');
    let [specialization,setSpecialization]=useState('');
    let [salary,setSalary]=useState('');

    let [newdoctor,setNewdoctor]=useState(null)
    function handlesubmit(event){
        event.preventDefault()
        setNewdoctor({id:Date.now(),name,age,gender,specialization,salary})
        console.log(newdoctor)
    }
  return (
    <div className='addnewdoctor'>
        <h1>Addnewdoctor</h1>
        <form action="" className="formcontainer" onSubmit={handlesubmit}>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter Doctor Name' />
            <input onChange={(e)=>setAge(e.target.value)} value={age} type="text" placeholder='Enter age' />
            <input onChange={(e)=>setSpecialization(e.target.value)} value={specialization} type="text" placeholder='Enter Specialization' />
            <select onChange={(e)=>setGender(e.target.value)} value={gender} name="" id="">
                <option value="" disabled slelcted>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input onChange={(e)=>setSalary(e.target.value)} value={salary} type="text" placeholder='Enter Salary' />
            <button type='submit'>Add Doctor</button>
        </form>
        <Home newdoctor={newdoctor}/>
    </div>
  )
}

export default Addnewdoctor