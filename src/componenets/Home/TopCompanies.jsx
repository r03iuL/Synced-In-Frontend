import { useEffect, useState } from 'react';

const TopCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
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

    fetchCompanies();
  }, []);

  const renderCompanies = () => {
    // Display only the first 7 companies
    const visibleCompanies = companies.slice(0, 7);

    return visibleCompanies.map((company, index) => (
      <a href='' key={index} className="card bg-white rounded-lg shadow-md p-10 text-center">
        <img src={company.logo} alt={`${company.name} logo`} className="h-10 mx-auto mb-4" />
        <h3 className="text-xl font-semibold my-2">{company.name}</h3>
      </a>
    ));
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-left text-4xl font-semibold mb-8 text-gray-800 border-l-8 px-2 py-2 border-green-500">Top Companies Hiring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderCompanies()}
          {companies.length > 7 && (
            <a href='/companies' className="btn-ghost card bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center items-center h-32">
                <span className="text-xl font-semibold">See more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
