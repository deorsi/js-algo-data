// get the sonda position with the directional wind rose and possible movements

export const getSondas = instructions => {
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