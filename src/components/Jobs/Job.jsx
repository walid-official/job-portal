import React from "react";

const Job = ({ job }) => {
  const {
    company_logo,
    title,
    location,
    jobType,
    description,
    category,
    applicationDeadline,
    salaryRange = {},
    company,
  } = job;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body">
          <div className="flex gap-4">
            <img className="w-14" src={company_logo} alt="" />
            <div className="">

            <h2 className="card-title">{company}</h2>
            <h2 className="">{location}</h2>
            </div>
          </div>
          <p className="font-semibold text-2xl">{title}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-[#55a1ff] to-[#55a1ffda] text-white">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
