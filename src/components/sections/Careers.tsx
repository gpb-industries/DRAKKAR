"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  ArrowUpRight,
  Globe,
  Heart,
  Rocket,
} from "lucide-react";

const openRoles = [
  {
    title: "Ingeniero Frontend Senior",
    team: "DevSactum",
    location: "Remoto",
    type: "Tiempo completo",
  },
  {
    title: "Ingeniero Backend Senior",
    team: "DevSactum",
    location: "Remoto",
    type: "Tiempo completo",
  },
  {
    title: "Diseñador UI/UX",
    team: "DevSactum",
    location: "Remoto",
    type: "Tiempo completo",
  },
  {
    title: "Ingeniero de IA Senior",
    team: "Investigación IA",
    location: "Remoto",
    type: "Tiempo completo",
  },
  {
    title: "Ingeniero de Plataforma",
    team: "Infraestructura",
    location: "Remoto",
    type: "Tiempo completo",
  },
  {
    title: "DevRel / Developer Advocate",
    team: "DevSactum",
    location: "Remoto",
    type: "Tiempo completo",
  },
];

const cultureValues = [
  {
    icon: Globe,
    title: "Primero Remoto",
    description: "Trabaja desde cualquier parte del mundo. Nuestro equipo abarca 30+ países.",
  },
  {
    icon: Rocket,
    title: "Alto Rendimiento",
    description: "Nos movemos rápido, publicamos seguido y nos mantenemos a los más altos estándares.",
  },
  {
    icon: Heart,
    title: "Impulsado por la Innovación",
    description: "20% del tiempo dedicado a investigación, experimentos y proyectos personales.",
  },
  {
    icon: Users,
    title: "Equipos de Élite",
    description: "Equipos pequeños y autónomos con profunda experiencia y total propiedad.",
  },
];

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            <span className="text-xs font-medium text-muted/70 tracking-wider uppercase">
              Carreras
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Construye Sistemas que
            <br />
            <span className="gradient-text">Forman el Futuro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted/50 max-w-2xl mx-auto"
          >
            Únete a un equipo de ingenieros de clase mundial construyendo la
            infraestructura que impulsa la próxima generación de tecnología.
          </motion.p>
        </div>

        {/* Culture values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cultureValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-light text-center group hover:border-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-deep-purple/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={22} className="text-electric-blue" />
              </div>
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-xs text-muted/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Open roles */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Posiciones Abiertas</h3>
          <div className="space-y-3">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl glass-light hover:border-white/10 transition-all duration-300"
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold">{role.title}</h4>
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                      {role.team}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted/40">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {role.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  Aplicar <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
