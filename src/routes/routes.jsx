import { createBrowserRouter } from "react-router-dom";
import Layout from "./../layouts/Layout";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import All_Jobs from "./../pages/All_Jobs";
import Dashboard from "../layouts/Dashboard";
import Profile from "./../pages/Profile";
import Post_Job from "./../pages/Post_Job";
import Companies from "./../pages/Companies";
import Categories from "./../pages/Categories";
import PrivateRoute from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/alljobs",
        element: <All_Jobs></All_Jobs>,
      },
      {
        path: "/companies",
        element: <Companies></Companies>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/postjob",
        element: (
          <PrivateRoute>
            <Post_Job></Post_Job>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [],
  },
]);

export default router;
