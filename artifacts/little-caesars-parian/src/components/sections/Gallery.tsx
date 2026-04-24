import React from "react";
import { motion } from "framer-motion";

// Edita aquí las imágenes de la galería
const galleryImages = [
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1000&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestra <span className="text-primary">Galería</span></h2>
          <p className="text-lg text-muted-foreground">
            Imágenes que te harán agua la boca. Preparadas con pasión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-muted"
            >
              <img 
                src={src} 
                alt={`Galería de pizza ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg drop-shadow-md">¡Deliciosa!</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
