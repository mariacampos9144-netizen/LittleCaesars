import React from "react";
import { Pizza, Heart, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-full">
                <Pizza size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Little Caesars <span className="text-primary">Parián</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Pizza rápida, deliciosa y lista para llevar. El sabor inconfundible ahora en el corazón de Tlaquepaque.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Menú', 'Galería', 'Contacto', 'Ubicación'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace('ú', 'u').replace('í', 'i').replace('ó', 'o')}`} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>C. Herrera y Cairo 17, Centro, San Pedro Tlaquepaque, Jalisco</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>33 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contacto@littlecaesarsparian.com</span>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-bold text-xl uppercase tracking-wider text-primary">Proyecto Académico</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-white">Estudiante:</strong> Maria Guadalupe Campos Ramirez</p>
              <p><strong className="text-white">Universidad:</strong> CUCEI — Universidad de Guadalajara</p>
            </div>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 flex items-center justify-center mt-4 bg-black/20 h-24">
              <span className="text-gray-500 font-medium text-sm">Logo CUCEI</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Little Caesars Pizza 'Parián'. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-primary" /> en Jalisco
          </p>
        </div>
      </div>
    </footer>
  );
}
