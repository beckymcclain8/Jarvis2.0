 import React, { Component } from "react";
 import Navbar from "../../StaticComponents/NavBar";
 import Carousel from "../../Components/Carousel";
 import { Login, SubmitBtn } from "../../Components/Login";
 import Input from "../../Components/FormInput";
 import Button from "../../Components/Button";
 import Footer from "../../StaticComponents/Footer";
 
 class Jarvis extends Component {

search = ()  => {
 //go to /search page
}

patientProfile = ()  => {
//go to /patientProfile
}

providerInfo = ()  => {
//go to /providerInfo
}

costMap = ()  => {
//go to /costMap
}

 render() {
     return (
        <Navbar />
        <Carousel />
        <form>
        <Login/>
        <Input/>
            //add login stuff... need more info about facebook/google or do we just want input fields for username and password
        <SubmitBtn>
        </SubmitBtn>
        </form>
        <Options>
             <img> # </img>
             <Button
                 onClick={this.search} >
                 Search
             </Button>
        </Options>
        <Options>
            <img> # </img>
            <Button
                 onClick={this.patientProfile} >
                 User Profile
             </Button>
        </Options>
        <Options>
            <img> # </img>
            <Button
                 onClick={this.providerInfo} >
                 Provider
             </Button>
        </Options>
        <Options>
             <img> # </img>
             <Button
                 onClick={this.costMap} >
                 Cost Map
             </Button>
        </Options>
        <Footer/>
     );
 }
}

export default Jarvis;