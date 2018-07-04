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
        <h2 id="rec">Recommended Partners</h2>
        <h2 id="greeting2">Welcome to Dr. McClain's Page!</h2>
        <StarVote 
        className={"starVote2"}/>
        <ContactBadge 
        className="contactBadge-a"
        genre="Physical Therapy"
        doctor="Dr. McClain"
        address="123 Get Better Way"
        rating="Five Stars" 
        />

        <ContactBadge 
        className="contactBadge-b"
        genre="Knee Joint Replacement"
        doctor="Dr. McClain"
        address="123 Get Better Way"
        rating="Five Stars" 
        />

        <ContactBadge 
        className="contactBadge-c"
        genre="Orthopedics"
        doctor="Dr. McClain"
        address="123 Get Better Way"
        rating="Five Stars" 
        />

        <ContactBadge 
        className="contactBadge-d"
        genre="Massage"
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