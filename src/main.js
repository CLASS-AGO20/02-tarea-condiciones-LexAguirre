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

        let tipo1 = 20
        let tipo2 = 22
        let tipo3 = 25

        switch(tipoTrabajador) {
            case 1:
                result = 20 * horasTrabajadas;
            break;
            case 2:
                result = 22 * horasTrabajadas;
            break;
            case 3:
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
         // !== para comprobar si son distintos 
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

        switch(dia) {
            case 1:
                if(pelicula % 3 === 0){
                    resultado = ((pelicula / 3 * 60))
                } else if(pelicula % 3 === 1) {
                    resultado = ((pelicula / 3 * 60)) + 25 - 40
                } else if(pelicula % 3 === 2) {
                    resultado = ((pelicula / 3 * 60)) + 50 - 40
                }
            break;
            case 2:
                if (pelicula % 2 === 0) {
                    resultado = (pelicula / 2 * 25) 
                } else if (pelicula % 2 === 1) {
                    resultado = (pelicula / 2 * 25) + 25 - 12.5 
                }
            break;
            case 3:
                resultado = (pelicula * 25) - (pelicula * 25 * 0.15);
            break;
            case 4:
                if (pelicula % 2 === 0) {
                    resultado = (pelicula / 2 * 25) 
                } else if (pelicula % 2 === 1) {
                    resultado = (pelicula / 2 * 25) + 25 - 12.5
                }
            break;
            case 5:
                if(pelicula % 3 === 0){
                    resultado = ((pelicula / 3 * 60))
                } else if(pelicula % 3 === 1) {
                    resultado = ((pelicula / 3 * 60)) + 25 - 40
                } else if(pelicula % 3 === 2) {
                    resultado = ((pelicula / 3 * 60)) + 50 - 40
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
        let costoTotal;

        switch(zona) {
            case 1:
                costoTotal = boletos * 300;
                break;
            case 2:
                costoTotal = boletos * 450;
                break;
            case 3:
                costoTotal = boletos * 700;
                break;
            default:
                costoTotal = -1;
            
        }

        if (costoTotal > 2000) {
            costoTotal = costoTotal * 0.93;
        }

        return costoTotal;
    }

    estaEnRango(limiteInicial, limiteFinal, numero) {
        let mensaje;
        if (numero > limiteInicial && numero < limiteFinal) {
            mensaje = true 
        } else {
            mensaje = false
        }
        return mensaje;
    }


}

let app = new App();

console.log('implementando esPar(#)');
console.log(app.esPar(0));
console.log(app.esPar(5));
console.log(app.esPar(6));

console.log('implementando esMultiplo(#)');
console.log(app.esMultiplo(27, 3));
console.log(app.esMultiplo(43, 3));

console.log('implementando calcularSalario(#)');
console.log(app.calcularSalario(1, 8));
console.log(app.calcularSalario(2, 6));
console.log(app.calcularSalario(3, 7));

console.log('implementando obtenerCalificacion(#)');
console.log(app.obtenerCalificacion(3));
console.log(app.obtenerCalificacion(7));
console.log(app.obtenerCalificacion(9));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(13));

console.log('implementando obtenerCercano100(#)');
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

console.log('implementando costoRenta(-)');
console.log(app.costoRenta(9, 1));
console.log(app.costoRenta(21, 2));
console.log(app.costoRenta(13, 3));
console.log(app.costoRenta(78, 4));
console.log(app.costoRenta(27, 5));
console.log(app.costoRenta(32, 6));
console.log(app.costoRenta(24, 7));
console.log(app.costoRenta(19, 8));

console.log('implementando costoBoleto(-)');
console.log(app.costoBoletos(1, 1));
console.log(app.costoBoletos(8, 1));
console.log(app.costoBoletos(3, 2 ));
console.log(app.costoBoletos(6, 2));
console.log(app.costoBoletos(1, 3));
console.log(app.costoBoletos(5, 3));
console.log(app.costoBoletos(5, 4));

console.log('implementando estaEnRango(#)');
console.log(app.estaEnRango(1, 100, 56));
console.log(app.estaEnRango(20, 30, 78));
console.log(app.estaEnRango(20, 67, -100));
