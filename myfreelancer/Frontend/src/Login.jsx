import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Login(){
  const navigate=useNavigate();
    const { register, handleSubmit } = useForm();
    function sub(data){
        console.log(data);
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
          data:data
        };
        axios.post("http://localhost:3000/login",config)
        .then((response) => {
          
          if(response.data==false){
            alert("Invalid Credentials.")
          }
          
          else{
            alert("User Logged In.");
            var userType=response.data.user
            if(userType=='client'){
            navigate('/Clientdashboard');
            }
            else{
              navigate('/Freelancerdashboard')
            }
          }
        }, (error) => {
          console.log(error);
        });
    }
    return(
        <>
          
          <div className="bg-body-tertiary" style={{height:559}}>
          <Navbar/>
          <div className="container">
          <h1 className="text-center " style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Welcome To Login Page</h1>
          <form onSubmit={handleSubmit(sub)}>
  <div className="form-group row" style={{marginTop:40}}>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input  {...register("email")} type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row " style={{marginTop:40}}>
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input  {...register("password")} type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <fieldset className="form-group" style={{marginTop:25}}>
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Login As</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input  {...register('loginas',{required:true})} className="form-check-input" type="radio"  id="gridRadios1" value="client" />
          <label className="form-check-label" htmlFor="gridRadios1">
           Client
          </label>
        </div>
        <div className="form-check">
          <input  {...register('loginas',{required:true})} className="form-check-input" type="radio"  id="gridRadios2" value="freelancer" />
          <label className="form-check-label" htmlFor="gridRadios2">
            Freelancer
          </label>
        </div>
      </div>
    </div>
  </fieldset>  
  
       
  <div className="form-group row" style={{marginTop:40 , marginBottom:30}}>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Log in</button>
    </div>
  </div>
  <Link to="/signup" >Click here to Signup</Link>
</form>
</div>
</div>  
        <Footer/>
        </>
    )
}
export default Login