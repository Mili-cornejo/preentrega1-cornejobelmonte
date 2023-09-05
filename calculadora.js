//funciones para las operaciones

//operacion sumar

function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

// operacion restar

function restar(valor1, valor2 ) { 
    const resultado = valor1 - valor2;
    return resultado;
}

//operacion multiplicar
function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

//operacion dividir
function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}



function calculadora() {
    let operacion;
    
    const nombre = prompt (" ingresa tu nombre"); 
    alert( "bienvenido a mi calculadora virtual, comencemos...")
    while (operacion != "x" && operacion != "salir") {
      operacion = prompt(
        "Que operacion queres hacer?\n+: Sumar\n-: Restar\n*: Multiplicar\n/: Division\nx: Salir"
      );
      operacion = operacion.toLowerCase();

    switch (operacion) {
      case "+":
        valor1 = parseInt(prompt("Ingrese el primer valor:"));
        valor2 = parseInt(prompt("Ingrese el segundo valor:"));
        alert("El resulado de la suma es " + sumar(valor1, valor2));
        break;
      case "-":
        valor1 = parseInt(prompt("Ingrese el primer valor:"));
        valor2 = parseInt(prompt("Ingrese el segundo valor:"));
        alert("El resultado de la resta es " + restar(valor1, valor2));
        break;
      case "*":
        valor1 = parseInt(prompt("Ingrese el primer valor:"));
        valor2 = parseInt(prompt("Ingrese el segundo valor:"));
        alert("El resultado de la multiplicacion es " + multiplicar(valor1, valor2));
        break;
      case "/":
        valor1 = parseInt(prompt("Ingrese el primer valor:"));
        valor2 = parseInt(prompt("Ingrese el segundo valor:"));
        alert("El resultado de la division es " + dividir(valor1, valor2));
        break;
      case "x":
        break;
      case "salir":
        break;
      default:
        alert("La operacion ingresada es invalida.");
    }
  }
}
      


    calculadora()