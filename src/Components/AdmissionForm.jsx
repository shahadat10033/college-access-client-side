import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/AuthProvider';

const AdmissionForm = () => {
    const {id}=useParams()
    const {user}=useContext(AuthContext)
    console.log(id)
    const[college,setCollege]=useState([])

    useEffect(()=>{
    if(id){
    fetch(`https://college-access-server-shahadat10033.vercel.app/admission/${id}`)
    .then(res=>res.json())
    .then(data=>{
    
    console.log(data)
    setCollege(data)
    })
    }
    
    },[])
    const handleSubmit=(e)=>{
e.preventDefault()
const form=e.target
const university=form.university.value
const name=form.name.value
const email=form.email.value
const subject=form.subject.value
const phone=form.phone.value
const address=form.address.value
const dateOBirth=form.dateOBirth.value
const image=form.image.value
const info ={university,name, email, subject, phone, address, dateOBirth, image}



fetch("https://college-access-server-shahadat10033.vercel.app/admissionForm", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "success...",
          text: " form submitted successfully!",
        });
      }
    });
form.reset()

    }
    return (
        <div className="hero min-h-screen bg-green-200">

   
    <div className="card my-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-500">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">University Name</span>
          </label>
          <input type="text" required name="university" value={college.collegeName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidates Name</span>
          </label>
          <input type="text"required  name="name" value={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidates Email</span>
          </label>
          <input type="email"required name="email" value={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">subject</span>
          </label>
          <input type="text"required name="subject" placeholder=" subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input type="number"required  name="phone" placeholder=" phone number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="address"required  name="address" placeholder=" Address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="date" required name="dateOBirth" placeholder="Date of Birth" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input type="text"required  name="image" value={user?.photoURL}className="input input-bordered" />
        </div>
       
        <div className="form-control mt-6">
          <button type='submit' className="btn bg-green-400">Submit</button>
        </div>
      </form>
    </div>
  
</div>
    );
};

export default AdmissionForm;