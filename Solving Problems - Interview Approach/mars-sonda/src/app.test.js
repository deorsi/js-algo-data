import { getPlateau, getSondas, doInstructions, placeSonda } from "./app";

let testSondas = "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM";

test("getPlateau", () => {
  let result = getPlateau(testSondas);
  expect(result).toMatchObject({ x: 5, y: 5 });
});

test("getSondas", () => {
  let result = getSondas(testSondas);
  expect(result).toMatchObject([
    { x: 1, y: 2, direction: "N", movements: "LMLMLMLMM" },
    { x: 3, y: 3, direction: "E", movements: "MMRMMRMRRM" }
  ]);
});

test("doInstructions", () => {
  let result = doInstructions(testSondas);
  expect(result).toBe("1 3 N\n5 1 E");
});

test("sondaLandedOffPlateau", () => {
  let plateau = { x: 2, y: 2 };
  let sonda = { x: 2, y: 3, direction: "N", movements: "" };
  let result = placeSonda(sonda, plateau);
  expect(result).toBe("You've landed off the plateau");
});

test("sondaCrashedOutsitePlateau", () => {
  let plateau = { x: 2, y: 2 };
  let sonda = { x: 0, y: 0, direction: "N", movements: "MMMM" };
  let result = placeSonda(sonda, plateau);
  expect(result).toBe("Sonda just crashed outside the plateau 0 3");
});

test("sondaTurnRight", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "N", movements: "R" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 4, y: 4, direction: "E" });
});

test("sondaTurnLeft", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "N", movements: "L" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 4, y: 4, direction: "W" });
});

test("sondaTurnRightLeft", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "N", movements: "RRL" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 4, y: 4, direction: "E" });
});

test("sondaTurnRRRRRRRRRRRR", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 0, y: 0, direction: "N", movements: "RRRRRRRRRRRR" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 0, y: 0, direction: "N" });
});

test("sondaTurnLLLLLLLL", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "N", movements: "LLLLLLLL" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 4, y: 4, direction: "N" });
});

test("sondaFaceN", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 0, y: 0, direction: "N", movements: "M" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 0, y: 1, direction: "N" });
});

test("sondaFaceE", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 0, y: 0, direction: "E", movements: "M" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 1, y: 0, direction: "E" });
});

test("sondaFaceS", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "S", movements: "M" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 4, y: 3, direction: "S" });
});

test("sondaFaceW", () => {
  let plateau = { x: 4, y: 4 };
  let sonda = { x: 4, y: 4, direction: "W", movements: "M" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 3, y: 4, direction: "W" });
});

test("placeSondaWithoutMovement", () => {
  let plateau = { x: 100, y: 100 };
  let sonda = { x: 100, y: 100, direction: "N", movements: "" };
  let result = placeSonda(sonda, plateau);
  expect(result).toMatchObject({ x: 100, y: 100, direction: "N" });
});

test("getBigPlateau", () => {
  let result = getPlateau("999 999");
  expect(result).toMatchObject({ x: 999, y: 999 });
});
