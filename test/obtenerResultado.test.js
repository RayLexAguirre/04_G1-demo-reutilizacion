import App from '../src/main';

test('obtenerResultado()', () => {
  let myApp = new App();
  let input = [4, 8, 5, 7];
  let output = [24, 36, 15, 28];

  for (let i = 0; i < input.length; i++) {
    expect(myApp.obtenerResultado(input[i])).toBe(output[i]);
  }
});
