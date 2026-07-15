import { useState } from "react";

export function useBMICalculator() {
  const [result, setResult] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (weight: number, height: number) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Number(bmi.toFixed(1));

    setResult(roundedBMI);

    if (roundedBMI < 18.5) {
      setCategory("Sovány");
    } else if (roundedBMI < 25) {
      setCategory("Normál testsúly");
    } else if (roundedBMI < 30) {
      setCategory("Túlsúly");
    } else {
      setCategory("Elhízás");
    }
  };

  return {
    result,
    category,
    calculateBMI,
  };
}
