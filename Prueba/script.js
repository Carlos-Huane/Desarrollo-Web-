function cifrarCaracter(caracter, clave) {
  const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minus = 'abcdefghijklmnopqrstuvwxyz';

  if (mayus.includes(caracter)) {
    let i = (mayus.indexOf(caracter) + clave) % 26;
    if (i < 0) i += 26;
    return mayus[i];
  } else if (minus.includes(caracter)) {
    let i = (minus.indexOf(caracter) + clave) % 26;
    if (i < 0) i += 26;
    return minus[i];
  } else {
    return caracter;
  }
}

let textoOriginal = '';
let textoCifrado = '';
let claveUsada = null;

function cifrar() {
  const texto = document.getElementById('mensaje').value.trim();
  const clave = parseInt(document.getElementById('clave').value);

  if (!texto || isNaN(clave)) {
    alert("Completa el mensaje y una clave válida.");
    return;
  }

  const resultado = [...texto].map(c => cifrarCaracter(c, clave)).join('');
  document.getElementById('resultado').value = resultado;

  textoOriginal = texto;
  textoCifrado = resultado;
  claveUsada = clave;
}

function descifrar() {
  const texto = document.getElementById('mensaje').value.trim();
  const clave = parseInt(document.getElementById('clave').value);

  if (!texto || isNaN(clave)) {
    alert("Completa el mensaje cifrado y la clave original.");
    return;
  }

  // ❗ Verificación exacta: Solo descifra si coincide texto cifrado Y clave usada
  if (texto !== textoCifrado) {
    alert("Este mensaje no fue cifrado en esta sesión o ha sido modificado.");
    return;
  }

  if (clave !== claveUsada) {
    alert("Clave incorrecta. No se puede descifrar el mensaje.");
    return;
  }

  const resultado = [...texto].map(c => cifrarCaracter(c, -clave)).join('');
  document.getElementById('resultado').value = resultado;

  // Limpiamos después de descifrar exitosamente
  textoOriginal = '';
  textoCifrado = '';
  claveUsada = null;
}

function copiarResultado() {
  const resultado = document.getElementById('resultado');
  if (!resultado.value.trim()) {
    alert("No hay texto para copiar.");
    return;
  }
  resultado.select();
  document.execCommand('copy');
  alert("Texto copiado al portapapeles.");
}

function limpiar() {
  document.getElementById('mensaje').value = '';
  document.getElementById('clave').value = '';
  document.getElementById('resultado').value = '';
  textoOriginal = '';
  textoCifrado = '';
  claveUsada = null;
}
