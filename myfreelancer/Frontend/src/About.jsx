import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function About(){
    return(
        <>
        <div className="bg-body-tertiary" style={{height:805}}>
        <Navbar/>
            <div className="container">
        <div className="jumbotron">
  <h1 className="display-4">About Us!</h1>
  <p className="lead">


Welcome to Taskla
<br/>
At Taskla, we believe in the power of talent. Our platform is designed to connect skilled freelancers with clients seeking top-notch services, creating a seamless and efficient ecosystem for collaboration and growth.</p>
  <hr className="my-4"/>
 <p className="lead">


Empowering Freelancers:
<br/>

For freelancers, we offer a dynamic platform to showcase their talents, expertise, and passion. Whether you're a graphic designer, programmer, writer, marketer, or any other professional, Taskla provides you with the tools and opportunities to thrive in the gig economy. We understand the importance of independence and flexibility, which is why we empower freelancers to set their own rates, choose their projects, and build lasting relationships with clients.
<br/>
Solutions for Businesses:
<br/>
For businesses and organizations, Taskla is the go-to destination for finding skilled professionals for projects of any size or complexity. Whether you need a one-time task completed or ongoing support, our platform connects you with qualified freelancers from around the globe. Say goodbye to traditional hiring hassles and hello to a world of talent at your fingertips.
<br/>
Our Commitment:
<br/>
At Taskla, we're committed to fostering a supportive and inclusive community where freelancers and clients can thrive together. We prioritize transparency, integrity, and professionalism in everything we do, ensuring a positive and rewarding experience for all users.
<br/>
Join Us Today:
<br/>
Whether you're a freelancer looking to expand your opportunities or a business in need of top-tier talent, [Your Freelancer Marketplace] is here to help you succeed. Join our vibrant community today and discover the endless possibilities that await.
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
export default About;