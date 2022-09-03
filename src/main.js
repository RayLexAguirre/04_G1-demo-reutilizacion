export default class App {

    obtenerMenor(a, b) {
        if(a < b) {
            return a;
        } else {
            return b;
        }
    }
    
    obtenerMayor(a, b) {
        if(a > b) {
            return a;
        } else {
            return b;
        }
    }

    esPar(numero) {
        if(numero%2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    contarPares(a, b){

        let inicio = this.obtenerMenor(a, b);
        let fin = this.obtenerMayor(a, b);
        let pares = 0;

        for(let i = inicio; i <= fin; i++) {
            if(this.esPar(i)) {
                pares = pares + 1;
            }
        }

        return pares;
    }

    obtenerSumaOld(numero){

        let suma = 0 

        for(let i = 1; i <= numero; i++) {

            let factorial = 1;

            for(let j = 1; j < i; j++) {
                factorial = factorial * j;
            }
            suma = suma + 1 / factorial;
            
        }

        return suma;
    }

    obtenerSuma(numero) {
        let suma = 0;

        for(let i = 1; i <= numero; i++) {
            suma = suma + 1 / this.factorial(i);
        }

        return suma;
    }

    factorial(numero) {
        let factorial = 1;

        for(let i = numero; i >= 1; i--) {
            factorial = factorial * i;
        }

        return factorial;
    }

    sumatoria(numero){
        let suma = 0;

        for(let i = numero; i >= 1; i--){
            suma = suma + i
        }

        return suma; 
    }

    esDivisible(a, b) {
        if(a % b == 0){
            return true;
        } else {
            return false;
        }
    }

    divisibles(numero){

        let divisibles = 0;

        for(let i = numero; i >= 1; i--) {
            if(this.esDivisible(numero, i)){
                divisibles = divisibles + 1;
            }
        }

        return divisibles; 
    }

    obtenerResultado(numero) {
        if(this.esPar(this.divisibles(numero))){
            return this.sumatoria(numero);
        } else {
            return this.factorial(numero);
        }
    }



}

let app = new App();

//llamada a la funcion fuera de la clase 
console.log(app.contarPares(5, 10));
console.log(app.contarPares(10, 5));


