import React from "react";
import { motion } from "framer-motion";
import { Clock, BadgeDollarSign, Star } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Rapidez",
      description: "Nuestro modelo Hot-N-Ready garantiza que tu pizza esté lista cuando tú lo estés. Sin esperas."
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-primary" />,
      title: "Precio Accesible",
      description: "La mejor relación calidad-precio. Alimentar a toda la familia nunca fue tan económico."
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: "Calidad",
      description: "Ingredientes frescos, queso 100% real y masa preparada diariamente en nuestra sucursal."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              El Sabor de <span className="text-primary">Siempre</span>, <br />
              Ahora en El Parián
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Little Caesars Pizza 'Parián' combinamos la eficiencia y el sabor inconfundible de nuestra marca global con la calidez del centro histórico de San Pedro Tlaquepaque.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ya sea que vengas de escuchar mariachi en el Parián, de comprar artesanías, o simplemente tengas antojo de una buena pizza, estamos listos para atenderte con una sonrisa y una pizza caliente.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop" 
              alt="Pizza recién horneada" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-primary text-white font-bold px-4 py-2 rounded-full inline-block mb-3">
                Desde 1959
              </div>
              <h3 className="text-3xl font-black text-white">Tradición Pizzera</h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
