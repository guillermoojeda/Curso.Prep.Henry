// No cambies los nombres de las funciones.


function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    miMatriz = [];
    claves = Object.keys(objeto);
    counter = 0;
    for (clave in objeto){
        toAdd = [claves[counter], objeto[clave]];
        miMatriz.push(toAdd);
        counter += 1;
    }
    return miMatriz
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

    myList = string.split("");
    obj = {};
    for (var i = 0; i < myList.length; i++) {

        if (Object.keys(obj).includes(myList[i]) == false){
            obj[myList[i]] = 1;
        } else {
            obj[myList[i]] += 1;
        }
    }
    return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

    mayus = [];
    minus = [];
    list = s.split("");
    function adder(letter) {
        if (letter === letter.toUpperCase()) {
            mayus.push(letter);
        } else {
            minus.push(letter);
        }
    }

    list.map(adder);
    return mayus.join("") + minus.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    var palabras = str.split(" ");
    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].split("").reverse().join("");
    }
    var frase = palabras.join(" ");
    return frase;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

    str = numero.toString();
    str2 = str.split("").reverse().join("");
    if (str === str2) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    arr = cadena.split("");
    for (i = 0; i < arr.length; i++) { 
        if (arr[i] === "a" || arr[i] === "b" || arr[i] === "c" ){
            arr[i] = "";
        }
    };
    return arr.join("");

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

    // Ineficiente, pero no recuerdo bien los soriting algorithms.
    var maxLen = 0;
    for (index in arr){
        if (arr[index].length > maxLen){
            maxLen = arr[index].length;
        }
    }

    nuevoArr = [];

    for (var i = 0; i <= maxLen; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].length === i) {
                nuevoArr.push(arr[j]);
            }
        }
    }

    return nuevoArr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

    arr = [];
    for (i=0; i < arreglo1.length; i++){
        for (j=0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j]){
                arr.push(arreglo1[i]);
            }
        }
    }

    return arr;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

