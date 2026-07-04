type ExerciseCardProps = {
  title: string;
  category: string;
  description: string;
};

export default function ExerciseCard({
  title,
  category,
  description,
}: ExerciseCardProps) {
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
      case "Láb edzés":
        return "bg-purple-100 text-purple-700";
      case "Törzsizom":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white text-slate-900 rounded-2xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-lg transition duration-300">
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getBadgeColor()}`}
      >
        {category}
      </span>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}