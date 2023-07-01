import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebHome from "../pages/WebHome";

const App = () => {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<WebHome/>} />
             </Routes>
        </BrowserRouter>
    );
}

export default App;