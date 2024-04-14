import "./App.css";
import { NavBar } from "./component/NavBar";
import { Banner } from "./component/Banner";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Intern } from "./component/Intern";
import { AboutMe } from "./component/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe/>
      <Skills />
      <Projects />
      <Intern />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
