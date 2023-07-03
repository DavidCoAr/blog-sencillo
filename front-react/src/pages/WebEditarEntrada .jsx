import React from "react";

import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

import EntradaEditable from "../components/EditarEntrada/EntradaEditable ";

import "bootstrap/dist/css/bootstrap.min.css";

function App () {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Navbar/>
            </div>
            <div>
                <EntradaEditable/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default App;