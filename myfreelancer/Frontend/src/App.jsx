
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Freelancer from "./Freelancer";
import Signup from "./Signup";
import Login from "./Login";
import Client from "./Client";
import Postatask from "./Postatask";
import Changepassword from "./Changepassword";
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/freelancerdashboard" element={<Freelancer />} />
    <Route path="/clientdashboard" element={<Client />} />
    <Route path="/post" element={<Postatask />} />
    <Route path="/cp" element={<Changepassword />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
