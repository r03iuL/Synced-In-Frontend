import React, { useState, useEffect } from "react";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [updatedJob, setUpdatedJob] = useState({
    _id: "",
    id: "",
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    requirements: [],
    posted_date: "",
    closing_date: "",
    category: "",
  });
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://synced-in-backend.vercel.app/jobsstored"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await fetch("/companies.json"); // Adjust endpoint as per your project
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const openModal = (jobId) => {
    const jobToEdit = jobs.find((job) => job._id === jobId);
    if (jobToEdit) {
      setEditingJob(jobId);
      setUpdatedJob({
        ...jobToEdit,
      });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingJob(null);
    setUpdatedJob({
      _id: "",
      id: "",
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
      requirements: [],
      posted_date: "",
      closing_date: "",
      category: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleRequirementsChange = (e, index) => {
    const newRequirements = [...updatedJob.requirements];
    newRequirements[index] = e.target.value;
    setUpdatedJob((prevJob) => ({
      ...prevJob,
      requirements: newRequirements,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://synced-in-backend.vercel.app/jobs/${updatedJob._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedJob),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update job");
      }
      const updatedJobs = jobs.map((job) =>
        job._id === updatedJob._id ? { ...job, ...updatedJob } : job
      );
      setJobs(updatedJobs);
      closeModal();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await fetch(
        `https://synced-in-backend.vercel.app/jobsstored/${jobId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete job");
      }
      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      setJobs(updatedJobs);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const renderJobs = () => {
    return jobs.map((job) => (
      <div key={job._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-2">
          {job.company} - {job.location}
        </p>
        <p className="text-gray-600 mb-2">{job.salary}</p>
        <p className="text-gray-600 mb-2">Posted Date: {job.posted_date}</p>
        <p className="text-gray-600 mb-2">Closing Date: {job.closing_date}</p>
        <p className="text-gray-600 mb-2">Category: {job.category}</p>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside mb-4">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="text-gray-600">
              {requirement}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <button
            className="btn btn-sm btn-warning mr-2"
            onClick={() => openModal(job._id)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(job._id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showModal && e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Jobs</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {jobs.length === 0 ? <div>No jobs found.</div> : renderJobs()}
        </div>
      )}

      {/* Modal for Editing Job */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 modal-overlay">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>
            {/* Input fields for editing */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={updatedJob.title}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={updatedJob.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={updatedJob.location}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={updatedJob.salary}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={updatedJob.description}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              {updatedJob.requirements.map((requirement, index) => (
                <input
                  key={index}
                  type="text"
                  value={requirement}
                  onChange={(e) => handleRequirementsChange(e, index)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                />
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Posted Date
              </label>
              <input
                type="date"
                name="posted_date"
                value={updatedJob.posted_date}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Closing Date
              </label>
              <input
                type="date"
                name="closing_date"
                value={updatedJob.closing_date}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={updatedJob.category}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="btn btn-sm btn-primary mr-2"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button className="btn btn-sm btn-secondary" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal overlay */}
      {showModal && (
        <div
          className="fixed z-50"
          onClick={closeModal}
        />
      )}
    </div>
  );
};

export default ManageJobs;
