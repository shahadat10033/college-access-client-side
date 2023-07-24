import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const MyColleges = () => {
    const[colleges,setColleges]=useState([])
    const {user}=useContext(AuthContext)
console.log(user.email)
    useEffect(()=>{
    
    fetch(`http://localhost:5000/myColleges?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
    
    console.log(data)
    setColleges(data)
    })
    
    
    },[])


    return (
        <div className='grid gap-4 p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {colleges?.map(college=>(

<div key="college._id"className="card w-96 bg-black text-green-500">
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">{college.university}</h2>
    <p>Candidate Name : {college.name}</p>
    <p>Candidate Email : {college.email}</p>
    <p>Subject : {college.subject}</p>
    <p>Phone : {college.phone}</p>
    <p>Address : {college.address}</p>
    <p>Date Of Birth : {college.dateOBirth}</p>
    <div className="card-actions justify-start items-end">
     <textarea name="feedback" placeholder='give your Feedback here'/>
      <button className="btn btn-sm text-white bg-green-500">Feedback</button>
    </div>
  </div>
</div>

            ))}
        </div>
    );
};

export default MyColleges;