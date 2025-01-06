import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const ApplicationForm = () => {
    const applicationData = useLoaderData();
    const {user} = useContext(AuthContext);
    const {
        company_logo,
        title
      } = applicationData;

      const handleJobApplication = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const email = user?.email;
        
        const applicantData = {
          ...initialData,email
        }
        axios.post('https://job-portal89.vercel.app/applications',applicantData)
        .then(response => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      }
    
  return (
    <div className="w-[70%] mx-auto">
      <form onSubmit={handleJobApplication} className="card-body">
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
            defaultValue={company_logo}
            className="input input-bordered"
            required
          />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github Link</span>
          </label>
          <input
            type="text"
            name="github"
            placeholder="Github Link"
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
  );
};

export default ApplicationForm;
