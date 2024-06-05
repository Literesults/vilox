import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import { Download } from "./components/download/download";
import WhyUs from "./components/whyUs/why";

export default function Home() {
 return(
    <>
    <Hero />
    <WhyUs />
    <About />
   
    <Download />
    </>
 )

}
