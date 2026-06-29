import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1 transition duration-300"
: "text-slate-600 hover:text-blue-600 hover:scale-105 transition duration-300";
  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-blue-600 flex items-center gap-2"
        >
          <span>💪</span>
          <span>FitTrack</span>
        </NavLink>

        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>
            Főoldal
          </NavLink>

          <NavLink to="/exercises" className={linkClass}>
            Edzések
          </NavLink>

          <NavLink to="/bmi" className={linkClass}>
            BMI
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Kapcsolat
          </NavLink>
        </div>
      </div>
    </nav>
  );
}