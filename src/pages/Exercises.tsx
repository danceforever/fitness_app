import ExerciseCard from "../components/ExerciseCard";

const exercises = [
  {
    id: 1,
    name: "Fekvőtámasz",
    type: "Erősítés",
    description:
      "Felsőtestet erősítő gyakorlat, amely főleg a mellizmot, vállat és kart dolgoztatja meg.",
  },
  {
    id: 2,
    name: "Guggolás",
    type: "Alsótest",
    description:
      "Alap alsótest gyakorlat, amely a combot, farizmot és törzsizmokat is bevonja.",
  },
  {
    id: 3,
    name: "Plank",
    type: "Törzsizom",
    description:
      "Statikus törzserősítő gyakorlat, amely javítja a testtartást és a stabilitást.",
  },
  {
    id: 4,
    name: "Kitörés",
    type: "Láb edzés",
    description:
      "Egyoldalas lábgyakorlat, amely segít az egyensúly és az alsótest erősítésében.",
  },
  {
    id: 5,
    name: "Burpee",
    type: "Kardió",
    description:
      "Intenzív teljes testes gyakorlat, amely egyszerre fejleszti az állóképességet és az erőt.",
  },
  {
    id: 6,
    name: "Hegymászó gyakorlat",
    type: "Kardió",
    description:
      "Dinamikus gyakorlat, amely megemeli a pulzust és közben a törzsizmokat is aktiválja.",
  },
  {
    id: 7,
    name: "Felülés",
    type: "Hasizom",
    description:
      "Klasszikus hasizomgyakorlat, amely a törzs elülső részének erősítésére használható.",
  },
  {
    id: 8,
    name: "Ugrókötelezés",
    type: "Állóképesség",
    description:
      "Jó állóképesség-fejlesztő mozgás, amely javítja a koordinációt és a ritmusérzéket.",
  },
  {
    id: 9,
    name: "Csípőemelés",
    type: "Farizom",
    description:
      "Farizmot és törzset erősítő gyakorlat, amely kezdők számára is könnyen kivitelezhető.",
  },
];

export default function Exercises() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold mb-2">
          Otthoni edzésötletek
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          Edzések
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Az oldalon néhány egyszerű, otthon is elvégezhető gyakorlat szerepel.
          A cél nem egy teljes edzésterv készítése, hanem a komponensek és a
          reszponzív kártyás elrendezés bemutatása.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            title={exercise.name}
            category={exercise.type}
            description={exercise.description}
          />
        ))}
      </div>
    </div>
  );
}