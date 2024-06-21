import { useEffect, useState } from "react";

const About_Us = () => {
  const [jobsCount, setJobsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);

  useEffect(() => {
    // Fetch jobs count
    const fetchJobsCount = async () => {
      try {
        const response = await fetch(
          "https://synced-in-backend.vercel.app/jobsstored"
        ); // Adjust URL as per your endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch jobs count");
        }
        const data = await response.json();
        setJobsCount(data.length);
      } catch (error) {
        console.error("Error fetching jobs count:", error);
      }
    };

    // Fetch companies count
    const fetchCompaniesCount = async () => {
      try {
        const response = await fetch("/companies.json"); // Adjust path as per your project structure
        if (!response.ok) {
          throw new Error("Failed to fetch companies count");
        }
        const data = await response.json();
        setCompaniesCount(data.length);
      } catch (error) {
        console.error("Error fetching companies count:", error);
      }
    };

    fetchJobsCount();
    fetchCompaniesCount();
  }, []);

  return (
    <div className="container mx-auto px-10 py-20 max-w-[90%] rounded-lg">
      {/* <h2 className="text-left text-4xl font-semibold mb-8 text-gray-800 border-l-8 px-2 py-2 border-green-500">About Us</h2> */}
      <div className="flex justify-center mb-8">
        <div className="stats shadow w-full sm:w-auto p-20 border-4 border-green-500 text-2xl font-semibold ">
          <div className="stat ">
            <div className="stat-figure text-secondary ">
            </div>
            <div className="stat-title">Available Jobs</div>
            <div className="stat-value">{jobsCount}</div>
            <div className="stat-desc">Updated daily</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
            </div>
            <div className="stat-title">Top Companies</div>
            <div className="stat-value">{companiesCount}</div>
            <div className="stat-desc">Trusted by industry leaders</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            </div>
            <div className="stat-title">Got Hired</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
        </div>
      </div>

      <p className="text-lg text-center mb-8 w-[50%] mx-auto ">
        We aim to connect talented individuals with
        top companies across various industries. Whether you&apos;re looking for a
        new opportunity or aiming to hire the best talent, we are here to help.
      </p>

      <div className="text-center">
        <button
          className="btn bg-green-500 text-white"
          onClick={() => (window.location.href = "/about")}
        >
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default About_Us;
