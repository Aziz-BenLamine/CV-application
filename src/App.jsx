import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("Aziz");
  const [lastName, setLastName] = useState("Ben Lamine");
  const [email, setEmail] = useState("azizbenlamine@gmail.com");
  function handleFirstNameInput(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameInput(e) {
    setLastName(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="app">
      <div className="form">
        <General
          firstName={firstName}
          lastName={lastName}
          email={email}
          onNameChange={handleFirstNameInput}
          onLastNameChange={handleLastNameInput}
          onEmailChange={handleEmailInput}
        />
        <Education />
        <Experience />
        <Skills />
      </div>
      <div className="preview-wrapper">
        <Preview firstName={firstName} lastName={lastName} email={email} />
      </div>
    </div>
  );
}

export default App;
