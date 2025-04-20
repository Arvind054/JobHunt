import React from 'react'
import JobCard from '../SubComponents/JobCard'
import Navbar from './Navbar'
const JobsPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"1rem", color:"black"}}>
        <h2>Jobs That Matches Your Search</h2>
    </div>
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100vw"}}>
        <JobCard title={"FullStack Developer"} description={"FrontEnd and Backend backend mern development"} location={"remote"} applyLink={"/"}></JobCard>
        
        
       
    </div>
    </>
  )
}

export default JobsPage