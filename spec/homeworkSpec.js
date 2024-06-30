const homework = require('../src/homework');

// Ejercicio 1: Validar un Correo Electrónico
describe("validarCorreoElectronico", function() {
  it("debería devolver true para un correo válido 'test@example.com'", function() {
    expect(homework.validarCorreoElectronico('test@example.com')).toBe(true);
  });

  it("debería devolver false para un correo sin '@' 'testexample.com'", function() {
    expect(homework.validarCorreoElectronico('testexample.com')).toBe(false);
  });

  it("debería devolver false para un correo sin punto 'test@examplecom'", function() {
    expect(homework.validarCorreoElectronico('test@examplecom')).toBe(false);
  });

  it("debería devolver false para un correo con punto antes del '@' 'test.example@com'", function() {
    expect(homework.validarCorreoElectronico('test.example@com')).toBe(false);
  });

  it("debería devolver false para un correo con punto al final 'test@example.com.'", function() {
    expect(homework.validarCorreoElectronico('test@example.com.')).toBe(false);
  });

  it("debería devolver false para un correo sin caracteres antes del '@' '@example.com'", function() {
    expect(homework.validarCorreoElectronico('@example.com')).toBe(false);
  });

  it("debería devolver false para un correo sin caracteres después del último punto 'test@example.'", function() {
    expect(homework.validarCorreoElectronico('test@example.')).toBe(false);
  });
});

// Ejercicio 2: Validar una Contraseña
describe("validarContrasena", function() {
  it("debería devolver true para una contraseña válida 'Password123'", function() {
    expect(homework.validarContrasena('Password123')).toBe(true);
  });

  it("debería devolver false para una contraseña con menos de 8 caracteres 'Pass12'", function() {
    expect(homework.validarContrasena('Pass12')).toBe(false);
  });

  it("debería devolver false para una contraseña sin letras mayúsculas 'password123'", function() {
    expect(homework.validarContrasena('password123')).toBe(false);
  });

  it("debería devolver false para una contraseña sin letras minúsculas 'PASSWORD123'", function() {
    expect(homework.validarContrasena('PASSWORD123')).toBe(false);
  });

  it("debería devolver false para una contraseña sin números 'Password'", function() {
    expect(homework.validarContrasena('Password')).toBe(false);
  });

  it("debería devolver false para una contraseña vacía ''", function() {
    expect(homework.validarContrasena('')).toBe(false);
  });
});

// Ejercicio 3: Validar un Número de Teléfono sin Regex
describe("validarNumeroTelefono", function() {
  it("debería devolver true para un número en formato correcto '123-456-7890'", function() {
    expect(homework.validarNumeroTelefono('123-456-7890')).toBe(true);
  });

  it("debería devolver false para un número con formato incorrecto '123-45-67890'", function() {
    expect(homework.validarNumeroTelefono('123-45-67890')).toBe(false);
  });

  it("debería devolver false para un número sin guiones '1234567890'", function() {
    expect(homework.validarNumeroTelefono('1234567890')).toBe(false);
  });

  it("debería devolver false para un número con formato incorrecto '123-456-789'", function() {
    expect(homework.validarNumeroTelefono('123-456-789')).toBe(false);
  });

  it("debería devolver false para un número con formato incorrecto '123-4567-890'", function() {
    expect(homework.validarNumeroTelefono('123-4567-890')).toBe(false);
  });
});

// Ejercicio 4: Validar un Código Postal
describe("validarCodigoPostal", function() {
  it("debería devolver true para un código postal en formato correcto '12345'", function() {
    expect(homework.validarCodigoPostal('12345')).toBe(true);
  });

  it("debería devolver true para un código postal en formato correcto '12345-6789'", function() {
    expect(homework.validarCodigoPostal('12345-6789')).toBe(true);
  });

  it("debería devolver false para un código postal con formato incorrecto '123456'", function() {
    expect(homework.validarCodigoPostal('123456')).toBe(false);
  });

  it("debería devolver false para un código postal con formato incorrecto '1234'", function() {
    expect(homework.validarCodigoPostal('1234')).toBe(false);
  });

  it("debería devolver false para un código postal con formato incorrecto '12345-678'", function() {
    expect(homework.validarCodigoPostal('12345-678')).toBe(false);
  });

  it("debería devolver false para un código postal con formato incorrecto '12345-67890'", function() {
    expect(homework.validarCodigoPostal('12345-67890')).toBe(false);
  });
});

// Ejercicio 5: Validar una Fecha
describe("validarFecha", function() {
  it("debería devolver true para una fecha en formato correcto '2023-06-30'", function() {
    expect(homework.validarFecha('2023-06-30')).toBe(true);
  });

  it("debería devolver true para una fecha en formato correcto '2023-02-28'", function() {
    expect(homework.validarFecha('2023-02-28')).toBe(true);
  });

  it("debería devolver false para una fecha con día inválido '2023-02-29'", function() {
    expect(homework.validarFecha('2023-02-29')).toBe(false);
  });

  it("debería devolver true para una fecha en año bisiesto '2020-02-29'", function() {
    expect(homework.validarFecha('2020-02-29')).toBe(true);
  });

  it("debería devolver false para una fecha con mes inválido '2023-13-01'", function() {
    expect(homework.validarFecha('2023-13-01')).toBe(false);
  });

  it("debería devolver false para una fecha con día inválido '2023-06-31'", function() {
    expect(homework.validarFecha('2023-06-31')).toBe(false);
  });

  it("debería devolver false para una fecha con año inválido '23-06-30'", function() {
    expect(homework.validarFecha('23-06-30')).toBe(false);
  });

  it("debería devolver false para una fecha con formato inválido '2023/06/30'", function() {
    expect(homework.validarFecha('2023/06/30')).toBe(false);
  });

  it("debería devolver false para una fecha con mes de un dígito '2023-6-30'", function() {
    expect(homework.validarFecha('2023-6-30')).toBe(false);
  });

  it("debería devolver false para una fecha con día de un dígito '2023-06-3'", function() {
    expect(homework.validarFecha('2023-06-3')).toBe(false);
  });
});


