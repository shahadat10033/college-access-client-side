import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {googleSignUp, githubSignUp}=useContext(AuthContext)
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignUp=()=>{
        googleSignUp()
        .then((result) => {
            const user = result.user;
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
          });

        
    }
    const handleGithubSignUp=()=>{
        githubSignUp()
        .then((result) => {
            const user = result.user;
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
            console.log(errorMessage);
          });

    }
    return (
        <div className='pb-4'>
            <div className="divider">OR</div>
          <div className='text-center'> 
           <button onClick={handleGoogleSignUp} className="me-4 btn btn-circle btn-outline">
  <img src="google.png" alt="" className='w-full rounded-full' />
</button>
<button onClick={handleGithubSignUp} className="btn btn-circle btn-outline">
<img src="github-logo.png" alt=""  />
</button></div>
        </div>
    );
};

export default SocialMedia;