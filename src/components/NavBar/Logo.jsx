import React from "react";
import logo from "./logo3.svg";
import "./logo.css";

const LogoBar = () => {
    return (
        <>
            <div className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </>
    );
};

export default LogoBar;
