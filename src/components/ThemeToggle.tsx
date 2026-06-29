type ThemeToggleProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-full px-5 py-2 bg-blue-600 text-white shadow hover:bg-blue-700 transition"
    >
      {darkMode ? "☀️ Light mód" : "🌙 Dark mód"}
    </button>
  );
}