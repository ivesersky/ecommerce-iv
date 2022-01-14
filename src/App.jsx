import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ItemDetailContainer } from "./components/containers/ItemDetailContainer";
const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {" "}
                    {/* antiguo switch */}
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
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
