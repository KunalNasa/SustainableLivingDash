import React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './routes/App.jsx'
import Tips from './routes/Tips.jsx';
import Header from './components/Header.jsx';
import CarbonFP from './routes/CarbonFP.jsx';
import UserProfile from './routes/UserProfile.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tips",
    element: <><Header/> <Tips/></>,
  },
  {
    path: "/carbon",
    element: <><Header/> <CarbonFP/></>,
  },
  {
    path: "/profile",
    element: <><Header/> <UserProfile/></>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
