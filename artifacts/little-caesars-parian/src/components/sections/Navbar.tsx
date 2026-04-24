import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Menú", href: "#menu" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, "#inicio")}
          className="flex items-center gap-2 group"
        >
          <div className="bg-primary text-primary-foreground p-2 rounded-full group-hover:scale-105 transition-transform">
            <Pizza size={24} />
          </div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
            Little Caesars <span className="text-primary">Parián</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={(e: any) => handleScrollTo(e, "#contacto")}
            className="font-bold rounded-full px-6"
          >
            Ordena Ahora
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={(e: any) => handleScrollTo(e, "#contacto")}
                className="mt-4 w-full font-bold text-lg h-12"
              >
                Ordena Ahora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
