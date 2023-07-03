import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebHome from "../pages/WebHome";
import WebNuevaEntrada from "../pages/WebNuevaEntrada"
import WebEntrada from "../pages/WebEntrada"
import WebEditarEntrada from "../pages/WebEditarEntrada "


const App = () => {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<WebHome/>} />
                <Route path="/newpost" element={<WebNuevaEntrada/>} />
                <Route path="/post/:id_entrada" element={<WebEntrada/>} />
                <Route path="/editpost/:id_entrada" element={<WebEditarEntrada />} />
             </Routes>
        </BrowserRouter>
    );
}

export default App;