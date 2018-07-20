import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import "./Provider.css";
import "./ProviderStyle.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import CardsProvider from "../../components/CardsProvider";
import StarVote from "../../components/StarVotes";
import Testimonial from "../../components/Testimonial";

class Provider extends Component {

render() {
    return ( 
        <div className="container">
        <Navbar />
        <Header />
        <h1 id="rec">Recommended Partners</h1>
        <h1 id="greeting2">Welcome to Dr. McClain's Page!</h1>
        <Testimonial 
        className="testimonialProvider"
        id="test"
        testimonial= ' "Dr. McClain was an amazing surgeon.  She answered all my questions and had me back on my feet before I knew it." -Susie Smith'/>
        <StarVote 
        className={"starVote2"}/>
        <CardsProvider
        className="contactBadge-a"
        genre="Physical Therapy"
        doctor="Dr. Davis"
        address="123 Get Better Way"
        cityState= "Phoenix, AZ 85005"
        />

        <CardsProvider
        className="contactBadge-b"
        genre="Cardiology"
        doctor="Dr. Smith"
        address="456 Get Better Way"
        cityState= "Phoenix, AZ 85009"
        />

        <CardsProvider
        className="contactBadge-c"
        genre="Orthopedics"
        doctor="Dr. Brown"
        address="789 Get Better Way"
        cityState= "Tempe, AZ 85280"
        />

        <CardsProvider
        className="contactBadge-d"
        genre="Massage"
        doctor="Dr. Johnson"
        address="101 Get Better Way"
        cityState= "Scottsdale, AZ 85054"
        />
        
        <Footer />
        </div>
    );
}

}

export default Provider;