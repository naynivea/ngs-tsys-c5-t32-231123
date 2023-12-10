var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var seguir = true;
while(seguir){
   var dni = prompt("Entrar el dni");
   
   if (dni > 0 && dni < 99999999) {
      while(seguir){
         var letra = prompt("Entrar la letra");

         if (letra == letras[dni % 23]) {
            alert("El dni es valido!");
            seguir = false;
         } else {
            alert("El dni no es valido");
         }
      }
   } else {
      alert("El valor inserido no es valido. Intenta otra vez");
   }
}
 

