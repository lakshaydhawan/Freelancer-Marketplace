import Carousel from 'react-bootstrap/Carousel';
import c1 from "./assets/c1.png"
import c2 from "./assets/c2.jpg"
import c3 from "./assets/c3.png"
import { Link } from 'react-router-dom';
function Carousell(){
    return(
        <>
       <Carousel>
      <Carousel.Item>
        
      <div style={{ height:540,width:1349, backgroundImage:`url(${c1})`}}>
      <button style={{marginLeft:120,marginTop:365,width:160,height:55}} className="btn btn-light btn-lg"><Link style={{textDecoration:"none",color:"black"}} to="/signup">Get Started</Link></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
    
      <div style={{ height:540,width:1349, backgroundImage:`url(${c2})`}}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ height:540,width:1349, backgroundImage:`url(${c3})`}}>
      <button style={{marginLeft:12,marginTop:480,width:190,height:55}} className="btn btn-light btn-lg"><Link style={{textDecoration:"none",color:"black"}} to="/login">Hire A Freelancer</Link></button>
      <button style={{marginLeft:8,marginTop:480,width:240,height:55}} className="btn btn-light btn-dark"><Link style={{textDecoration:"none",color:"white"}} to="/login">Get A Freelancing Task</Link></button>
        </div>
    
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Carousell;