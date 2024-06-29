import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
function App() {
  //General state variable
  const [firstName, setFirstName] = useState("Aziz");
  const [lastName, setLastName] = useState("Ben Lamine");
  const [email, setEmail] = useState("azizbenlamine@gmail.com");
  const [phone, setPhone] = useState("27266798");

  //Education state variable
  const [schoolName, setSchoolName] = useState("ESPRIT");
  const [location, setLocation] = useState("Ariana, Tunisia ");
  const [degree, setDegree] = useState("Computer Engineering");
  const [degreeStart, setDegreeStart] = useState("2024-06-29");
  const [degreeEnd, setDegreeEnd] = useState("2024-08-29");
  //General setter functions
  function handleFirstNameInput(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameInput(e) {
    setLastName(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePhoneInput(e) {
    setPhone(e.target.value);
  }

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
        <General
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          onNameChange={handleFirstNameInput}
          onLastNameChange={handleLastNameInput}
          onEmailChange={handleEmailInput}
          onPhoneChange={handlePhoneInput}
        />
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
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
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
