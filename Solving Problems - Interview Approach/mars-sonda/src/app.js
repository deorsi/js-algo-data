/*eslint no-cond-assign: "error"*/
import { getPlateau } from "./controllers/plateau";
import { getSondas } from "./controllers/sondas";
import { sondaExploration } from "./controllers/exploration";

export const doInstructions = instructions => {
  let plateau = getPlateau(instructions);
  let sondas = getSondas(instructions);
  let placedSonda = sondas.map(sonda => sondaExploration(sonda, plateau));
  // format the output back to string with line break
  return placedSonda.map(sondaResponse).join("\n");
};

export const sondaResponse = sonda => {
  return typeof sonda === "string"
    ? `${sonda}`
    : `${sonda.x} ${sonda.y} ${sonda.direction}`;
};
