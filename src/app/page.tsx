import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DevSactum from "@/components/sections/DevSactum";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import InnovationLab from "@/components/sections/InnovationLab";
import Roadmap from "@/components/sections/Roadmap";
import Careers from "@/components/sections/Careers";
import Blog from "@/components/sections/Blog";
import Changelog from "@/components/sections/Changelog";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Chatbot from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <DevSactum />
        <About />
        <Products />
        <Services />
        <Technology />
        <InnovationLab />
        <Roadmap />
        <Blog />
        <Changelog />
        <Careers />
        <Testimonials />
        <Partners />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </>
  );
}
