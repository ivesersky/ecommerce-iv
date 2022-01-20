import "./App.css";
import Home from "./vistas/Home";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ItemDetailContainer } from "./components/containers/ItemDetailContainer";
import "./components/containers/itemListContainer.css";
import Carrito from "./vistas/Carrito";
import CartProvider from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <React.Fragment>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        {/* antiguo switch */}
                        <Route exact path="/home" element={<Home />}></Route>
                        <Route
                            exact
                            path="/productos"
                            element={
                                <div className="container">
                                    <ItemListContainer />
                                </div>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/producto/:itemId"
                            element={<ItemDetailContainer />}
                        ></Route>
                        <Route exact path="/carrito" element={<Carrito />} />

                        <Route
                            exact
                            path="/perfil"
                            element={"Perfil"}
                            className="defaultText"
                        ></Route>
                        <Route
                            exact
                            path="/contacto"
                            element={"Contacto"}
                            className="defaultText"
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </React.Fragment>
        </CartProvider>
    );
};

export default App;
