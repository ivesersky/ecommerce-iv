import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ItemDetailContainer } from "./components/containers/ItemDetailContainer";
const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <div className="container">
                                <ItemListContainer />
                            </div>
                        }
                    ></Route>
                    {/* esto es para hacer el filtrado de categoria. ver bien la clase de nuevo */}
                    {/* <Route exact path="/category/:catId">
                        <div className="container">
                            <ItemListContainer greeting={"FILTRADO"} />
                        </div>
                    </Route> */}
                    <Route
                        exact
                        path="/product/:itemId"
                        element={<ItemDetailContainer />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
