import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Postatask(){
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate();
    function sub(data){
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
          data:data
        };
        axios.post("http://localhost:3000/postatask",config)
        .then((response) => {
         if(response.data==true){
          alert("job posted successfully!")
          navigate("/clientdashboard");
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
        <h1 className="text-center display-4" style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Post A Task</h1>
          <form onSubmit={handleSubmit(sub)}>
  <div className="form-group">
    <label htmlFor="heading">Task Heading</label>
    <input {...register("heading")} type="text" className="form-control" id="heading" placeholder="Task Heading"/>
  </div>
 
  <div className="form-group">
    <label htmlFor="description">Task Description</label>
    <textarea {...register("description")}  className="form-control" id="description" rows="3"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="budget">Budget</label>
    <input {...register("budget")}  type="number" className="form-control" id="budget"/>
  </div>
  <button type="submit" className="btn btn-dark" style={{marginTop:10}}>Post</button>
</form>
</div>
</div>
        <Footer/>
        </>
    )
}
export default Postatask