
export function getDistanceInMeters(distance){
    
    if (!distance) {
      throw new Error("include distance")
    }

    if (isNaN(distance)) {
      throw new Error("distance must be a number");
    }

    const meters = distance * 1000;

    return meters;
    
}