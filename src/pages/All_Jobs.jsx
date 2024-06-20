import { useEffect, useState } from 'react';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);

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
      }
    };

    fetchJobs();
    fetchCompanies();
  }, []);

  const renderJobs = () => {
    return jobs.map((job, index) => {
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

  return (
    <div className="bg-gray-100 py-12 mt-14">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">All Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderJobs()}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
