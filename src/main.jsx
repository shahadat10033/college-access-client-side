import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Routes/Home';
import Colleges from './Routes/Colleges';
import Admission from './Routes/Admission';
import MyColleges from './Routes/MyColleges';
import Register from './Routes/Register';
import Login from './Routes/Login';
import Root from './Components/Root';
import ErrorPage from './Routes/ErrorPage';
import AuthProvider from './Firebase/AuthProvider';
import AdmissionForm from './Components/AdmissionForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />,
        // loader: ({ params }) => {
        //   return fetch(
        //     `https://localhost:5000/admission/${params.id}`
        //   );
        // },
      },
      {
        path: "/mycolleges",
        element: <MyColleges />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  
  </React.StrictMode>,
)
