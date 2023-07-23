import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import register from "../../public/register.json";
import SocialMedia from '../Shared/SocialMedia';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {


  const [error, setError] = useState("");
  const { emailRegister, profileUpdate, logOut } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    // const image = form.photoURL.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(name, password, email);
 
    emailRegister(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        
        // setUser(user);
        
        profileUpdate(name);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'registration complete successfully',
          showConfirmButton: false,
          timer: 1500
        })

        logOut();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
          
        })
      });

    form.reset();
  };

    return (
        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2'><Lottie animationData={register} loop={true} /></div>
            <div className='w-full'>
            
   <div className="  hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Name</span>
          </label>
          <input name="name" required type="text" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Email</span>
          </label>
          <input name="email" required type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" required type="password" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-green-500"  type="submit">Register</button>
        </div>
      </form>
      <p className='text-center'>Already have an account? <Link to="/login" className='underline text-green-500'>Login here</Link></p>
      <SocialMedia></SocialMedia>
    </div>
  </div>

            </div>
        </div>
    );
};

export default Register;