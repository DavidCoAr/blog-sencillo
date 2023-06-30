import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-lg-center">
            <a className="navbar-brand" href="/home">Mi Proyecto</a>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary" href="/newpost ">Ir a Ruta</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
