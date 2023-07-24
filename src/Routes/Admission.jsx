import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const[colleges,setColleges]=useState([])

    useEffect(()=>{
    
    fetch("https://college-access-server-shahadat10033.vercel.app/colleges")
    .then(res=>res.json())
    .then(data=>{
    
    console.log(data)
    setColleges(data)
    })
    
    
    },[])
    return (
        <div>
            <h2 className='py-2 text-center text-4xl text-green-500'  >Click the university you want to admit</h2>
            <ul className='my-8'>
            {colleges.map(college=>(

<li className='py-2 text-center text-xl underline' key={college._id}>


<Link to={`/admission/${college._id}`}>{  college.collegeName}</Link>

</li>




))}
            </ul>
           
        </div>
    );
};

export default Admission;