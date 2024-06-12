import Hero from "./components/molecules/Hero.js";
import About from "./components/molecules/About.js";
import Contact from "./components/molecules/Contact.js";
import Download from "./components/molecules/Download.js";
import Faq from "./components/molecules/Faq.js";
import Footer from "./components/molecules/Footer.js";
import Navbar from "./components/navbar/Navbar.js";
import WhyUs from "./components/molecules/why.js";

export default function Home() {
 return(
    <>
    <Navbar />
    <Hero />
    <WhyUs />
    <About />
   <Faq /> 
   <Download />   
   <Contact />
   <Footer />
    </>
 )

}
