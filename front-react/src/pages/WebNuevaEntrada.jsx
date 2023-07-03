import React from "react";

import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

import EntradaNueva from "../components/NuevaEntrada/EntradaNueva";

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
                <EntradaNueva/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default App;