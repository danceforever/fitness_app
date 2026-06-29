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
    alert("Köszönjük! Az üzeneted sikeresen elküldted.");
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">
        Kapcsolat
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Kérdésed van? Írj nekünk bátran!
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Bal oldal */}

        <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">
            Elérhetőségek
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold">📧 Email</h3>
              <p>fittrack@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold">📍 Helyszín</h3>
              <p>Budapest, Magyarország</p>
            </div>

            <div>
              <h3 className="font-semibold">📞 Telefon</h3>
              <p>+36 30 123 4567</p>
            </div>

            <div>
              <h3 className="font-semibold">🕒 Elérhetőség</h3>
              <p>Hétfő - Péntek</p>
              <p>08:00 - 18:00</p>
            </div>

          </div>
        </div>

        {/* Jobb oldal */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            <div>
              <input
                type="text"
                placeholder="Név"
                className="w-full border rounded-xl p-4"
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
                className="w-full border rounded-xl p-4"
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
                className="w-full border rounded-xl p-4"
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