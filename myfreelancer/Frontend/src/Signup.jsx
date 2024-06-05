import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signup(){
  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();
  function sub(data){
      
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
        data:data
      };
      axios.post("http://localhost:3000/signup",config)
      .then((response) => {
        
        if(response.data==false){
          alert("User already exists.")
          
          
      console.log(response);
        }
        else if(response.data=="pp"){
          alert("Please enter same password.")
        }
        else{
          alert("Congrats!Your account has been created.");
          navigate('/login')
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
          <h1 className="text-center " style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Welcome To Signup Page</h1>
          <form onSubmit={handleSubmit(sub)}>
  <div className="form-group row" style={{marginTop:25}}>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input {...register("email")} type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row " style={{marginTop:25}}>
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input {...register("password")} type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group row " style={{marginTop:25}}>
    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input {...register("confirmpassword")} type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password"/>
    </div>
  </div>
  <fieldset className="form-group" style={{marginTop:25}}>
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Signup As</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input {...register("signinas")} className="form-check-input" type="radio"  id="gridRadios1" value="client" checked/>
          <label className="form-check-label" htmlFor="gridRadios1">
           Client
          </label>
        </div>
        <div className="form-check">
          <input {...register("signinas")} className="form-check-input" type="radio"  id="gridRadios2" value="freelancer"/>
          <label className="form-check-label" htmlFor="gridRadios2">
            Freelancer
          </label>
        </div>
      </div>
    </div>
  </fieldset>  
  <div className="form-group row" style={{marginTop:25,marginBottom:30}}>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
  <Link to="/login" >Click here to Login</Link>
</form>
</div>
</div>  
        <Footer/>
        </>
    )
}
export default Signup