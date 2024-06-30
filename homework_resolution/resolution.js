/*
¡¡¡IMPORTANTE!!!
Este archivo contiene la resolución de los cinco ejercicios.
Ver el código sólo si se cumplen uno de los siguientes dos criterios:
- Se resolvieron los ejercicios.
- Se le dedico un tiempo considerable a cada uno de los ejercicios.
*/




















































function validarCorreoElectronico(correo) {
  const atIndex = correo.indexOf("@");
  const dotIndex = correo.indexOf(".")
  const lastDotIndex = correo.lastIndexOf(".");
  // Verificar que contenga un "@" y al menos un punto después del "@"
  if (atIndex === -1 || dotIndex === -1) {
    return false;
  }


  // Verificar que el último punto esté después de la "@" y que haya caracteres antes y después
  if (lastDotIndex < atIndex + 2 || lastDotIndex === correo.length - 1) {
    return false;
  }

  // Verificar que haya caracteres antes del "@"
  if (atIndex === 0) {
    return false;
  }

  return true;
}

function validarContrasena(contrasena) {
  // Verificar que la contraseña tenga al menos 8 caracteres
  if (contrasena.length < 8) {
    return false;
  }

  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let tieneNumero = false;

  for (let i = 0; i < contrasena.length; i++) {
    const char = contrasena[i];
    if (char >= 'A' && char <= 'Z') {
      tieneMayuscula = true;
    } else if (char >= 'a' && char <= 'z') {
      tieneMinuscula = true;
    } else if (char >= '0' && char <= '9') {
      tieneNumero = true;
    }

    // Si ya se encontraron todos los requisitos, salir del bucle
    if (tieneMayuscula && tieneMinuscula && tieneNumero) {
      return true;
    }
  }

  return false;
}

function validarNumeroTelefono(numero) {
  // Verificar que el número tenga exactamente 12 caracteres
  if (numero.length !== 12) {
    return false;
  }

  // Verificar que los guiones estén en las posiciones correctas
  if (numero[3] !== '-' || numero[7] !== '-') {
    return false;
  }

  // Verificar que los caracteres restantes sean números
  for (let i = 0; i < numero.length; i++) {
    if (i !== 3 && i !== 7 && (numero[i] < '0' || numero[i] > '9')) {
      return false;
    }
  }

  return true;
}

function validarCodigoPostal(codigo) {
  // Verificar que el código tenga la longitud correcta: 5 o 10 caracteres
  if (codigo.length !== 5 && codigo.length !== 10) {
    return false;
  }

  // Verificar que los primeros 5 caracteres sean números
  for (let i = 0; i < 5; i++) {
    if (codigo[i] < '0' || codigo[i] > '9') {
      return false;
    }
  }

  // Si la longitud es 10, verificar el formato '12345-6789'
  if (codigo.length === 10) {
    // Verificar que el sexto carácter sea un guion
    if (codigo[5] !== '-') {
      return false;
    }
    // Verificar que los últimos 4 caracteres sean números
    for (let i = 6; i < 10; i++) {
      if (codigo[i] < '0' || codigo[i] > '9') {
        return false;
      }
    }
  }

  return true;
}

function validarFecha(fecha) {
  // Verificar que la longitud de la fecha sea 10 (YYYY-MM-DD)
  if (fecha.length !== 10) {
    return false;
  }

  // Verificar que el formato sea YYYY-MM-DD
  if (fecha[4] !== '-' || fecha[7] !== '-') {
    return false;
  }

  // Extraer año, mes y día
  const year = fecha.substring(0, 4);
  const month = fecha.substring(5, 7);
  const day = fecha.substring(8, 10);

  // Verificar que año, mes y día sean números
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return false;
  }

  // Convertir a números
  const yearNum = parseInt(year);
  const monthNum = parseInt(month);
  const dayNum = parseInt(day);

  // Verificar el rango del mes
  if (monthNum < 1 || monthNum > 12) {
    return false;
  }

  // Verificar el rango del día
  if (dayNum < 1 || dayNum > 31) {
    return false;
  }

  // Verificar los días máximos por mes
  const diasPorMes = [31, (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dayNum > diasPorMes[monthNum - 1]) {
    return false;
  }

  return true;
}
