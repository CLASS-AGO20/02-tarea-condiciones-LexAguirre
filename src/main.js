export default class App {

    esPar(numero) {

        if(numero === 0) {
            return false;
        } else if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    esMultiplo(numero1, numero2) {

        if(numero1 % numero2 === 0) {
            return true;
        } else {
            return false;
        }

    }

    calcularSalario(tipoTrabajador, horasTrabajadas) {
        
        /*let tipoTrabajador { 
            let tipo1 = 20
            let tipo2 = 22
            let tipo3 = 25
        }
        */
        /*
        switch(tipoTrabajador, horasTrabajadas) {
            case tipo1:
                result = 20 * horasTrabajadas
            break;
            case tipo2:
                result = 22 * horasTrabajadas
            break;
            case tipo3:
                result = 25 * horasTrabajadas
            break;
            default:
            result = -1
        }
        */
        return result;
    }

    obtenerCalificacion(calificacionNumerica) {
        let resultado;
        
        if(calificacionNumerica >= 0 && calificacionNumerica <= 5) {
            resultado = 'C' 
        } else if(calificacionNumerica == 6 | calificacionNumerica == 7) {
            resultado = 'B'
        } else if(calificacionNumerica == 8 | calificacionNumerica == 9) {
            resultado = 'A'
        } else if(calificacionNumerica == 10) {
            resultado = 'A+'
        } else {
            resultado = 'ERROR'
        }

        return resultado;
    }
    

    obtenerCercano100(numero1, numero2, numero3) {
        if(numero1 !== numero2 && numero1 !== numero3) { // !== para comprobar si son distintos 
            let x = Math.abs(numero1 - 100)
            let y = Math.abs(numero2 - 100)
            let z = Math.abs(numero3 - 100)

            if (x < y && x < z) { 
                return numero1;
            }

            if (y < x && y < z) {
                return numero2;
            }

            if (z < x && z < y) {
                return numero3;
            }

            return null;
    } else {
        return null;
    }
    }

    calcular(numero1, numero2, numero3) {

    }

    costoRenta(pelicula, dia) {

    }

    costoBoletos(boletos, zona) {

    }

    estaEnRango(limiteInicial, limiteFinal, numero) {

    }


}

let app = new App();

console.log(app.esPar(0));
console.log(app.esPar(5));
console.log(app.esPar(6));

console.log(app.esMultiplo(27, 3));
console.log(app.esMultiplo(43, 3));

/*console.log(app.calcularSalario(tipo1, 8));
console.log(app.calcularSalario(tipo2, 6));
console.log(app.calcularSalario(tipo3, 7));*/

console.log(app.obtenerCalificacion(3));
console.log(app.obtenerCalificacion(7));
console.log(app.obtenerCalificacion(9));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(13));

console.log(app.obtenerCercano100(60, 34, 78));
console.log(app.obtenerCercano100(50, 99, 73));
console.log(app.obtenerCercano100(123, 54, 68));
console.log(app.obtenerCercano100(102, 54, 98));
console.log(app.obtenerCercano100(54, 60, 60));
console.log(app.obtenerCercano100(10, 20, 30));
console.log(app.obtenerCercano100(10, 10, 30));


