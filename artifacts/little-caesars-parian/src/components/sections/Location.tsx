import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  const address = "C. Herrera y Cairo 17, Centro, San Pedro Tlaquepaque, Jalisco";
  const mapsUrl = "https://www.google.com/maps?q=C.+Herrera+y+Cairo+17,+Centro,+San+Pedro+Tlaquepaque,+Jalisco&output=embed";

  return (
    <section id="ubicacion" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestra <span className="text-primary">Ubicación</span></h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="text-primary" /> 
            {address}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-border bg-card"
        >
          <div className="grid md:grid-cols-3 h-[500px]">
            <div className="p-8 md:p-12 flex flex-col justify-center bg-muted/30 md:col-span-1 border-b md:border-b-0 md:border-r border-border">
              <h3 className="text-2xl font-bold mb-4">Visítanos hoy</h3>
              <p className="text-muted-foreground mb-6">
                Estamos ubicados en el corazón de Tlaquepaque, a unos pasos del famoso Parián. ¡Te esperamos!
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-bold text-sm uppercase text-muted-foreground">Lunes a Domingo</p>
                  <p className="text-lg font-medium">11:00 AM - 10:00 PM</p>
                </div>
              </div>

              <Button 
                className="w-full font-bold rounded-full gap-2" 
                onClick={() => window.open(`https://maps.google.com/?q=${address}`, "_blank")}
              >
                <Navigation size={18} />
                Cómo llegar
              </Button>
            </div>
            <div className="md:col-span-2 h-full min-h-[300px]">
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Little Caesars Parián"
                className="filter contrast-[0.95] hue-rotate-[1.05]"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
