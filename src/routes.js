import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Characters from "./pages/Characters";
import CharactersDetails from "./pages/CharactersDetails";
import Locations from "./pages/Locations";

import Erro from "./pages/Erro";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Characters/> }/>
                <Route path="/character/:id" element={ <CharactersDetails/> }/>
                <Route path="/locations" element={ <Locations/> }/>
                
                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;