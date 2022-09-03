import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Application from "./pages/Application";
import Gallary from "./pages/Gallary";
import Login from "./pages/Login";
import Register from './pages/Register';

export default function App() {
  return (
    <div className="container">
      <Router>
        
      <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="application">Application</Link></li>
            <li><Link to="admission">Admission</Link></li>
            <li><Link to="gallary">Gallary</Link></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
          <li><Link to="login">Login</Link></li>
          <li><Link to="register">Register</Link></li>
          </ul>
          </div>
        </div>
        </nav>


        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="about" element={<About />} />
          <Route exact path="application" element={<Application />} />
          <Route exact path="admission" element={<Admission />} />
          <Route exact path="gallary" element={<Gallary />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        
        </Routes>
      </Router>
    </div>

  )
}


