import logo from "./logo3.svg";
import React from "react";
import "./nav.css";

const CartWidget = () => {
    return (
        <>
            <div className="logo-container">
                <p>STU DIO IV</p>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </>
    );
};

export default CartWidget;
