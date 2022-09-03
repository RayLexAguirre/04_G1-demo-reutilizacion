import App from "../src/main";

test("contarPares()", () => {
  let myApp = new App();
  let inicio = [5, 10, 15, 25];
  let fin = [10, 5, 25, 15];
  let resultado = [3, 3, 5, 5];

  for (let i = 0; i < inicio.length; i++) {
    expect(myApp.contarPares(inicio[i], fin[i])).toBe(resultado[i]);
  }
});
