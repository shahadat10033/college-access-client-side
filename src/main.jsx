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
import ProtectedRoute from './Routes/ProtectedRoute';

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
        element: <ProtectedRoute><Admission /></ProtectedRoute>,
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />,
       
      },
      {
        path: "/mycolleges",
        element:<ProtectedRoute> <MyColleges /></ProtectedRoute>,
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
