import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import About from "./Components/About";
import Skills from "./Components/Skills";
import ScrollToTop from "./Components/ScrollToTop";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
