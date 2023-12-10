
function hayMayusculas(cadena) {
    const tieneMayusculas = /[A-ZÑ]/.test(cadena);
    const tieneMinusculas = /[a-zñ]/.test(cadena);

    if (tieneMayusculas && !tieneMinusculas) {
        return "La cadena está formada solo por mayúsculas";
    } else if (!tieneMayusculas && tieneMinusculas) {
        return "La cadena está formada solo por minúsculas";
    } else if (tieneMayusculas && tieneMinusculas) {
        return "La cadena está formada por mayúsculas y minúsculas";
    } else {
        return "La cadena no contiene ni mayúsculas ni minúsculas";
    }
}
 
 console.log(hayMayusculas("cadena"));
 console.log(hayMayusculas("CADENA"));
 console.log(hayMayusculas("CaDeNa"));
 console.log(hayMayusculas("0123456789"));