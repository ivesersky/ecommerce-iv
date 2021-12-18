import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";

const App = () => (
    //si uso los fragment recordar no usar corchetes sino parentesis
    //y si no los uso, no puedo enviar +1 componentes de forma directa sin return
    <>
        <NavBar />
        <div className="container">
            <ItemListContainer />
        </div>
    </>
);

export default App;
