import "./styles/index.css";
import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
import { Info } from "./components/info";

function App() {
  const [general, setGeneral] = useState(Info.personalInfo);
  const [educations, setEducations] = useState(Info.education);

  return (
    <div className="app">
      <div className="form">
        <General generalInfo={general} setGeneralInfo={setGeneral} />
        <Education educations={educations} setEducations={setEducations} />
        <Experience />
        <Skills />
      </div>
      <div className="preview-wrapper">
        <Preview generalInfo={general} educations={educations} />
      </div>
    </div>
  );
}

export default App;
