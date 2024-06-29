import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
import { Info } from "./components/info";
function App() {
  //General state variable
  const [general, setGeneral] = useState(Info.personalInfo);
  console.log(general);
  //Education state variable
  const [schoolName, setSchoolName] = useState("ESPRIT");
  const [location, setLocation] = useState("Ariana, Tunisia ");
  const [degree, setDegree] = useState("Computer Engineering");
  const [degreeStart, setDegreeStart] = useState("2024-06-29");
  const [degreeEnd, setDegreeEnd] = useState("2024-08-29");
  //General setter functions

  //Education setter functions
  function handleSchoolNameInput(e) {
    setSchoolName(e.target.value);
  }

  function handleLocationInput(e) {
    setLocation(e.target.value);
  }

  function handleDegreeInput(e) {
    setDegree(e.target.value);
  }
  function handleDegreeStartInput(e) {
    setDegreeStart(e.target.value);
  }
  function handleDegreeEndInput(e) {
    setDegreeEnd(e.target.value);
  }

  return (
    <div className="app">
      <div className="form">
        <General generalInfo={general} setGeneralInfo={setGeneral} />
        <Education
          schoolName={schoolName}
          location={location}
          degree={degree}
          degreeStart={degreeStart}
          degreeEnd={degreeEnd}
          onSchoolChange={handleSchoolNameInput}
          onLocationChange={handleLocationInput}
          onDegreeChange={handleDegreeInput}
          onDegreeStartChange={handleDegreeStartInput}
          onDegreeEndChange={handleDegreeEndInput}
        />
        <Experience />
        <Skills />
      </div>
      <div className="preview-wrapper">
        <Preview
          generalInfo={general}
          schoolName={schoolName}
          location={location}
          degree={degree}
          degreeStart={degreeStart}
          degreeEnd={degreeEnd}
        />
      </div>
    </div>
  );
}

export default App;
