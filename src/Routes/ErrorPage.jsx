import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../public/404.json";
const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <div className="flex flex-col align-center justify-center ">
        <div className="text-center">
          <p className="text-red-600">{error?.message}</p>
        </div>
        <div className='w-3/4 mx-auto'>
        <Lottie animationData={error404} loop={true} />
          <div className="mt-2 text-center">
            <Link to="/">
              <button className="btn bg-green-500 btn-lg">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;