import { createContext, useContext, useEffect, useState } from "react";

type Theme = "rosepine" | "rosepine-dawn" | "gruvbox" | "gruvbox-light" | "catppuccin" | "catppuccin-light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  rosepine: {
    base: "#191724",
    surface: "#1f1d2e",
    overlay: "#26233a",
    muted: "#6e6a86",
    subtle: "#908caa",
    text: "#e0def4",
    love: "#eb6f92",
    gold: "#f6c177",
    rose: "#ebbcba",
    pine: "#31748f",
    foam: "#9ccfd8",
    iris: "#c4a7e7",
  },
  "rosepine-dawn": {
    base: "#faf4ed",
    surface: "#fffaf3",
    overlay: "#f2e9e1",
    muted: "#9893a5",
    subtle: "#797593",
    text: "#575279",
    love: "#b4637a",
    gold: "#ea9d34",
    rose: "#d7827e",
    pine: "#286983",
    foam: "#56949f",
    iris: "#907aa9",
  },
  gruvbox: {
    base: "#282828",
    surface: "#3c3836",
    overlay: "#504945",
    muted: "#928374",
    subtle: "#a89984",
    text: "#ebdbb2",
    love: "#fb4934",
    gold: "#fabd2f",
    rose: "#fe8019",
    pine: "#8ec07c",
    foam: "#83a598",
    iris: "#d3869b",
  },
  "gruvbox-light": {
    base: "#fbf1c7",
    surface: "#f2e5bc",
    overlay: "#ebdbb2",
    muted: "#a89984",
    subtle: "#928374",
    text: "#3c3836",
    love: "#cc241d",
    gold: "#d79921",
    rose: "#b57614",
    pine: "#689d6a",
    foam: "#458588",
    iris: "#b16286",
  },
  catppuccin: {
    base: "#1e1e2e",
    surface: "#313244",
    overlay: "#45475a",
    muted: "#a6adc8",
    subtle: "#cdd6f4",
    text: "#cdd6f4",
    love: "#f38ba8",
    gold: "#f9e2af",
    rose: "#fab387",
    pine: "#a6e3a1",
    foam: "#89dceb",
    iris: "#cba6f7",
  },
  "catppuccin-light": {
    base: "#eff1f5",
    surface: "#e6e9ef",
    overlay: "#dce0e8",
    muted: "#9ca0b0",
    subtle: "#4c4f69",
    text: "#4c4f69",
    love: "#d20f39",
    gold: "#df8e1d",
    rose: "#fe640b",
    pine: "#40a02b",
    foam: "#04a5e5",
    iris: "#8839ef",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "rosepine";
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[theme];

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--rosepine-${key}`, value);
    });

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 