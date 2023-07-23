import React from 'react';
import Lottie from "lottie-react";
import login from "../../public/login.json";
import SocialMedia from '../Shared/SocialMedia';

const Login = () => {
    return (
        <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2'><Lottie animationData={login} loop={true} /></div>
        <div className='w-full'>
        
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text" >Email</span>
      </label>
      <input name="email" type="email" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="password" placeholder="password" className="input input-bordered" />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Reset password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn text-white bg-green-500"  type="submit">Login</button>
    </div>
  </form>
  <SocialMedia></SocialMedia>
</div>
</div>

        </div>
    </div>
    );
};

export default Login;