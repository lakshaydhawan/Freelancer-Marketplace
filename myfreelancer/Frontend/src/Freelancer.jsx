import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Freelancer(){
    const [jobs,setdata]=useState([])
    function dataa(){
        axios.get("http://localhost:3000/getdata").then((response)=>{
            
            setdata(response.data)
           
        },(error)=>{
            console.log(error)
        })
        
    }
    useEffect(dataa,[])
    return(
        <>
        <div className="bg-body-tertiary" style={{height:559}}>
            <Navbar2/>
            <div className="container">
            <h1  style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Tasks Of Your Interests!</h1>
            <table className="table table-striped">
                    <thead className="">
                        <tr>
                            <th>Task No.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Budget</th>
                            <th>Apply For Task</th>
                        </tr>
                    </thead>
                
                <tbody>
                    
                        {jobs.map((job)=>(
                            <tr key={job.id}>
                       <td >{job.id}</td>         
                       <td >{job.heading}</td>
                       <td >{job.description}</td>
                       <td >{job.budget}</td>
                       <td><button type="button" value={job.id} className="btn btn-light">Apply</button></td>
                       </tr>
                        ))}
                    
                </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Freelancer