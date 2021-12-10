
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/MainBody/ItemListContainer";

function App() {
    return (//siempre retorna 1 SOLO COMPONENTE
    <> 
                <NavBar/>
           <ItemListContainer/>
    </>
 
    );
    
}

export default App;
