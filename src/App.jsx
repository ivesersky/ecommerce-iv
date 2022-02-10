import "./App.css";
import Home from "./vistas/Home";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ItemDetailContainer } from "./components/containers/ItemDetailContainer";
import "./components/containers/itemListContainer.css";
import Carrito from "./vistas/Carrito";
import CartProvider from "./context/cartContext";

const App = () => {
    return (
        <CartProvider>
            <React.Fragment>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/home" element={<Home />}></Route>
                        <Route
                            exact
                            path="/productos"
                            element={
                                <div>
                                    <ItemListContainer />
                                </div>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/producto/:itemId"
                            element={<ItemDetailContainer />}
                        ></Route>

                        <Route
                            exact
                            path="/contacto"
                            element={"Contacto"}
                            className="defaultText"
                        ></Route>
                        <Route path="/carrito" element={<Carrito />} />
                    </Routes>
                </BrowserRouter>
            </React.Fragment>
        </CartProvider>
    );
};

export default App;
