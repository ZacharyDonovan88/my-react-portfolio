import './App.css';
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Work from "./components/Work/Work.js";
import Contact from "./components/Contact/Contact.js";
import Resume from "./components/Resume/Resume.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div>
      <Home />,
      <Navbar />
      <div id="sidebar-padding">
        <About />
        <Work />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
