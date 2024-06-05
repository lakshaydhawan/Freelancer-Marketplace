import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Contact(){
    return(
        <>
        <div className="bg-body-tertiary" style={{height:559}}>
        <Navbar/>
            <div className="container">
        <div className="jumbotron">
  <h1 className="display-4">Contact Us!</h1>
  <p className="lead">


Welcome to Taskla
<br/>
At Taskla, we believe in the power of talent. Our platform is designed to connect skilled freelancers with clients seeking top-notch services, creating a seamless and efficient ecosystem for collaboration and growth.</p>
  <hr className="my-4"/>
 <p className="lead">




Get in Touch
<br/>
Thank you for your interest in Taskla. We're here to help with any questions, inquiries, or feedback you may have. Feel free to reach out to us using any of the following methods:
<br/>
Email: taskla@gmail.com
<br/>
Phone: +91-9876543222
<br/>
Address: 813,King Street,Pune,143001,MH,IND.
<br/>
Social Media:taskla21-Instragram/taskla221-Twitter/Taskla-Facebook
<br/>


</p>
  <p className="lead">
    
    <Link className="btn btn-primary btn-lg" to="/signup">Get Started</Link>
  </p>
</div>
</div>
</div>
        <Footer/>
        </>
    )
}
export default Contact;