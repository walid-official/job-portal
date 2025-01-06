import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAxios from "../Hooks/useAxios";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  const axiosSecure = useAxios();

  useEffect(() => {
    // axios.get(`https://job-portal89.vercel.app/applications/${user?.email}`,{withCredentials: true})
    // .then(res =>  setApplications(res.data))
    axiosSecure
      .get(`/applications/${user?.email}`)
      .then((res) => setApplications(res.data));
  }, [user]);

  console.log(applications);

  const handleDeleteApplication = (id) => {
    axios
      .delete(`https://job-portal89.vercel.app/applications/${id}`)
      .then((response) => {
        console.log(response);
        const remaining = applications.filter(
          (application) => application._id !== id
        );
        setApplications(remaining);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[60%] mx-auto">
      {applications.map((application, index) => (
        <div key={index} className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Company Logo</th>
                <th>Job Title</th>
                <th>Github Link</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={application.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{application.title}</div>X
                  </div>
                </td>
                <td>
                  <div>
                    <div className="text-sm opacity-50">
                      {application.github}
                    </div>
                  </div>
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteApplication(application._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                  <Link to={`/updateApplication/${application._id}`}>
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                </th>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyApplication;
