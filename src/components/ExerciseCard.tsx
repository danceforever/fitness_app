type ExerciseCardProps = {
  title: string;
  category: string;
};

export default function ExerciseCard({
  title,
  category,
}: ExerciseCardProps) {
  const getEmoji = () => {
    switch (category) {
      case "Erősítés":
        return "💪";
      case "Kardió":
        return "🏃";
      case "Hasizom":
        return "🔥";
      case "Állóképesség":
        return "❤️";
      case "Farizom":
        return "🍑";
      case "Alsótest":
        return "🦵";
      case "Láb edzés":
        return "🏋️";
      case "Törzsizom":
        return "⚡";
      default:
        return "🏋️";
    }
  };

  const getBadgeColor = () => {
    switch (category) {
      case "Erősítés":
        return "bg-blue-100 text-blue-700";
      case "Kardió":
        return "bg-red-100 text-red-700";
      case "Hasizom":
        return "bg-orange-100 text-orange-700";
      case "Állóképesség":
        return "bg-green-100 text-green-700";
      case "Farizom":
        return "bg-pink-100 text-pink-700";
      case "Alsótest":
        return "bg-purple-100 text-purple-700";
      case "Láb edzés":
        return "bg-indigo-100 text-indigo-700";
      case "Törzsizom":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white text-slate-900 rounded-3xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="flex justify-between items-center mb-5">
        <span className="text-5xl">{getEmoji()}</span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor()}`}
        >
          {category}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        Ez a gyakorlat segít fejleszteni az erőnlétet, javítani az állóképességet
        és támogatja az egészséges életmód kialakítását.
      </p>
    </div>
  );
}