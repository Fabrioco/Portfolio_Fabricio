import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Objective from "./components/Objective/Objective";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header />
            <Objective />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;