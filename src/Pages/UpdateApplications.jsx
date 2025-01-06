import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateApplications = () => {
  const updateAppData = useLoaderData();
  const {id} = useParams() 
  console.log(updateAppData);

  const {
    title,
    photo,
    email,
    github
  } = updateAppData;

  const handleUpdateApp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    console.log(updateData);



    axios.patch(`https://job-portal89.vercel.app/applications/${id}`,updateData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })


  };

  return (
    <div>
      <div className="w-[70%] mx-auto">
        <form onSubmit={handleUpdateApp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              name="title"
              placeholder="Job Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="company Photo"
              defaultValue={photo}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Link</span>
            </label>
            <input
              type="text"
              name="github"
              placeholder="Github Link"
              defaultValue={github}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white  hover:bg-[#0f70c2]"
            >
              Apply For Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateApplications;
