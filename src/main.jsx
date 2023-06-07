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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

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
