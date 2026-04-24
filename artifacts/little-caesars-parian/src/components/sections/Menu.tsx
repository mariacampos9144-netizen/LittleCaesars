import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Edita aquí los productos del menú
const menuItems = [
  {
    id: 1,
    name: "Pizza Pepperoni",
    description: "Clásica con generoso pepperoni y queso mozzarella derretido",
    price: 109,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pizza Hawaiana",
    description: "Jamón, piña y queso mozzarella sobre masa esponjosa",
    price: 129,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Crazy Bread",
    description: "8 deliciosos panes con mantequilla, ajo y queso parmesano",
    price: 49,
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Refrescos",
    description: "Coca-Cola 600ml o Pepsi 600ml bien fría",
    price: 25,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Menu() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestro <span className="text-primary">Menú</span></h2>
            <p className="text-lg text-muted-foreground">
              Los clásicos favoritos, siempre listos para llevar. Calidad y sabor a un precio inigualable.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg group h-full flex flex-col hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-black text-lg px-3 py-1 rounded-full shadow-md">
                    ${item.price}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground flex-grow mb-6">{item.description}</p>
                  <Button onClick={scrollToContact} className="w-full font-bold rounded-full" variant="outline">
                    Pedir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
