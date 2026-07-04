import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import BMI from "./pages/BMI";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-slate-900"
      }
    >
<BrowserRouter basename="/fitness_app">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 pt-4 flex justify-end">
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;