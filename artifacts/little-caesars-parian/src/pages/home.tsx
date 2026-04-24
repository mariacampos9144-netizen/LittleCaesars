import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import ContactForm from "@/components/sections/ContactForm";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <ContactForm />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
