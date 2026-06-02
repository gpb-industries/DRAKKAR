<div align="center">

<img src="public/drakkar-logo.png" alt="Dräkkar Labs" width="120" />

# Dräkkar Labs

### Ingeniería Inteligente para la Próxima Era Digital

[![CI](https://github.com/gpb-industries/DRAKKAR/actions/workflows/ci.yml/badge.svg)](https://github.com/gpb-industries/DRAKKAR/actions/workflows/ci.yml)
[![Deploy](https://github.com/gpb-industries/DRAKKAR/actions/workflows/deploy.yml/badge.svg)](https://github.com/gpb-industries/DRAKKAR/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](#)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

---

Sitio web corporativo de **Dräkkar Labs** — startup tecnológica con sede en Santiago, Chile.
Construido con Stack de clase mundial: Next.js, React, TypeScript, TailwindCSS, Framer Motion.

[Sitio Web](#) · [DevSactum](#devsactum) · [Carreras](#carreras) · [Contacto](#contacto)

</div>

---

## Tabla de Contenidos

- [Sobre Nosotros](#sobre-nosotros)
- [DevSactum](#devsactum)
- [Características del Sitio](#características-del-sitio)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Inicio Rápido](#inicio-rápido)
- [Workflows CI/CD](#workflows-cicd)
- [Scripts Disponibles](#scripts-disponibles)
- [Equipo](#equipo)
- [Roadmap](#roadmap)
- [Licencia](#licencia)

---

## Sobre Nosotros

**Dräkkar Labs** es una startup tecnológica fundada en 2026, con sede en La Pintana, Santiago, Chile. Nos enfocamos en ingeniería de inteligencia artificial, infraestructura cloud y herramientas para desarrollo de software.

> *Construimos infraestructura y productos que potencian la evolución del software moderno a escala global.*

### Nuestros Pilares

| Pilar | Descripción |
|-------|-------------|
| 🧠 **IA Avanzada** | Sistemas de inteligencia artificial de última generación |
| ☁️ **Cloud Native** | Arquitectura cloud-native diseñada para escalar |
| 🔧 **Ingeniería de Elite** | Precisión técnica y excelencia en cada línea de código |
| 🌐 **Escala Global** | Infraestructura pensada para servir a millones |

---

## DevSactum

<div align="center">

### Nuestro Primer Producto

**La red social definitiva para la comunidad de desarrollo de software.**

`Beta · Septiembre 2026`

</div>

DevSactum conecta programadores, desarrolladores, startups, estudiantes, profesores y creadores de contenido tech en una plataforma construida por y para la comunidad.

### Funciones Principales

| Función | Descripción |
|---------|-------------|
| 👥 **Red Social** | Conecta, comparte y colabora con desarrolladores globalmente |
| 💻 **Publicaciones de Código** | Snippets con syntax highlighting integrado |
| 💬 **Debates Técnicos** | Discute arquitecturas y mejores prácticas |
| 📚 **Recursos y Tutoriales** | Contenido educativo creado por la comunidad |
| 🎥 **Contenido Multimedia** | Livestreams, tutoriales en video, demos |
| 🎓 **Educación** | Herramientas para estudiantes y profesores |
| 💼 **Empleo** | Board de empleo tech startups y empresas |
| ✍️ **Creadores Tech** | Plataforma para creadores de contenido |

---

## Características del Sitio

- ⚡ **Performance Extrema** — Lighthouse 95+
- 🎨 **Dark Mode Nativo** — Diseño premium futuristic
- 🌍 **SEO Optimizado** — Metadata completa, Open Graph, Twitter Cards
- ♿ **Accesibilidad** — WCAG AA+
- 📱 **Mobile-First** — Responsive design real
- 🎬 **Motion Design** — Animaciones fluidas con Framer Motion
- 💬 **Chatbot FAQ** — Asistente interactivo con 10+ respuestas
- 🌌 **Partículas Interactivas** — Sistema de partículas en canvas
- 🖼️ **Logo Real** — Integración del logo oficial Dräkkar Labs
- 🔒 **Glassmorphism** — UI avanzada con blur y transparencias

---

## Stack Tecnológico

<div align="center">

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript 5 |
| **UI Library** | React 19 |
| **Estilos** | TailwindCSS 4 |
| **Animaciones** | Framer Motion |
| **Iconos** | Lucide React |
| **Utilidades** | clsx, tailwind-merge |
| **Build** | Turbopack |
| **Deploy** | Vercel |
| **CI/CD** | GitHub Actions |

</div>

---

## Estructura del Proyecto

```
DRAKKAR/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Lint, TypeCheck, Build, Tests
│       ├── deploy.yml      # Deploy a producción (Vercel)
│       └── preview.yml     # Preview en Pull Requests
├── public/
│   └── drakkar-logo.png   # Logo oficial
├── src/
│   ├── app/
│   │   ├── globals.css     # Estilos globales, utilidades CSS
│   │   ├── layout.tsx      # Layout raíz + metadata SEO
│   │   └── page.tsx        # Página principal (composición)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Navegación sticky con glassmorphism
│   │   │   └── Footer.tsx   # Footer completo con links
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero con partículas y parallax
│   │   │   ├── DevSactum.tsx     # Showcase de DevSactum
│   │   │   ├── About.tsx         # Historia, misión, valores, timeline
│   │   │   ├── Products.tsx      # Plataforma y productos
│   │   │   ├── Services.tsx      # Servicios de ingeniería
│   │   │   ├── Technology.tsx    # Grid de tecnologías
│   │   │   ├── InnovationLab.tsx # Laboratorio de innovación HUD
│   │   │   ├── Careers.tsx       # Posiciones abiertas
│   │   │   └── Contact.tsx       # Formulario corporativo
│   │   └── ui/
│   │       ├── Preloader.tsx     # Pantalla de carga animada
│   │       ├── ScrollToTop.tsx   # Botón volver arriba
│   │       ├── Particles.tsx     # Sistema de partículas canvas
│   │       └── Chatbot.tsx       # Chatbot FAQ interactivo
│   └── lib/
│       └── utils.ts              # Utilidades (cn helper)
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Inicio Rápido

### Prerrequisitos

- **Node.js** 18+ (recomendado: 20)
- **npm** 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gpb-industries/DRAKKAR.git
cd DRAKKAR

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

### Comandos

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar ESLint
```

---

## Workflows CI/CD

### CI (`ci.yml`)
Se ejecuta en cada **push** o **PR** a `main`/`develop`:
- ✅ Lint (ESLint)
- ✅ TypeCheck (TypeScript)
- ✅ Build (Next.js)
- ✅ Tests

### Deploy (`deploy.yml`)
Se ejecuta en cada **push** a `main`:
- 🚀 Build de producción
- 🚀 Deploy automático a Vercel

### Preview (`preview.yml`)
Se ejecuta en cada **PR** a `main`:
- 🔍 Build + deploy preview a Vercel
- 💬 Comentario automático con URL de preview

> **Nota:** Requiere configurar el secret `VERCEL_TOKEN` en GitHub Settings → Secrets.

---

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack |
| `npm run build` | Genera el build de producción optimizado |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para detectar errores de código |

---

## Equipo

**Dräkkar Labs** — Fundada en 2026 en Santiago, Chile.

| Rol | Estado |
|-----|--------|
| Frontend Engineer | 🟡 Buscando |
| Backend Engineer | 🟡 Buscando |
| UI/UX Designer | 🟡 Buscando |
| AI Engineer | 🟡 Buscando |
| DevRel | 🟡 Buscando |

> 🟢 Contratado · 🟡 Buscando · 🔴 No disponible

[Ver posiciones abiertas →](#carreras)

---

## Roadmap

### 2026

- [x] Fundación de Dräkkar Labs
- [x] Sitio web corporativo
- [x] Diseño de DevSactum
- [ ] Desarrollo de DevSactum
- [ ] Beta cerrada de DevSactum (Septiembre)
- [ ] Beta pública de DevSactum
- [ ] Dräkkar Core — Capa de infraestructura
- [ ] Dräkkar AI — Framework de IA

### 2027

- [ ] Lanzamiento oficial de DevSactum
- [ ] Expansión de equipo
- [ ] Dräkkar Cloud — Plataforma cloud-native
- [ ] Primeros clientes enterprise
- [ ] Open source components

---

## Contacto

| Canal | Información |
|-------|------------|
| 📍 **Sede** | La Pintana, Santiago, Chile |
| 🌐 **GitHub** | [gpb-industries/DRAKKAR](https://github.com/gpb-industries/DRAKKAR) |
| 💼 **LinkedIn** | Próximamente |
| 🐦 **Twitter/X** | Próximamente |

---

## Licencia

Este proyecto es privado y proprietario. © 2026 Dräkkar Labs. Todos los derechos reservados.

---

<div align="center">

**Construido con Ingeniería de Élite** · Santiago, Chile

<img src="public/drakkar-logo.png" alt="Dräkkar Labs" width="40" />

</div>
