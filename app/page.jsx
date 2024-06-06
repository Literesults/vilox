import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import WhyUs from "./components/whyUs/why";

export default function Home() {
 return(
    <>
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
