import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import CoupleMainPage from "./Components/CoupleEdigion/CoupleMainPage/CoupleMainPage";
import PartyEditionMainPage from "./Components/PartyEdition/PartyEditionMainPage/PartyEditionMainPage";

function App() {
  return (
    <Router>
  
      <Routes> 
        <Route path="/" element={<MainPage />} />
        <Route path="/coupleEdition" element={<CoupleMainPage />} />
        <Route path="/PartyEdition" element={<PartyEditionMainPage />} />
      </Routes>   

  </Router>  
  );
}

export default App;
