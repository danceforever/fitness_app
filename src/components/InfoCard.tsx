type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="bg-white text-slate-900 rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}