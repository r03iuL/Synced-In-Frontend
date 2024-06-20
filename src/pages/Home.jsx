import FuturedJobs from "../componenets/Home/FuturedJobs";
import Hero from "../componenets/Home/Hero"

import FeauturedCategories from './../componenets/Home/FeauturedCategories';
import TopCompanies from './../componenets/Home/TopCompanies';



function Home() {
  return (<>
  <Hero></Hero>
  <TopCompanies></TopCompanies>
  <FuturedJobs></FuturedJobs>
  <FeauturedCategories></FeauturedCategories>

  </>
    
  )
}

export default Home