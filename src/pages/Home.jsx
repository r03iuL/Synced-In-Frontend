import About_Us from "../componenets/Home/About_Us";
import FuturedJobs from "../componenets/Home/FuturedJobs";
import Hero from "../componenets/Home/Hero";
import FeauturedCategories from "./../componenets/Home/FeauturedCategories";
import TopCompanies from "./../componenets/Home/TopCompanies";
import Testimonials from './../componenets/Home/Testimonial';

function Home() {
  return (
    <>
      <Hero></Hero>
      <TopCompanies></TopCompanies>
      <FuturedJobs></FuturedJobs>
      <FeauturedCategories></FeauturedCategories>
      <About_Us></About_Us>
     <Testimonials></Testimonials>
    </>
  );
}

export default Home;
