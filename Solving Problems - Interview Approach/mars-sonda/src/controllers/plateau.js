// get the first two grid numbers, minding the space between them

export const getPlateau = instructions => {
  let [, x, y] = instructions.match(/^\s*(\d+)\s*(\d+)\s*$/m) || [];
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  return { x, y };
};