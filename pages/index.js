import Head from "next/head";
import Image from "next/image";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Features />
      <Features />
      <Cards />
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
