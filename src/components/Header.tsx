import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-rosepine-surface/80 backdrop-blur-sm border-b border-rosepine-overlay">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-rosepine-text">
            Why Is <span className="text-rosepine-pine">Faizan</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex gap-3 text-base font-semibold text-rosepine-text/90">
              <a href="#" className="p-2 hover:text-rosepine-pine transition-colors">Home</a>
              <a href="#projects" className="p-2 hover:text-rosepine-pine transition-colors">Projects</a>
              <a href="#work" className="p-2 hover:text-rosepine-pine transition-colors">Work</a>
              <a href="#contact" className="p-2 hover:text-rosepine-pine transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
