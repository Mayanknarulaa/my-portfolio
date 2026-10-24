import ToggleTheme from "./ToggleTheme";

type NavbarTempProps = {
  isDark: boolean;
  onToggle: () => void;
};

function NavbarTemp({ isDark, onToggle }: NavbarTempProps) {
   
    return (
    <header className="mx-auto pt-5 max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900 px-6 py-4 text-white shadow-lg">
        <a href="#" className="text-lg font-bold tracking-tight">
          MN<span className="text-blue-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <ToggleTheme isDark={isDark} onToggle={onToggle} />
          {/* <ToggleTheme/>         */}

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-400">
            Let's Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default NavbarTemp;
