import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    alert("Köszönjük! Az üzeneted sikeresen elküldtük.");
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">
        Kapcsolat
      </h1>

      <p className="text-center text-slate-500 mb-10">
        Kérdésed van a projekttel kapcsolatban? Itt tudsz üzenetet küldeni.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">
            Projektinformációk
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Készítette</h3>
              <p>Baranyi Eszter</p>
            </div>

            <div>
              <h3 className="font-semibold">Projekt típusa</h3>
              <p>React + TypeScript vizsgamunka</p>
            </div>

            <div>
              <h3 className="font-semibold">Téma</h3>
              <p>Fitness alkalmazás</p>
            </div>

            <div>
              <h3 className="font-semibold">Fő funkciók</h3>
              <p>Edzésötletek, BMI kalkulátor, API-idézet, témaváltás</p>
            </div>
          </div>
        </div>

        <div className="bg-white text-slate-900 rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Név"
                className="w-full border rounded-xl p-4 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("name", {
                  required: "A név megadása kötelező!",
                })}
              />

              {errors.name && (
                <p className="text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email cím"
                className="w-full border rounded-xl p-4 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("email", {
                  required: "Az email megadása kötelező!",
                })}
              />

              {errors.email && (
                <p className="text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Üzenet..."
                className="w-full border rounded-xl p-4 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 outline-none"
                {...register("message", {
                  required: "Az üzenet megadása kötelező!",
                })}
              />

              {errors.message && (
                <p className="text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
              Üzenet küldése
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}