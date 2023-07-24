import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Colleges = () => {
    const[colleges,setColleges]=useState([])

useEffect(()=>{

fetch("http://localhost:5000/colleges")
.then(res=>res.json())
.then(data=>{

console.log(data)
setColleges(data)
})


},[])


    return (
        <div>
            <h2 className='text-center text-xl text-green-500'>Top colleges of Bangladesh</h2>
       <div className='bg-green-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>

      {colleges.map(college=>(
        <div key= {college._id}className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={college.collegeImage
} alt="Album" className='w-full h-full'/></figure>
  <div className="card-body">
    <h2 className="card-title">{college.collegeName}</h2>
    <Rating style={{ maxWidth: 150 }} value={college.collegeRating} readOnly/>
    <p>Admission date : {college.admissionDate}</p>
    <p>Number of Research: {college.numberOfReasearchOfThatCollege}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm bg-green-500">Details</button>
    </div>
  </div>
</div>
      ))}

       </div>
       
       
        </div>
    );
};

export default Colleges;