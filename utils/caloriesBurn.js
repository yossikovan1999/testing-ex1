export function caloriesBurned(weightInKg, distanceInKm) {
  if (!weightInKg || !distanceInKm) {
    throw new Error("must include both.");
  }

  if(weightInKg < 0 || distanceInKm < 0){
    throw new Error("miust be above zero") 
  }

  if (isNaN(weightInKg) || isNaN(distanceInKm)) {
    throw new Error("weight and distance must be a number.");
  }

  const calories = weightInKg * distanceInKm * 1.036;

  return calories;
}
