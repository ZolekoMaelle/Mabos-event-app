import React from "react";
import Navbar from "../Composant/Navbar";
import Background from '../Composant/Background';
import Note from '../Composant/Note';
import List from '../Composant/List';
import Taches from '../Composant/Taches';
import Invites from '../Composant/Invites';
import Fournisseurs from '../Composant/Fournisseurs';
import Budget from '../Composant/Budget';
import Footer from '../Composant/Footer';
// import Note from '../Composant/Note';

function Landing() {
    return (
        <div>
        <Navbar/>  
        <Background />
        <List />
        <Taches />
        <Budget />
        <Invites />
        <Fournisseurs />
        <Note/>
        <Footer/>
        </div>
    )
}
export default Landing;