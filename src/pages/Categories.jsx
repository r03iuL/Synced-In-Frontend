import { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchCategoriesAndJobs = async () => {
      try {
        // Fetch jobs data
        const jobsResponse = await fetch('https://synced-in-backend.vercel.app/jobsstored');
        if (!jobsResponse.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const jobsData = await jobsResponse.json();
        setJobs(jobsData);

        // Fetch companies data
        const companiesResponse = await fetch('/companies.json'); // Adjust the endpoint as per your project structure
        if (!companiesResponse.ok) {
          throw new Error('Failed to fetch companies');
        }
        const companiesData = await companiesResponse.json();
        setCompanies(companiesData);

        // Extract unique categories from jobs data
        const uniqueCategories = Array.from(new Set(jobsData.map(job => job.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchCategoriesAndJobs();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderJobs = () => {
    const filteredJobs = jobs.filter(job => job.category === selectedCategory);
    return filteredJobs.map((job, index) => {
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
    return <div className="text-center mt-20 p-20 flex items-center justify-center">Loading... <span className="loading loading-spinner loading-lg"></span> </div>; // Conditional rendering for loading state
  }

  return (
    <div className="bg-gray-100 py-12 mt-14">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card bg-white rounded-lg shadow-md p-6 text-center cursor-pointer" onClick={() => handleCategoryClick(category)}>
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
            </div>
          ))}
        </div>
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">{selectedCategory} Jobs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {renderJobs()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
