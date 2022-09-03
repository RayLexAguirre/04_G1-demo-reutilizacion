import App from '../src/main';

test('obtenerSuma()', () => {
  let myApp = new App();
  let output = ['1.67', '1.71', '1.72'];
  
  for (let i = 3; i <= 5; i++) {
    expect(myApp.obtenerSuma(i).toFixed(2)).toBe(output[i - 3]);
  }
});
