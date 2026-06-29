export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          💪 FitTrack
        </h2>

        <p className="text-gray-600 mb-6">
          Mozogj • Fejlődj • Légy egészséges
        </p>

        <div className="flex justify-center gap-8 text-sm text-gray-500 mb-6 flex-wrap">
          <span>🏋️ Edzések</span>
          <span>📊 BMI kalkulátor</span>
          <span>🔥 Napi motiváció</span>
        </div>

        <div className="border-t pt-5 text-sm text-gray-400">
          <p>© 2026 FitTrack</p>
          <p>Készítette: Baranyi Eszter</p>
          <p>Frontend Webfejlesztő Specialista vizsgamunka</p>
        </div>

      </div>
    </footer>
  );
}