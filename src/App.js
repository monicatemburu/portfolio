import Navbar from "./Components/Navbar";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Workouts from "./Components/Workouts";
import EducationalBackground from "./Components/EducationalBackground";
import ProfessionalExperience from "./Components/ProfessionalExperience";

import LetsTalk from "./Components/LetsTalk";
import "./App.css";

function App() {
  return (
    <Router className="App">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route
              path="/ProfessionalExperience"
              element={<ProfessionalExperience />}
            />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route
              path="/EducationalBackground"
              element={<EducationalBackground />}
            />

            <Route path="/Contact" element={<LetsTalk />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
