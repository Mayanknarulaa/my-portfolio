import { useState } from "react";
import NavbarTemp from "./components/NavbarTemp";

function App() {
  const [isDark, setIsDark] = useState(false);

   function handleToggle() {
   setIsDark(!isDark);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();

  element.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
  element.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  }

  return ( 
    <main
      className={`min-h-screen ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-blue-100 text-slate-900"
      }`}
    >
    <div className="relative isolate min-h-screen cursor-glow overflow-hidden" onMouseMove={handleMouseMove}>
    <NavbarTemp isDark={isDark} onToggle={handleToggle} />
    <section className={`relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-5 py-24 text-center ${
    isDark ? "text-white" : "text-slate-950"}`} onMouseMove={handleMouseMove}>
    <div className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs tracking-widest ${ isDark ? "border-teal-400/20 bg-teal-400/5 text-teal-400"
    : "border-teal-600/20 bg-teal-500/5 text-teal-700" }`}>
    <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
    AVAILABLE FOR FRONTEND OPPORTUNITIES
    </div>
    {/* <p className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-700"><span className="h-2 w-2 rounded-full bg-blue-500" />Available for frontend opportunities</p> */}
    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">Mayank <span className="text-blue-600">Narula</span></h1>
    <p className={`mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl ${ isDark ? "text-slate-400" : "text-slate-600"}`}>Building Intelligent systems with AI & Creative Technology</p>
    <p className={`mt-4 font-mono text-xs leading-7 sm:text-sm ${ isDark ? "text-teal-400/80" : "text-blue-700"}`}>REACT <span className="text-blue-500">|</span> TYPESCRIPT
    <span className="text-blue-500"> | </span> CREATIVE DEVELOPMENT</p>
    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
      <a href="#" className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-blue-700">View Projects →</a>
      <a href="#" className="rounded-full border border-slate-400/50 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-600">Contact Me</a>
    </div>
    </section>
    </div>

    
    <section
    id="about"
    className={`relative border-t px-6 py-24 md:py-32 ${
    isDark
      ? "border-white/10 bg-slate-950 text-white"
      : "border-blue-200 bg-blue-50 text-slate-900"
    }`}
    >
    <div className="mx-auto max-w-6xl">
    <p className="mb-5 font-mono text-sm tracking-widest text-blue-500">
      01 / ABOUT ME
    </p>

    <div className="grid gap-12 md:grid-cols-2 md:items-start">
      <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Turning ideas into{" "}
        <span className="text-blue-500">digital experiences.</span>
      </h2>

      <div>
        <p
          className={`text-lg leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm a frontend developer focused on building modern, responsive,
          and intuitive web experiences. I enjoy combining clean code,
          thoughtful design, and smooth interactions to create websites
          that look great and work beautifully.
        </p>

        <p
          className={`mt-5 leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          My current focus is React, TypeScript, and developing stronger
          frontend engineering skills through practical projects.
        </p>
      </div>
    </div>

    <div className="mt-16 grid gap-4 sm:grid-cols-2">
      <div
        className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
          isDark
            ? "border-white/10 bg-white/[0.03] hover:border-blue-400/40"
            : "border-blue-200 bg-white/70 hover:border-blue-400"
        }`}
      >
        <span className="text-2xl text-blue-500">01</span>
        <h3 className="mt-4 text-xl font-semibold">
          Frontend Development
        </h3>
        <p
          className={`mt-2 leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Building responsive interfaces with React, JavaScript,
          Tailwind CSS, and modern web technologies.
        </p>
      </div>

      <div
        className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
          isDark
            ? "border-white/10 bg-white/[0.03] hover:border-blue-400/40"
            : "border-blue-200 bg-white/70 hover:border-blue-400"
        }`}
      >
        <span className="text-2xl text-blue-500">02</span>
        <h3 className="mt-4 text-xl font-semibold">
          Design & Interaction
        </h3>
        <p
          className={`mt-2 leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Bringing interfaces to life through visual hierarchy,
          purposeful animations, and attention to detail.
        </p>
      </div>
    </div>
    </div>
    </section>

    </main>
    )
  }

  export default App