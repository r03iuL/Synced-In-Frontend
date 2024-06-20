
import { useEffect } from 'react';
import { useState } from 'react';

const Companies = () => {
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

  return (
    <div className="bg-gray-100 py-12 mt-14">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">Top Companies Hiring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <a href='' key={index} className="card bg-white rounded-lg shadow-md p-6 text-center">
              <img src={company.logo} alt={`${company.name} logo`} className=" h-24 mx-auto mb-4" />
              <h3  className="text-xl font-semibold mb-2">{company.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
