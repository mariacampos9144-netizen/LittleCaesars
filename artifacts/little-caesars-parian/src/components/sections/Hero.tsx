import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2681&auto=format&fit=crop"
          alt="Pizza deliciosa"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-black/40 to-black/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
            Hot-N-Ready
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            Pizza <span className="text-primary">rápida</span>,<br />
            deliciosa y<br />
            lista para llevar
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Disfruta el sabor de Little Caesars en el corazón de Tlaquepaque
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
            >
              Ordena ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-md transition-colors"
            >
              Ver Menú
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
