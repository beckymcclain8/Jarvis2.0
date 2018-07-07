import React, { Component } from "react";
import "./Search.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../StaticComponents/Footer";
import FormInput from "../../components/FormInput/FormInput";
import SearchResultContainer from "../../components/SearchResultContainer/SearchResultConatiner";

class Search extends Component {
  scroll = () => {
    //go to /search page
    console.log("Scroll the carousel");
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
<FormInput />
<SearchResultContainer />
        <Footer />
      </div>
    );
  }
}

export default Search;
