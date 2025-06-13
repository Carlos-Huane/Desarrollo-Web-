function cifradoCesar(texto, desplazamiento) {
  console.log("Texto original:", texto);

  // Paso 1: Convertir el texto en una lista de caracteres
  const listaCaracteres = texto.split('');
  console.log("Paso 1 - Lista de caracteres:", listaCaracteres);

  // Paso 2: Convertir cada carácter a su código ASCII
  const listaASCII = listaCaracteres.map(char => char.charCodeAt(0));
  console.log("Paso 2 - Lista de códigos ASCII:", listaASCII);

  // Paso 3: Desplazar los códigos ASCII solo si son letras
  const listaDesplazada = listaASCII.map(code => {
    // Letras mayúsculas (A-Z)
    if (code >= 65 && code <= 90) {
      return ((code - 65 + desplazamiento) % 26) + 65;
    }
    // Letras minúsculas (a-z)
    else if (code >= 97 && code <= 122) {
      return ((code - 97 + desplazamiento) % 26) + 97;
    }
    // Otros caracteres no se modifican
    else {
      return code;
    }
  });
  console.log("Paso 3 - Lista desplazada (ASCII):", listaDesplazada);

  // Paso 4: Convertir los códigos desplazados a caracteres
  const listaCifrada = listaDesplazada.map(code => String.fromCharCode(code));
  console.log("Paso 4 - Lista de caracteres cifrados:", listaCifrada);

  // Paso 5: Unir la lista en un solo string
  const textoCifrado = listaCifrada.join('');
  console.log("Paso 5 - Texto cifrado:", textoCifrado);

  return textoCifrado;
}

// Reutiliza la función anterior con desplazamiento negativo
function descifradoCesar(textoCifrado, desplazamiento) {
  return cifradoCesar(textoCifrado, -desplazamiento);
}

// Ejemplo de uso
const textoOriginal = "Hola Mundo";
const desplazamiento = 3;

console.log("======== CIFRANDO ========");
const cifrado = cifradoCesar(textoOriginal, desplazamiento);
console.log("Texto cifrado:", cifrado);

console.log("======== DESCIFRANDO ========");
const descifrado = descifradoCesar(cifrado, desplazamiento);
console.log("Texto descifrado:", descifrado);
