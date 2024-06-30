### Consignas para resolver los [ejercicios de validaciones](./src/homework.js).
### En todos los ejercicios NO se deben utilizar expresiones regulares.
<hr>

# `Ejercicio 1: Validar un Correo Electrónico`

## Objetivo:
#### Escribir una función que reciba un string representando un correo electrónico y verifique si es un correo válido según ciertos criterios.


## Descripción:
#### La función validarCorreoElectronico ya está definida y recibe un parámetro: un string que representa un correo electrónico. Solo debes implementar el código dentro de la función para verificar si el correo es válido según las siguientes reglas:
  - Debe contener un "@".
  - Debe contener al menos un punto después del "@".
  - El último punto debe estar después del "@" y debe haber al menos dos caracteres entre el "@" y el último punto.
  - El último punto no debe ser el último carácter del string.
  - Debe haber al menos un carácter antes del "@".
  - Debe haber al menos un carácter después del último punto.

## Pista:
#### Investigar los métodos indexOf() y lastIndexOf()

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(validarCorreoElectronico('test@example.com')); // Debería devolver true
console.log(validarCorreoElectronico('testexample.com')); // Debería devolver false
console.log(validarCorreoElectronico('test@examplecom')); // Debería devolver false
console.log(validarCorreoElectronico('test.example@com')); // Debería devolver false
console.log(validarCorreoElectronico('test@example.com.')); // Debería devolver false
console.log(validarCorreoElectronico('@example.com')); // Debería devolver false
console.log(validarCorreoElectronico('test@example.')); // Debería devolver false
```

<hr>

# `Ejercicio 2: Validar una Contraseña`

## Objetivo:
#### Escribir una función que reciba una cadena de texto y verifique si cumple con los criterios de una contraseña segura.

## Descripción:
#### La función validarContrasena ya está definida y recibe un parámetro: una cadena de texto que representa una contraseña. Solo debes implementar el código dentro de la función para verificar si la contraseña cumple con los siguientes criterios:

  - Al menos 8 caracteres.
  - Contiene al menos una letra mayúscula.
  - Contiene al menos una letra minúscula.
  - Contiene al menos un número.

## Pista:
#### Al igual que los números, las letras tienen un orden específico en la tabla Unicode (o ASCII). Sin embargo, las letras mayúsculas y minúsculas no forman un rango continuo. Por ejemplo, 'A' a 'Z' es un rango continuo de mayúsculas y 'a' a 'z' es un rango continuo de minúsculas, pero no puedes mezclar estos rangos en una sola comparación.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(validarContrasena("Password123")); // Debería devolver true
console.log(validarContrasena("pass")); // Debería devolver false
console.log(validarContrasena("PASSWORD")); // Debería devolver false
console.log(validarContrasena("password123")); // Debería devolver false
console.log(validarContrasena("Password")); // Debería devolver false
```
<hr>

# `Ejercicio 3: Validar un Número de Teléfono`

## Objetivo:
#### Implementar una función que valide si un número de teléfono está en el formato `123-456-7890`.

## Descripción:
#### Dado un string que representa un número de teléfono, se debe implementar el código dentro de la función validarNumeroTelefono para verificar si el número está en el formato correcto. La función debe retornar true si el formato es correcto y false en caso contrario.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(validarNumeroTelefono("123-456-7890")); // Debería devolver true
console.log(validarNumeroTelefono("123-45-67890")); // Debería devolver false
console.log(validarNumeroTelefono("1234567890")); // Debería devolver false
console.log(validarNumeroTelefono("123-456-789")); // Debería devolver false
console.log(validarNumeroTelefono("123-4567-890")); // Debería devolver false
```

<hr>

# `Ejercicio 4: Validar un Código Postal`

## Objetivo:
#### Implementar una función que valide si un código postal está en el formato 12345 o 12345-6789 sin utilizar expresiones regulares.

## Descripción:
#### Dado un string que representa un código postal, se debe implementar el código dentro de la función validarCodigoPostal para verificar si el código está en el formato correcto. La función debe retornar true si el formato es correcto y false en caso contrario.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(validarCodigoPostal("12345")); // Debería devolver true
console.log(validarCodigoPostal("12345-6789")); // Debería devolver true
console.log(validarCodigoPostal("123456")); // Debería devolver false
console.log(validarCodigoPostal("1234")); // Debería devolver false
console.log(validarCodigoPostal("12345-678")); // Debería devolver false
console.log(validarCodigoPostal("12345-67890")); // Debería devolver false

```

<hr>

# `Ejercicio 5: Validar una Fecha`

## Objetivo:
#### Implementar una función que valide si una fecha está en el formato `YYYY-MM-DD`.

## Descripción:
#### Dado un string que representa una fecha, se debe implementar el código dentro de la función validarFecha para verificar si la fecha está en el formato correcto. La función debe retornar true si el formato es correcto y false en caso contrario. Se debe tener en cuenta que:
  - El año debe tener exactamente 4 dígitos.
  - El mes debe tener exactamente 2 dígitos y estar en el rango de 01 a 12.
  - El día debe tener exactamente 2 dígitos y estar en el rango de 01 a 31, considerando los meses con 30 y 31 días, y el mes de febrero con 28 o 29 días dependiendo si es año bisiesto o no.

## Test:
#### Ejemplos y Casos de Prueba: Utiliza los siguientes casos de prueba como orientación para resolver el ejercicio. Tu función debe producir los mismos resultados que se muestran a continuación:

```js
console.log(validarFecha("2023-06-30")); // Debería devolver true
console.log(validarFecha("2023-02-28")); // Debería devolver true
console.log(validarFecha("2023-02-29")); // Debería devolver false (no es año bisiesto)
console.log(validarFecha("2020-02-29")); // Debería devolver true (año bisiesto)
console.log(validarFecha("2023-13-01")); // Debería devolver false (mes inválido)
console.log(validarFecha("2023-06-31")); // Debería devolver false (día inválido)
console.log(validarFecha("23-06-30")); // Debería devolver false (año inválido)
console.log(validarFecha("2023/06/30")); // Debería devolver false (formato inválido)
console.log(validarFecha("2023-6-30")); // Debería devolver false (formato inválido)
console.log(validarFecha("2023-06-3")); // Debería devolver false (formato inválido)
```

<hr>

### Podrá encontrar la resolución de los ejercicios en la carpeta [homework_resolution](./homework_resolution/resolution.js).
#### Ver el código sólo si se cumplen uno de los siguientes dos criterios:
- Se resolvieron los ejercicios.
- Se le dedico un tiempo considerable a cada uno de los ejercicios.
