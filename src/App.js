import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon/:pokemonName" element={<Pokemon/>}/>
        </Routes>
    );
}

export default App;
