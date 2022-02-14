import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import "./components/containers/itemListContainer.css";
import Carrito from "./vistas/Carrito";
import CartProvider from "./context/cartContext";
import Footer from "./components/Footer";

const App = () => {
    return (
        <CartProvider>
            <React.Fragment>
                <div className="App">
                    <BrowserRouter>
                        <div className="content-wrapper">
                            <NavBar />
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <div>
                                            <ItemListContainer />
                                        </div>
                                    }
                                ></Route>
                                <Route
                                    path="/producto/:id"
                                    element={<ItemDetailContainer />}
                                ></Route>
                                <Route
                                    path="/categoria/:id"
                                    element={<ItemListContainer />}
                                />
                                <Route path="/carrito" element={<Carrito />} />
                            </Routes>
                        </div>
                        <Footer />
                    </BrowserRouter>
                </div>
            </React.Fragment>
        </CartProvider>
    );
};

export default App;
