var valores = [true, 5, false, "hola", "adios", 2];
var boolean1, boolean2;
var num1, num2;
var contadorBoolean = contadorNumber = 0;


for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === 'string') {
        var textoMayor = "";
        if (textoMayor.length = valores[i]) {
            textoMayor = valores[i];
        }
    }

    if (typeof valores[i] === 'boolean') {
        if (contadorBoolean > 0) {
            boolean2 = valores[i];
        } else {
            boolean1 = valores[i];
        }
        contadorBoolean++;
    }

    if (typeof valores[i] === 'number') {
        if (contadorNumber > 0) {
            num2 = valores[i];
        } else {
            num1 = valores[i];
        }
        contadorNumber++;
    }
}   

console.log(textoMayor);

console.log(
    boolean1 + "\n" + 
    boolean2
);

console.log(
    num1 + " + " + num2 + " = " + (num1+num2) + "\n" +
    num1 + " - " + num2 + " = " + (num1-num2) + "\n" +
    num1 + " / " + num2 + " = " + num1/num2 + "\n" +
    num1 + " * " + num2 + " = " + num1*num2 + "\n" +
    num1 + " % " + num2 + " = " + num1%num2 
);