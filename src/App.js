// import logo from './logo.svg';
import "./App.css";
// import Navsection from './Components/Navsection/Navsection';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Legaltranslation from "./Components/Legal translation/Legaltranslation";
import Tax from "./Components/Tax/Tax";
import Typing from "./Components/Typing/Typing";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Legaltranslation" element={<Legaltranslation />} />
        <Route path="/Tax" element={<Tax />}></Route>
        <Route path="/Typing" element={<Typing />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
