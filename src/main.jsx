import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/Shared/ErrorPage/ErrorPage.jsx';
import Login from './Pages/LogIn/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import InstructorPage from './Pages/InstructorPage/InstructorPage.jsx';
import ClassesPage from './Pages/ClassesPage/ClassesPage.jsx';
import DashBoard from './Pages/DashBoard/DashBoard.jsx';
import MySelectedClass from './Pages/DashBoard/MySelectedClass/MySelectedClass.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/instructors",
        element: <InstructorPage/>
      },
      {
        path: "/classes",
        element: <ClassesPage/>,
        loader: () => fetch('http://localhost:5000/classes')
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
    children : [
      {
        path: "mySelected",
        element: <MySelectedClass/>
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
