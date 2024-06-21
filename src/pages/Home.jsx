import About_Us from "../componenets/Home/About_Us";
import FuturedJobs from "../componenets/Home/FuturedJobs";
import Hero from "../componenets/Home/Hero";
import User_review from "../componenets/Home/User_review";

import FeauturedCategories from "./../componenets/Home/FeauturedCategories";
import TopCompanies from "./../componenets/Home/TopCompanies";

function Home() {
  return (
    <>
      <Hero></Hero>
      <TopCompanies></TopCompanies>
      <FuturedJobs></FuturedJobs>
      <FeauturedCategories></FeauturedCategories>
      <About_Us></About_Us>
      <User_review></User_review>
    </>
  );
}

export default Home;
