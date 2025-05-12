import { useState, useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: "rosepine", name: "Rosepine" },
    { id: "rosepine-dawn", name: "Rosepine Dawn" },
    { id: "gruvbox", name: "Gruvbox Dark" },
    { id: "gruvbox-light", name: "Gruvbox Light" },
    { id: "catppuccin", name: "Catppuccin Dark" },
    { id: "catppuccin-light", name: "Catppuccin Light" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-rosepine-surface hover:bg-rosepine-overlay transition-colors"
        aria-label="Toggle theme"
      >
        <svg
          className="w-5 h-5 text-rosepine-text"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-rosepine-surface shadow-lg border border-rosepine-overlay">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id as any);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-rosepine-overlay transition-colors ${
                theme === t.id ? "text-rosepine-love" : "text-rosepine-text"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 