import Navbar from "./Navbar";
import Carousell from "./Carousell";
import { Link } from "react-router-dom";
import freelancer from "./assets/freelancer.jpg"
import Cards from "./Cards";
import p1 from "./assets/p1.jpg"
import p2 from "./assets/p2.jpg"
import p3 from "./assets/p3.jpg"
import Footer from "./Footer";
function Home(){
    return(
        <>
        <div className="bg-body-tertiary">
        <Navbar/>
        <div>
        <div style={{ height:620,width:1349, backgroundImage:`url(${freelancer})`}}>
            <Link style={{marginLeft:115,marginTop:471,width:205,height:60,textDecoration:"none",color:"white"}} to="/signup" className="btn btn-dark btn-lg">Sign Up</Link>
            <Link style={{marginLeft:10,marginTop:471,width:270,height:60,textDecoration:"none",color:"black"}} className="btn btn-light btn-lg" to="/login">Log In</Link>
        </div>
        <div className="container">
           < h1 className="text-center display-4" style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Your Reviews Always Motivates Us!!!!</h1>
        
           
           <div className='row align-items-baseline'>
           <div className="col">
           <Cards name="Varun Dev" review="This is a very smooth,fast and efficient website to use." im={p1}/>
      </div>
      <div className="col">
           <Cards name="Josphine Bond" review="Got really good opportunities after using this website." im={p2}/>
      </div>
      <div className="col">
           <Cards name="Catherine Joseph" review="This website really helped me to grow in my career." im={p3}/>
      </div>   
     
           </div>
            <h1 className="text-center display-4" style={{marginTop:20,marginBottom:20,fontFamily:'Sans-Serif',color:"dimgrey"}}>Get updated with the latest jobs/freelancers in the market with us!!!</h1>
          
           <Carousell/>
        </div>
        
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default Home;