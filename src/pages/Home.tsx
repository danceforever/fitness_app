import { useEffect, useState } from "react";
import useGreeting from "../hooks/useGreeting";
import InfoCard from "../components/InfoCard";

export default function Home() {
  const greeting = useGreeting();

  const [quote, setQuote] = useState(
    "A siker nem a tökéletességről szól, hanem a következetességről."
  );

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
      })
      .catch(() => {
        console.log("Nem sikerült betölteni az idézetet.");
      });
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            {greeting}
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            FitTrack
          </h1>

          <p className="text-xl text-slate-700 mt-4 font-medium">
            Egyszerű fitness alkalmazás.
          </p>

          <p className="text-lg text-slate-600 mt-6">
            A FitTrack egy React és TypeScript alapú webalkalmazás, amely
            edzésötleteket, BMI kalkulátort és egy külső API-ból érkező napi
            motivációs idézetet kínál.
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold mb-4">
            Napi motiváció
          </h2>

          <p className="italic text-lg text-slate-700">
            "{quote}"
          </p>

          <p className="text-sm text-slate-400 mt-6">
            Az idézet külső API segítségével töltődik be.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-4">
          Az alkalmazás funkciói
        </h2>

        <p className="text-center text-slate-600 mb-10">
          A projekt célja a React legfontosabb funkcióinak bemutatása egy
          egyszerű fitness témájú alkalmazásban.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="Edzések"
            description="Egyszerű, otthon is elvégezhető gyakorlatok újrahasznosítható komponensek segítségével."
          />

          <InfoCard
            title="BMI kalkulátor"
            description="React Hook Form segítségével készült űrlap validációval és automatikus BMI számítással."
          />

          <InfoCard
            title="Motiváció"
            description="A főoldalon egy külső API-ból betöltött motivációs idézet jelenik meg."
          />
        </div>
      </section>
    </main>
  );
}