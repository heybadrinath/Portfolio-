import "./App.css";
import Navbar from "./components/Navbar";
import StartBody from "./components/StartBody";
import Skills from "./components/Skills";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <StartBody />

      <div className="justIcon">
        <img src="https://mattfarley.ca/img/hero-devices.svg" />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <RecentProjects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
