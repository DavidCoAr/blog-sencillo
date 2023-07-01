import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12">
            <p>Final Fantasy y amigos, &copy; {currentYear} Copyright</p>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;