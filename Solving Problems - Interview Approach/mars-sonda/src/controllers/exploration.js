export const sondaExploration = (sonda, plateau) => {
  let { x, y, direction, movements } = sonda;
  let windRose = "NESW";
  // check if landed off the plateau
  let hasPlateau =
    plateau !== undefined && plateau.x !== undefined && plateau.y !== undefined;
  if (hasPlateau) {
    if (x < 0 || y < 0 || x > plateau.x || y > plateau.y) {
      return "You've landed off the plateau";
    }
  }
  // change direction to number to calculate
  let directionNum = windRose.search(direction);
  // execute movements
  let sondaIn = [...movements].every(movement => {
    // if is going to turn
    if (movement !== "M") {
      // turn right
      if (movement === "R") {
        directionNum += 1;
      }
      // turn left
      if (movement === "L") {
        directionNum += 3;
      }
      // adjust windRose direction
      directionNum %= 4;
    } else {
      // if the direction is odd
      if (directionNum % 2) {
        // movement x
        x -= directionNum - 2;
        // check plateau limits
        if (hasPlateau && (x < 0 || x > plateau.x)) {
          return false;
        }
      } else {
        // movement y
        y -= directionNum - 1;
        // check plateau limits
        if (hasPlateau && (y < 0 || y > plateau.y)) {
          return false;
        }
      }
    }
    return true;
  });
  // change to string again
  direction = windRose[directionNum];
  return sondaIn
    ? { x, y, direction }
    : `Sonda just crashed outside the plateau ${x} ${y}`;
};