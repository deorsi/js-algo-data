/*eslint no-cond-assign: "error"*/
export const doInstructions = instructions => {
  let plateau = getPlateau(instructions);
  let sondas = getSondas(instructions);
  let placedSonda = sondas.map(sonda => placeSonda(sonda, plateau));
  // format the output back to string with line break
  return placedSonda.map(sondaResponse).join("\n");
};

export const getPlateau = instructions => {
  // get the first two grid numbers, minding the space between them
  let [, x, y] = instructions.match(/^\s*(\d+)\s*(\d+)\s*$/m) || [];
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  return { x, y };
};

export const getSondas = instructions => {
  // get the sonda position with the directional wind rose and possible movements
  const sondaInput = /^\s*(\d+)\s*(\d+)\s*([NESW])\s*\n?\s*([LRM]*)\s*$/gm;
  let sondas = [];
  let matches;
  while ((matches = sondaInput.exec(instructions)) !== null) {
    let [, x, y, direction, movements] = matches;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    sondas.push({ x, y, direction, movements });
  }
  return sondas;
};

export const placeSonda = (sonda, plateau) => {
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

export const sondaResponse = sonda => {
  return typeof sonda === "string"
    ? `${sonda}`
    : `${sonda.x} ${sonda.y} ${sonda.direction}`;
};
