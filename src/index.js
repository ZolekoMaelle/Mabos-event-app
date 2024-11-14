import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from './Pages/Service';
//import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Landingpage from './Pages/Landingpage';
import Footer from './Components/Footer';
 import Details from './Pages/Details';
 import Salles from './Pages/Salles'
 import Resa from './Pages/Resa';
 import Rs from './Pages/Rs'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div >
     <Navbar/>        
        <Routes>
         <Route path="/" element={<Landingpage/>} />
          <Route path="/services/" element={<Services />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/about/" element={<About />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/details/" element={<Details />} />
          <Route path="/salles/" element={<Salles />} />
          <Route path="/resa/" element={<Resa />} />
          <Route path="/rs/" element={<Rs/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
