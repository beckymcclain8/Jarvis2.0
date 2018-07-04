import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import "./Provider.css";
import "./ProviderStyle.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import StarVote from "../../components/StarVotes";
import ContactBadge from "../../components/ContactBadge";

class Provider extends Component {

render() {
    return (
        <div className="container">
        <Navbar />
        <Header />
        <h1 id="fav">Recommended Partners</h1>
        <h1 id="greeting">Welcome to Dr. McClain's Page!</h1>
        <StarVote />
        <ContactBadge 
        className="contactBadge"
        genre="Physical Therapy"
        doctor="Dr. McClain"
        address="123 Get Better Way"
        rating="Five Stars" 
        />
        <Footer />
        </div>
    );
}

}

export default Provider;