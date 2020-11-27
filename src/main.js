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
        let result;

        switch(tipoTrabajador) {
            case 'tipo1':
                result = 20 * horasTrabajadas;
            break;
            case 'tipo2':
                result = 22 * horasTrabajadas;
            break;
            case 'tipo3':
                result = 25 * horasTrabajadas;
            break;
            default:
            result = -1
        }
        
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

            if (y < x && y < z) { 
                return numero2;
            }

            if (x < y && x < z) {
                return numero1;
            }

            if (z < x && z < y) {
                return numero3;
            }

            return null;
    } else {
        return null;
    }
    }

    calcular(numero1, numero2, operador) {
        let resultado;

        switch(numero1, numero2, operador) {
            case '+':
                resultado = (numero1) + (numero2);
            break;
            case '-':
                resultado = (numero1) - (numero2);
            break;
            case '*':
                resultado = (numero1) * (numero2);
            break;
            case '/':
                resultado = (numero1) / (numero2);
            break;
            case '%':
                resultado = (numero1) % (numero2);
            break;
            default:
                resultado = -1
        }
        return resultado;
    }

    costoRenta(pelicula, dia) {
        let resultado;

        switch(pelicula, dia) {
            case 1:
                
            /*switch(pelicula){
                    case (pelicula % 3 === 0):
                        resultado = ((pelicula / 3 * 60) * 25);
                        break;
                    case (pelicula % 3 === 1):
                        resultado = ((pelicula / 3 * 60) * 25) + 25;
                        break;
                    case (pelicula % 3 === 2):
                        resultado = ((pelicula / 3 * 60) * 25) + 50;
                        break;*/
                 
            break;
            case 2:
                resultado = (pelicula % 2 === 0) == Math.abs(pelicula / 2 * 25) || (pelicula % 2 === 1) == Math.abs(pelicula / 2 * 25) + 25
            break;
            case 3:
                resultado = (pelicula * 25) - (pelicula * 25 * 0.15);
            break;
            case 4:
                resultado = Math.abs(pelicula % 2 === 0 * 25) || Math.abs(pelicula % 2 === 1 * 25) + 25
            break;
            case 5:
                switch(pelicula){
                    case (pelicula % 3 === 0):
                        resultado = ((pelicula / 3 * 60) * 25);
                        break;
                    case (pelicula % 3 === 1):
                        resultado = ((pelicula / 3 * 60) * 25) + 25;
                        break;
                    case (pelicula % 3 === 2):
                        resultado = ((pelicula / 3 * 60) * 25) + 50;
                        break;
                } 
            break;
            case 6:
                resultado = pelicula * 25;
            break;
            case 7:
                resultado = pelicula * 25;
            break;
            default:
                resultado = -1
            }
        return resultado;
            }

    costoBoletos(boletos, zona) {
        let result;
        let zona1 = 300 
        let zona2 = 450 
        let zona3 = 700 

        switch (boletos, zona1, zona2, zona3) {
            case zona1:
                result = 300 * boletos && result >= 2000 - (result * 0.07)
                break;
            case zona2:
                result = 450 * boletos && result >= 2000 - (result * 0.07)
                break;
            case zona3:
                result = 700 * boletos && result >= 2000 - (result * 0.07)
                break;
                default: 
                result = -1
        }
        return result;
    }

    estaEnRango(limiteInicial, limiteFinal, numero) {
        let mensaje;

        if (numero >= limiteInicial && numero <= limiteFinal) {
            mensaje = true 
        } else {
            mensaje = false
        }

        return mensaje;
    }


}

let app = new App();

console.log('implementando esPar(#)')
console.log(app.esPar(0));
console.log(app.esPar(5));
console.log(app.esPar(6));

console.log('implementando esMultiplo(#)')
console.log(app.esMultiplo(27, 3));
console.log(app.esMultiplo(43, 3));

console.log('implementando calcularSalario(-)')
console.log(app.calcularSalario('tipo1', 8));
console.log(app.calcularSalario('tipo2', 6));
console.log(app.calcularSalario('tipo3', 7));

console.log('implementando obtenerCalificacion(#)')
console.log(app.obtenerCalificacion(3));
console.log(app.obtenerCalificacion(7));
console.log(app.obtenerCalificacion(9));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(13));

console.log('implementando obtenerCercano100(-)')
console.log(app.obtenerCercano100(60, 34, 78));
console.log(app.obtenerCercano100(50, 99, 73));
console.log(app.obtenerCercano100(123, 54, 68));
console.log(app.obtenerCercano100(102, 54, 98));
console.log(app.obtenerCercano100(54, 60, 60));
console.log(app.obtenerCercano100(10, 20, 30));
console.log(app.obtenerCercano100(10, 10, 30));

console.log('implementando calcular(#)')
console.log(app.calcular(12, 20, '+'));
console.log(app.calcular(12, 20, '-'));
console.log(app.calcular(12, 20, '*'));
console.log(app.calcular(12, 20, '/'));
console.log(app.calcular(12, 20, '%'));
console.log(app.calcular(12, 20, ':'));

console.log('implementando costoRenta(-)')
console.log(app.costoRenta(9, 1));
console.log(app.costoRenta(21, 2));
console.log(app.costoRenta(13, 3));
console.log(app.costoRenta(78, 4));
console.log(app.costoRenta(27, 5));
console.log(app.costoRenta(32, 6));
console.log(app.costoRenta(24, 7));
console.log(app.costoRenta(19, 8));

console.log('implementando costoBoleto(-)')
console.log(app.costoBoletos(4, 'zona1'))
console.log(app.costoBoletos(8, 'zona1'))
console.log(app.costoBoletos(3, 'zona2'))
console.log(app.costoBoletos(6, 'zona2'))
console.log(app.costoBoletos(1, 'zona3'))
console.log(app.costoBoletos(5, 'zona3'))

console.log('implementando estaEnRango(-)')
console.log(app.estaEnRango(1, 100, 56));
console.log(app.estaEnRango(20, 30, 78));
