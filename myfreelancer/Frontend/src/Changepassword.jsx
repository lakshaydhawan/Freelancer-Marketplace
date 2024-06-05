import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Changepassword(){
  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();
  function sub(data){
      console.log(data)
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
        data:data
      };
      axios.post("http://localhost:3000/password",config)
      .then((response) => {
        
        if(response.data==false){
          alert("No user with this email found.")
        }
        else{
          alert("Password updated.");
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
          <h1 className="text-center " style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Change Password</h1>
          <form onSubmit={handleSubmit(sub)}>
  <div className="form-group row" style={{marginTop:25}}>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Enter Your Email</label>
    <div className="col-sm-10">
      <input {...register("email")} type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row " style={{marginTop:25}}>
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Enter Old Password</label>
    <div className="col-sm-10">
      <input {...register("password")} type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group row " style={{marginTop:25}}>
    <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Enter New Password</label>
    <div className="col-sm-10">
      <input {...register("newpassword")} type="password" className="form-control" id="inputPassword4" placeholder="New Password"/>
    </div>
  </div>
   
  <div className="form-group row" style={{marginTop:25,marginBottom:30}}>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Change Password</button>
    </div>
  </div>
</form>
</div>
</div>  
        <Footer/>
        </>
    )
}
export default Changepassword