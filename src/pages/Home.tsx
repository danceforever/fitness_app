import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const width = useWindowSize();

  const [quote, setQuote] = useState(
    "A siker nem a tökéletességről szól, hanem a következetességről."
  );

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            Fitness webalkalmazás
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Építs egészségesebb rutint a FitTrackkel!
          </h1>

          <p className="text-lg text-slate-600 mt-6">
            Edzésötletek, BMI kalkulátor és napi motiváció egy egyszerű,
            reszponzív React alkalmazásban.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:scale-105 transition">
              <p className="text-4xl mb-2">💪</p>
              <h3 className="text-2xl font-bold text-blue-600">9</h3>
              <p className="text-gray-500">Gyakorlat</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:scale-105 transition">
              <p className="text-4xl mb-2">📊</p>
              <h3 className="text-2xl font-bold text-green-600">BMI</h3>
              <p className="text-gray-500">Kalkulátor</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center hover:scale-105 transition">
              <p className="text-4xl mb-2">🔥</p>
              <h3 className="text-2xl font-bold text-orange-600">24/7</h3>
              <p className="text-gray-500">Motiváció</p>
            </div>
          </div>
        </div>

        <div className="bg-white text-slate-900 rounded-3xl shadow-xl p-8 border">
          <div className="text-7xl text-center mb-6">🏋️‍♀️</div>

          <h2 className="text-2xl font-bold mb-4">
            🔥 Napi motiváció
          </h2>

          <p className="italic text-lg text-slate-700">
            "{quote}"
          </p>

          <p className="text-sm text-slate-400 mt-6">
            Custom hook aktív: {width}px
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          Miért válaszd a FitTracket?
        </h2>

        <p className="text-center text-slate-600 mb-10">
          Egy egyszerű, átlátható és motiváló alkalmazás az egészségesebb
          mindennapokhoz.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-slate-900 rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
            <p className="text-5xl mb-4">💪</p>

            <h3 className="text-2xl font-bold mb-3">
              Otthoni edzések
            </h3>

            <p className="text-slate-600">
              Egyszerű, eszköz nélkül is elvégezhető gyakorlatok kezdőknek és
              haladóknak.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
            <p className="text-5xl mb-4">📊</p>

            <h3 className="text-2xl font-bold mb-3">
              BMI kalkulátor
            </h3>

            <p className="text-slate-600">
              Néhány adat megadásával gyorsan kiszámolhatod a BMI értékedet.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
            <p className="text-5xl mb-4">🔥</p>

            <h3 className="text-2xl font-bold mb-3">
              Napi motiváció
            </h3>

            <p className="text-slate-600">
              API-ból érkező idézet segít abban, hogy minden nap lendületben
              maradj.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}