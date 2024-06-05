import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Client(){
    const [jobs,setdata]=useState([])
    function dataa(){
        axios.get("http://localhost:3000/getdata").then((response)=>{
            
            setdata(response.data)
           
        },(error)=>{
            console.log(error)
        })
        
    }
    useEffect(dataa,[])
    function task(info){
var buttonId=info.target.attributes.value.nodeValue;

const config={
     headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
    buttonId:buttonId
};
axios.post("http://localhost:3000/deletejob",config)
.then((response) => {
     if(response.data==true){
        alert("job completed  successfully!")
     }
}, (error) => {
  console.log(error);
});
    }
    return(
       
        <>
        <div className="bg-body-tertiary" style={{height:559}}>
            <Navbar2/>
            <div className="container">
                <div className="row">
                <div className="col-lg-10" style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}> <h1>Click on the button to post a task :</h1></div>
                <div className="col-lg-2"> <Link type="button" className="btn btn-dark" style={{marginTop:25,marginBottom:20}} to="/post">Post A Task</Link></div>
                </div>
                <h1  style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Current Tasks</h1>
                <table className="table table-dark">
                    <thead className="">
                        <tr>
                            <th>Task No.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Budget</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                
                <tbody>
                    
                        {jobs.map((job)=>(
                            <tr key={job.id}>
                       <td >{job.id}</td>         
                       <td >{job.heading}</td>
                       <td >{job.description}</td>
                       <td >{job.budget}</td>
                       <td ><button type="button" onClick={task} value={job.id} className="btn btn-light">Task Completed</button></td>
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
export default Client;