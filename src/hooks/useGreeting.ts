export default function useGreeting() {
  const hour = new Date().getHours();

  if (hour < 10) {
    return "Jó reggelt!";
  }

  if (hour < 18) {
    return "Jó napot!";
  }

  return "Jó estét!";
}