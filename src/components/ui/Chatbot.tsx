"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const faqData: { question: string; answer: string; keywords: string[] }[] = [
  {
    question: "¿Qué es Dräkkar Labs?",
    answer: "Dräkkar Labs es una startup tecnológica fundada en 2026, con sede en Santiago, Chile (La Pintana). Nos enfocamos en ingeniería de inteligencia artificial, infraestructura cloud y herramientas para desarrollo de software.",
    keywords: ["drakkar", "labs", "startup", "que es", "empresa"],
  },
  {
    question: "¿Qué es DevSactum?",
    answer: "DevSactum es nuestro primer producto: una red social para la comunidad de desarrollo de software. Conecta programadores, desarrolladores, startups, estudiantes, profesores y creadores de contenido tech. Su lanzamiento beta será en Septiembre 2026.",
    keywords: ["devsactum", "red social", "beta", "lanzamiento", "septiembre"],
  },
  {
    question: "¿Cuándo sale la beta de DevSactum?",
    answer: "La beta de DevSactum está programada para Septiembre 2026. Puedes registrarte en nuestra sección de contacto para acceder anticipadamente.",
    keywords: ["beta", "fecha", "lanzamiento", "septiembre", "cuando"],
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Nuestra sede central está en La Pintana, Santiago, Chile. Actualmente somos un equipo remoto y no contamos con otras oficinas físicas.",
    keywords: ["ubicacion", "oficina", "sede", "chile", "santiago", "donde"],
  },
  {
    question: "¿En qué se diferencian de otras empresas?",
    answer: "Somos una startup nacida en Chile con visión global. Combinamos ingeniería de élite con un enfoque en productos que realmente importan para la comunidad de desarrolladores. DevSactum nace de la necesidad real de una red social hecha por y para programadores.",
    keywords: ["diferencia", "unico", "por que", "ventaja"],
  },
  {
    question: "¿Puedo trabajar con ustedes?",
    answer: "¡Sí! Estamos buscando talento para el equipo de DevSactum y nuestra infraestructura. Revisa la sección de Carreras en el sitio para ver las posiciones abiertas. Todas son remotas.",
    keywords: ["trabajo", "empleo", "carrera", "equipo", "contratar", "remoto"],
  },
  {
    question: "¿Qué tecnologías usan?",
    answer: "Nuestro stack incluye Next.js, TypeScript, React, Node.js, Python, Kubernetes, PostgreSQL, Redis, y herramientas de IA/ML. Diseñamos todo con arquitectura cloud-native y escalable.",
    keywords: ["tecnologias", "stack", "lenguajes", "herramientas"],
  },
  {
    question: "¿DevSactum es gratis?",
    answer: "DevSactum será gratuito para usuarios individuales. Ofreceremos planes premium para empresas y funciones avanzadas. Los detalles exactos se publicarán antes del lanzamiento beta.",
    keywords: ["gratis", "precio", "costo", "planes", "premium", "pago"],
  },
  {
    question: "¿Cómo me registro para la beta?",
    answer: "Puedes escribirnos a través del formulario de contacto en esta página, indicando tu interés en DevSactum Beta. También puedes seguirnos en nuestras redes sociales para estar al tanto.",
    keywords: ["registro", "beta", "inscribirse", "anotarse", "como"],
  },
  {
    question: "¿Qué tipo de contenido tendré en DevSactum?",
    answer: "DevSactum incluirá: publicaciones de código con syntax highlighting, debates técnicos, tutoriales, oportunidades laborales, contenido de creadores tech, y espacios para estudiantes y profesores.",
    keywords: ["contenido", "funciones", "publicaciones", "codigo"],
  },
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  const bestMatch = faqData.find((faq) =>
    faq.keywords.some((keyword) => lower.includes(keyword))
  );

  if (bestMatch) {
    return bestMatch.answer;
  }

  if (lower.includes("hola") || lower.includes("buenas") || lower.includes("hey")) {
    return "¡Hola! Soy el asistente de Dräkkar Labs. Puedo responder preguntas sobre nuestra empresa, DevSactum, tecnología o carreras. ¿Qué te gustaría saber?";
  }

  if (lower.includes("gracias")) {
    return "¡De nada! Si tienes más preguntas, no dudes en preguntar. 😊";
  }

  return "No tengo una respuesta específica para eso. Puedes preguntarme sobre Dräkkar Labs, DevSactum,我们的 tecnología, ubicación, carreras o fecha de la beta. También puedes escribirnos a través del formulario de contacto.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy el asistente de Dräkkar Labs. ¿En qué puedo ayudarte? Pregúntame sobre DevSactum, nuestra empresa, tecnología o carreras.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(question),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-[#FFA500] text-[#050816] flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] transition-all duration-300"
        aria-label="Abrir chat de FAQ"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-8 z-50 w-[380px] max-w-[calc(100vw-4rem)] rounded-2xl glass border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-gold/5 to-electric-blue/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-electric-blue/20 flex items-center justify-center">
                  <Bot size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Dräkkar Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-muted/40">En línea</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.sender === "bot"
                        ? "bg-gradient-to-br from-gold/20 to-electric-blue/20"
                        : "bg-deep-purple/20"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <Bot size={14} className="text-gold" />
                    ) : (
                      <User size={14} className="text-deep-purple" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-white/[0.04] text-muted/80 border border-white/5"
                        : "bg-gold/10 text-gold border border-gold/20"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {["¿Qué es DevSactum?", "¿Cuándo sale la beta?", "¿Dónde están?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="px-3 py-1.5 text-[11px] rounded-full bg-white/[0.04] text-muted/50 border border-white/5 hover:border-gold/20 hover:text-gold transition-all duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white placeholder:text-muted/20 focus:outline-none focus:border-gold/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
