import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Objective from "./components/Objective/Objective";
import About from "./components/About/About"

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header />
            <Objective />
            <About />
        </BrowserRouter>
    )
}

export default RoutesApp;