import Home from "../container/Home";
import About from "../container/About";
import Courses from "../container/Course/Courses";
import Faqs from "../container/Faqs";
import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Navbar from "../Navbar/Navbar"

export default function Index(){
    return(
        <div className="font-Fredoka ">
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    )
}