import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import ErrorPage from './Pages/Shared/ErrorPage/ErrorPage.jsx';
import Login from './Pages/LogIn/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import CreateBlog from './Components/CreateBlog/CreateBlog.jsx';
import ManageBlog from './Components/ManageBlog/ManageBlog.jsx';
import Main from './Components/Main/Main.jsx';
import ReadBlog from './Components/ReadBlog.jsx';
import UpdateBlog from './Components/UpdateBlog.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/create-blog",
        element:<PrivateRoute><CreateBlog/></PrivateRoute>,
      },
      {
        path: "/manage-blog",
        element: <PrivateRoute><ManageBlog/></PrivateRoute>,
      },
      {
        path: "/read-blog/:_id",
        element: <PrivateRoute><ReadBlog/></PrivateRoute>,
        loader: ({params}) => fetch(`https://sapience-task-server.vercel.app/post/${params._id}`)
      },
      {
        path: "/update-blog/:_id",
        element: <UpdateBlog/>,
        loader: ({params}) => fetch(`https://sapience-task-server.vercel.app/post/${params._id}`)
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
