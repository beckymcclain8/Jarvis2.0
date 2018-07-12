import React, { Component } from "react";
import "./Search.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import FormInput from "../../components/FormInput/FormInput";
import SearchResultContainer from "../../components/SearchResultContainer/SearchResultConatiner";

class Search extends Component {
 
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />

        <SearchResultContainer />

        <Footer />
      </div>
    );
  }
}

export default Search;
