import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  phone: z.string().length(10, { message: "El teléfono debe tener exactamente 10 dígitos" }).regex(/^\d+$/, { message: "Solo se permiten números" }),
  message: z.string().min(5, { message: "El pedido/mensaje debe tener al menos 5 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Formulario enviado:", data);
    toast.success("¡Pedido recibido! Te contactaremos pronto.", {
      style: {
        background: 'hsl(var(--primary))',
        color: 'white',
        border: 'none'
      }
    });
    form.reset();
  };

  return (
    <section id="contacto" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">Haz tu <br />Pedido <span className="text-black">Ahora</span></h2>
            <p className="text-xl md:text-2xl mb-8 font-medium text-white/90">
              ¿Listo para disfrutar? Déjanos tus datos y lo que deseas ordenar. Nosotros nos encargamos del resto.
            </p>
            <div className="flex items-center gap-4 text-lg font-bold bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 w-fit">
              <span className="text-4xl">🍕</span>
              <div>
                <p className="text-white/80 text-sm uppercase tracking-wider">Llamada directa</p>
                <p className="text-2xl">33 1234 5678</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl bg-background text-foreground overflow-hidden">
              <div className="bg-muted p-4 border-b">
                <h3 className="font-bold text-xl text-center">Formulario de Pedido</h3>
              </div>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Juan Pérez" className="h-12 bg-muted/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Teléfono (10 dígitos)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. 3312345678" className="h-12 bg-muted/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Pedido o Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ej. Quiero 2 pizzas de pepperoni y 1 crazy bread..." 
                              className="min-h-[120px] resize-none bg-muted/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-14 text-lg font-bold rounded-full">
                      Enviar Pedido
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
