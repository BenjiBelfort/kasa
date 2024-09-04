import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fiche from "./pages/Fiche-logement";
import About from "./pages/About";
import Erreur from "./pages/Erreur";


const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-immobiliere/:id" element={<Fiche />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<Erreur />} />
        </Routes>
  );
}

export default AppRouter;