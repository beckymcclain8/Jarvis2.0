 import React, { Component } from "react";
 import Navbar from "../../StaticComponents/NavBar";
 import Carousel from "../../Components/Carousel";
 import { Login, SubmitBtn } from "../../Components/Login";
 import Input from "../../Components/FormInput";
 import Button from "../../Components/Button";
 import Footer from "../../StaticComponents/Footer";
 
 class Jarvis extends Component {

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
             <Button> Search </Button>
        </Options>
        <Options>
            <img> # </img>
                <Button> User Profile </Button>
        </Options>
        <Options>
            <img> # </img>
            <Button> Provider </Button>
        </Options>
        <Options>
             <img> # </img>
             <Button> Cost Map </Button>
        </Options>
        <Footer/>
     );
 }
}

export default Jarvis;