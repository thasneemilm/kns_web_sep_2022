//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <body>
    <diV className="container">
      

    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">KCC</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Gallary</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Application</a></li>
              <li><a href="#">Appointments</a></li>
              
              
                
               
             
            </ul>
            <ul className="nav navbar-nav navbar-right">
              
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>



    </diV>

    </body>
  );
}