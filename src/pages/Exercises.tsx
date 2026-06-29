import ExerciseCard from "../components/ExerciseCard";

const exercises = [
  { id: 1, name: "Fekvőtámasz", type: "Erősítés" },
  { id: 2, name: "Guggolás", type: "Alsótest" },
  { id: 3, name: "Plank", type: "Törzsizom" },
  { id: 4, name: "Kitörés", type: "Láb edzés" },
  { id: 5, name: "Burpee", type: "Kardió" },
  { id: 6, name: "Hegymászó gyakorlat", type: "Kardió" },
  { id: 7, name: "Felülés", type: "Hasizom" },
  { id: 8, name: "Ugrókötelezés", type: "Állóképesség" },
  { id: 9, name: "Csípőemelés", type: "Farizom" },
];

export default function Exercises() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold mb-2">
          Otthoni edzésötletek
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          💪 Edzések
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Válassz az egyszerű, otthon is könnyen elvégezhető gyakorlatok közül,
          és építsd fel a saját edzésrutinodat.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            title={exercise.name}
            category={exercise.type}
          />
        ))}
      </div>
    </div>
  );
}