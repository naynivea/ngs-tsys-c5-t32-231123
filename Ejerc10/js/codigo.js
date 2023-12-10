function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.replace(/\s/g, "").toLowerCase();
    const cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
    return cadenaSinEspacios === cadenaInvertida;
 }
 
 if (esPalindromo("La ruta nos aporto otro paso natural")) {
    console.log("Es palíndromo");
 } else {
    console.log("No es palíndromo");
 }
 