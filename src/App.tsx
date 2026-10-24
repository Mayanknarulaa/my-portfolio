import { useState } from "react";
import NavbarTemp from "./components/NavbarTemp";

function App() {
  const [isDark, setIsDark] = useState(false);

   function handleToggle() {
   setIsDark(!isDark);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
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
    <NavbarTemp isDark={isDark} onToggle={handleToggle} />
    <section className={`cursor-glow relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-5 py-24 text-center ${
    isDark ? "text-white" : "text-slate-950"}`} onMouseMove={handleMouseMove}>
    <div className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs tracking-widest ${ isDark ? "border-teal-400/20 bg-teal-400/5 text-teal-400"
    : "border-teal-600/20 bg-teal-500/5 text-teal-700" }`}>
    <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
    AVAILABLE FOR FRONTEND OPPORTUNITIES
    </div>
    {/* <p className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-700"><span className="h-2 w-2 rounded-full bg-blue-500" />Available for frontend opportunities</p> */}
    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">Mayank <span className="text-blue-600">Narula</span></h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">Building Intelligent systems with AI & Creative Technology</p>
    <p className="mt-4 text-sm font-medium tracking-wide text-slate-500">REACT <span className="text-blue-500">/</span> TYPESCRIPT
    <span className="text-blue-500"> / </span> CREATIVE DEVELOPMENT</p>
    <div className="mt-8 flex flex-wrap gap-4">
      <a href="#" className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-blue-700">View Projects →</a>
      <a href="#" className="rounded-full border border-slate-400/50 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-600">Contact →</a>
    </div>
    </section>
    </main>
  )
}

export default App