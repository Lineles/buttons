import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <Router>
  
      <Routes> 
        <Route path="/" element={<MainPage />} />
      </Routes>   

  </Router>  
  );
}

export default App;
