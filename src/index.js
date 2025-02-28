import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,  } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Home from './Pages/Home';
//import Footer from './Components/Footer';
//import Navbar from './Components/Navbar';
// import List from './Composant/List';
// import Note from './Composant/Note';
// import Invites from './Composant/Invites';
// import Taches from './Composant/Taches';
// import Navbar from './Composant/Navbar';
// import Fournisseurs from './Composant/Fournisseurs';
// import Footer from './Composant/Footer';
// import Budget from './Composant/Budget';
// import Background from './Composant/Background';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div >
        <App/>
     {/* <Navbar/>        
       
       <Background />
        <List />
        <Taches />
        <Budget />
        <Invites />
        <Fournisseurs />
        <Note/> 
        
        <Footer/> */}
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
