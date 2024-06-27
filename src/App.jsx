import General from "./components/General";
import Preview from "./components/Preview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="app">
      <div className="form">
        <General />
        <Education />
        <Experience />
        <Skills />
      </div>
      <div className="preview-wrapper">
        <Preview />
      </div>
    </div>
  );
}

export default App;
