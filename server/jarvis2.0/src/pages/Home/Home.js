import React, { Component } from "react";
import "../../App.css";
import "./Home.css";
import "./HomeStyle.css";

import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Login from "../../components/Login";
import Feature from "../../components/Feature";
// import Input from "../../components/FormInput";
// import Button from "../../components/Button";
// import Selection from "../../components/Selection";
import Footer from "../../StaticComponents/Footer";

class Home extends Component {
  render(props) { 
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Carousel
          carousel="carousel-home"
          heading="What is Jarvis?"
          info="The cost of medical procedures varies greatly by provider.  Jarvis helps take the guesswork out of finding the right hospital for you.  We know that you might be able to save money if you're willing to travel to a hospital outside your local radius.  Enter your information and we will search our database for hospitals that can perform your procedure at the lowest cost."
          link={"/search"}
          title="Get Started!"
        />
        <Login 
        src="https://banner2.kisspng.com/20180326/tiw/kisspng-google-logo-computer-icons-business-service-google-plus-5ab9c197aeb406.5319800515221231597156.jpg"
        />
        <Feature
          className="feature-a"
          src={"https://image.flaticon.com/icons/png/512/49/49116.png"}
          title={"Search"}
          link={"/search"}
        />

        <Feature
          className="feature-b"
          src={
            "https://cdn4.iconfinder.com/data/icons/follower/512/login-man-person-human-body-512.png"
          }
          title={"Patient Profile"}
          link={"/:id/patient"}
        />

        <Feature
          className="feature-c"
          src={"https://d30y9cdsu7xlg0.cloudfront.net/png/126327-200.png"}
          title={"Provider"}
          link={"/:id/provider"}
        />

        <Feature
          className="feature-d"
          src={"https://d30y9cdsu7xlg0.cloudfront.net/png/565973-200.png"}
          title={"Cost Map"}
          link={"/api/map"}
        />

        <Footer />
      </div>
    );
  }
}

export default Home;
