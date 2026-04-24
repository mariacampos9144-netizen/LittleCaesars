import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

// Edita aquí los horarios. openHour y closeHour son en formato 24 hrs.
// dayIndex sigue el formato JS: 0 = Domingo, 1 = Lunes, ... 6 = Sábado.
const schedule = [
  { dayIndex: 1, label: "Lunes",     openHour: 11, closeHour: 22 },
  { dayIndex: 2, label: "Martes",    openHour: 11, closeHour: 22 },
  { dayIndex: 3, label: "Miércoles", openHour: 11, closeHour: 22 },
  { dayIndex: 4, label: "Jueves",    openHour: 11, closeHour: 22 },
  { dayIndex: 5, label: "Viernes",   openHour: 11, closeHour: 23 },
  { dayIndex: 6, label: "Sábado",    openHour: 11, closeHour: 23 },
  { dayIndex: 0, label: "Domingo",   openHour: 12, closeHour: 22 },
];

function formatHour(hour: number) {
  const suffix = hour >= 12 ? "pm" : "am";
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${h12}:00 ${suffix}`;
}

function getStatus(now: Date) {
  const dayIndex = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const today = schedule.find((s) => s.dayIndex === dayIndex);
  if (!today) return { isOpen: false, message: "Cerrado hoy" };
  if (hour >= today.openHour && hour < today.closeHour) {
    const closesIn = Math.max(0, Math.floor(today.closeHour - hour));
    return {
      isOpen: true,
      message:
        closesIn <= 1
          ? "Cerramos pronto"
          : `Abierto · cierra a las ${formatHour(today.closeHour)}`,
    };
  }
  if (hour < today.openHour) {
    return { isOpen: false, message: `Abrimos hoy a las ${formatHour(today.openHour)}` };
  }
  return { isOpen: false, message: "Cerrado por hoy" };
}

export default function Hours() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const status = getStatus(now);
  const todayIndex = now.getDay();

  return (
    <section id="horarios" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Clock size={16} />
              Horarios
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Cuándo estamos <span className="text-primary">listos</span> para ti
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Pasa por tu pizza recién hecha o llámanos. Te esperamos en el corazón de Tlaquepaque.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-[1fr_1.2fr] gap-6"
          >
            {/* Live status card */}
            <div
              className={`rounded-2xl p-8 border flex flex-col justify-center ${
                status.isOpen
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-foreground text-background border-foreground"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  {status.isOpen && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ${
                      status.isOpen ? "bg-white" : "bg-red-400"
                    }`}
                  />
                </span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  {status.isOpen ? "Estamos abiertos" : "Cerrado ahora"}
                </span>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold leading-tight">
                {status.message}
              </p>
              <p className="mt-4 text-sm opacity-80">
                Hora local de Guadalajara ·{" "}
                {now.toLocaleTimeString("es-MX", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            {/* Schedule list */}
            <div className="rounded-2xl border bg-card p-6 md:p-8">
              <ul className="divide-y divide-border">
                {schedule.map((day) => {
                  const isToday = day.dayIndex === todayIndex;
                  return (
                    <li
                      key={day.label}
                      className={`flex items-center justify-between py-4 ${
                        isToday ? "font-bold" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2 py-1 rounded-full">
                            Hoy
                          </span>
                        )}
                        <span
                          className={`text-base ${
                            isToday ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {day.label}
                        </span>
                      </div>
                      <span
                        className={`tabular-nums text-base ${
                          isToday ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {formatHour(day.openHour)} – {formatHour(day.closeHour)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
