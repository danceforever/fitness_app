import { useForm } from "react-hook-form";
import { useBMICalculator } from "../hooks/useBMICalculator";

type FormData = {
  weight: number;
  height: number;
};

export default function BMI() {
  const { result, category, calculateBMI } = useBMICalculator();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    calculateBMI(data.weight, data.height);
  };

  const resultStyle = () => {
    switch (category) {
      case "Sovány":
        return "bg-yellow-100 border-yellow-300 text-yellow-700";
      case "Normál testsúly":
        return "bg-green-100 border-green-300 text-green-700";
      case "Túlsúly":
        return "bg-orange-100 border-orange-300 text-orange-700";
      default:
        return "bg-red-100 border-red-300 text-red-700";
    }
  };

  const resultEmoji = () => {
    switch (category) {
      case "Sovány":
        return "🟡";
      case "Normál testsúly":
        return "🟢";
      case "Túlsúly":
        return "🟠";
      default:
        return "🔴";
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white text-slate-900 rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          BMI Kalkulátor
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Ellenőrizd, hogy a testsúlyod az egészséges tartományban van-e.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="weight"
              className="block font-semibold mb-2"
            >
              Testsúly (kg)
            </label>

            <input
              id="weight"
              type="number"
              placeholder="Például: 70"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-400 outline-none text-slate-900 bg-white"
              {...register("weight", {
                required: "Add meg a testsúlyt!",
                valueAsNumber: true,
                min: {
                  value: 20,
                  message: "A testsúly legalább 20 kg legyen!",
                },
              })}
            />

            {errors.weight && (
              <p className="text-red-500 mt-1">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="height"
              className="block font-semibold mb-2"
            >
              Magasság (cm)
            </label>

            <input
              id="height"
              type="number"
              placeholder="Például: 170"
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-400 outline-none text-slate-900 bg-white"
              {...register("height", {
                required: "Add meg a magasságot!",
                valueAsNumber: true,
                min: {
                  value: 100,
                  message: "A magasság legalább 100 cm legyen!",
                },
              })}
            />

            {errors.height && (
              <p className="text-red-500 mt-1">
                {errors.height.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            BMI kiszámítása
          </button>
        </form>

        {result !== null && (
          <div
            className={`mt-8 border rounded-2xl p-6 text-center ${resultStyle()}`}
          >
            <p className="text-5xl mb-2">{resultEmoji()}</p>

            <h2 className="text-3xl font-bold">BMI: {result}</h2>

            <p className="text-xl font-semibold mt-2">{category}</p>

            <p className="mt-4">
              A BMI egy tájékoztató jellegű érték. Az egészséges életmódhoz
              fontos a rendszeres mozgás és a kiegyensúlyozott táplálkozás.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
