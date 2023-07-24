import React, { useEffect, useState } from 'react';

const PopularCollege = () => {
    const[colleges,setColleges]=useState([])

    useEffect(()=>{
    
    fetch("http://localhost:5000/popularColleges")
    .then(res=>res.json())
    .then(data=>{
    
    console.log(data)
    setColleges(data)
    })
    
    
    },[])
    


    return (
        <div>
            <h2 className='text-center text-green-500 text-2xl'>Popular colleges</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-6">
{
colleges.map(college=>(

<div key={college._id} className="m-6 card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={college.collegeImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{college.collegeName}</h2>
    <p>Admission Date : {college.admissionDate}</p>
    <p>Sports : {college.sports[0]}, {college.sports[1]}, {college.sports[2]}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm bg-green-500 text-white">Details</button>
    </div>
  </div>
</div>

))


}


       </div>
       
       
        </div>
    );
};

export default PopularCollege;