import React, { useContext, useRef, useState } from 'react';
import Lottie from "lottie-react";
import login from "../../public/login.json";
import SocialMedia from '../Shared/SocialMedia';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {

  const [error, setError] = useState("");
  const emailRef=useRef()
  const { emailLogin, setUser,auth } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(`login page`, location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);

    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'login success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
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
  };
  const handleResetPassword=(e)=>{

const email=emailRef.current.value
if(!email){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text:" provide your email",
   
  })}
  sendPasswordResetEmail(auth,email)
  .then(()=>{

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'plz check your email',
      showConfirmButton: false,
      timer: 1500
    })
  })
  .catch(error=>{
    console.log(error)
  })

  }

    return (
        <div className='flex flex-col md:flex-row items-center mx-auto'>
        <div className='w-full md:w-1/2 md:ps-4'><Lottie animationData={login} loop={true} /></div>
        <div className='w-full'>
        
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin}className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text" >Email</span>
      </label>
      <input name="email" ref={emailRef} required type="email" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" required type="password" placeholder="password" className="input input-bordered" />
      
    </div>
    <div className="form-control mt-6">
      <button className="btn text-white bg-green-500"  type="submit">Login</button>
    </div>
  </form>
  <p  className="text-center link link-hover"onClick={handleResetPassword}>Reset password?</p>
  <p className='text-center'>Don't have an account? <Link to="/registration" className='underline text-green-500'>Register here</Link></p>
  <SocialMedia></SocialMedia>
</div>
</div>

        </div>
    </div>
    );
};

export default Login;