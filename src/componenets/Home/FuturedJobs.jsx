import React, { useEffect, useState } from 'react';

const FuturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://synced-in-backend.vercel.app/jobsstored'); // Adjust URL as per your endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    const fetchCompanies = async () => {
      try {
        const response = await fetch('/companies.json'); // Adjust path as per your project structure
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchJobs();
    fetchCompanies();
  }, []);

  const renderJobs = () => {
    const visibleJobs = jobs.slice(0, 7);

    return visibleJobs.map((job, index) => {
      const company = companies.find((c) => c.name === job.company);
      if (!company) return null; // Handle case where company logo is not found

      return (
        <div key={index} className="card bg-white rounded-lg shadow-md p-6 text-center">
          <img src={company.logo} alt={`${job.company} logo`} className="h-8 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{job.company}</h3>
          <p className="text-lg font-semibold mb-2">{job.title}</p>
          <p className="text-gray-600 mb-2">{job.location}</p>
          <p className="text-gray-600 mb-2">{job.salary}</p>
          <div className="flex justify-center">
            <button className="btn bg-green-500 mr-2 text-white">Apply Now</button>
            <button className="btn">Show More</button>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return (
      <div className="bg-gray-100 py-12 ">
        <div className="container mx-auto">
          <div className="text-center mt-20 p-20 flex items-center justify-center">
            Loading... <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-left text-4xl font-semibold mb-8 text-gray-800 border-l-8 px-2 py-2 border-green-500">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderJobs()}
          {jobs.length > 7 && (
            <a href="/alljobs" className="btn-ghost card bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center h-48">
                <span className="text-xl font-semibold">See more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuturedJobs;
