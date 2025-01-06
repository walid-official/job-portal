import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import ErrorPage from "../../Pages/ErrorPage";
import JobDetails from "../../Pages/JobDetails";
import { path } from "motion/react-client";
import ApplicationForm from "../../Pages/ApplicationForm";
import MyApplication from "../../Pages/MyApplication";
import UpdateApplications from "../../Pages/UpdateApplications";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "jobDetails/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params}) => fetch(`https://job-portal89.vercel.app/jobs/${params.id}`)
        },
        {
          path: "applicationForm/:id",
          element: <ApplicationForm></ApplicationForm>,
          loader: ({params}) => fetch(`https://job-portal89.vercel.app/jobs/${params.id}`)
        },
        {
          path: "applications",
          element: <MyApplication></MyApplication>
        },
        {
          path: "updateApplication/:id",
          element: <UpdateApplications></UpdateApplications>,
          loader: ({params}) => fetch(`https://job-portal89.vercel.app/applications/${params.id}`)
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);
export default router