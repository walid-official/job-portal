import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();
  console.log(jobData);

  const {
    _id,
    company_logo,
    title,
    location,
    jobType,
    description,
    category,
    requirements = [],
    applicationDeadline,
    salaryRange = {},
    company,
  } = jobData;

  return (
    <div className="w-[60%] mx-auto my-10">
      <div className="card bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white shadow-xl">
        <div className="card-body">
          <div className="flex gap-4">
            <img className="w-14" src={company_logo} alt="" />
            <div className="">
              <h2 className="card-title">{company}</h2>
              <h2 className="">{location}</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center py-4">
            <p className="font-semibold text-xl">{title}</p>
            <p className="font-semibold text-xl">{category}</p>
            <div className="badge bg-gradient-to-r from-[#0f71c2ae] to-[#55a1ffda]">
              {jobType}
            </div>
            <div className="badge bg-gradient-to-r from-[#0f71c2ae] to-[#55a1ffda]">
              {applicationDeadline}
            </div>
          </div>
          <p>{description}</p>
          <div className="py-2">
            <h2>
              {requirements.map((requirement, index) => (
                <button
                  key={index}
                  className="bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] px-2 rounded-sm py-1 m-1 text-white"
                >
                  {requirement}
                </button>
              ))}
            </h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/applicationForm/${_id}`}>
              <button className="btn bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white">
                Apply Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
