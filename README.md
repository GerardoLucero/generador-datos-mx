# generador-datos-mx

Librería moderna para generar datos de prueba mexicanos realistas — ideal para testing, desarrollo y demostración de aplicaciones. Genera nombres, RFCs, CURPs, direcciones, teléfonos, CLABEs y más.

[![npm version](https://badge.fury.io/js/generador-datos-mx.svg)](https://badge.fury.io/js/generador-datos-mx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI](https://github.com/GerardoLucero/generador-datos-mx/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/GerardoLucero/generador-datos-mx/actions/workflows/ci-cd.yml)

## Features

- **Datos realistas** — nombres, apellidos y direcciones mexicanas auténticas
- **RFC y CURP** — generación automática de identificadores fiscales
- **NSS y CLABE** — Número de Seguridad Social y cuentas bancarias
- **Direcciones completas** — con estados, colonias y códigos postales
- **Teléfonos** — móviles y fijos con formatos correctos
- **Correos electrónicos** — basados en nombres reales
- **Empresas** — nombres de empresas con razones sociales
- **TypeScript ready** — incluye definiciones de tipos
- **Zero dependencies** — solo usa dayjs
- **Cobertura de tests > 85%**

> **Nota:** Esta librería genera datos ficticios para testing y desarrollo. Los RFCs, CURPs y CLABEs generados no son válidos oficialmente.

## Instalación

```bash
npm install generador-datos-mx
```

## Uso

### Generar una persona completa

```javascript
import { generarPersona } from 'generador-datos-mx';

const persona = generarPersona();
console.log(persona);
/*
{
  nombre: 'Juan',
  apellidoPaterno: 'García',
  apellidoMaterno: 'López',
  nombreCompleto: 'Juan García López',
  genero: 'masculino',
  fechaNacimiento: '15/03/1985',
  edad: 39,
  rfc: 'GALJ850315AB1',
  curp: 'GALJ850315HDFRPN01',
  nss: '12850234567',
  telefono: '+52 55 1234 5678',
  email: 'juan.garcia@gmail.com',
  direccion: 'Avenida Reforma 123, Col. Centro, C.P. 06000, Ciudad de México',
  clabe: '002123456789012345',
  banco: 'Banamex'
}
*/
```

### Generar múltiples personas

```javascript
import { generarPersonas } from 'generador-datos-mx';

const personas = generarPersonas(100);

const personasJovenes = generarPersonas(50, {
  edadMin: 18,
  edadMax: 30,
  genero: 'femenino'
});
```

### Datos específicos

```javascript
import { generarRFC, generarCURP, generarCLABE, generarDireccion } from 'generador-datos-mx';

// RFC basado en datos
const rfc = generarRFC({
  nombre: 'María',
  apellidoPaterno: 'López',
  apellidoMaterno: 'García',
  fechaNacimiento: { fecha: '1990-05-20' }
});

// CLABE bancaria
const clabe = generarCLABE();
console.log(clabe);
// { clabe: '012180001234567897', banco: 'BBVA', codigoBanco: '012' }

// Dirección
const direccion = generarDireccion();
console.log(direccion.direccionCompleta);
// 'Avenida Reforma 456 Int. 12, Col. Centro, C.P. 06000, Ciudad de México'
```

## API

| Función | Descripción | Retorna |
|---------|-------------|---------|
| `generarPersona(opciones)` | Genera una persona completa con todos sus datos | `Object` |
| `generarPersonas(cantidad, opciones)` | Genera múltiples personas | `Array<Object>` |
| `generarNombre(opciones)` | Genera nombre completo | `Object` |
| `generarFechaNacimiento(opciones)` | Genera fecha de nacimiento | `Object` |
| `generarRFC(datosPersona)` | Genera RFC | `string` |
| `generarCURP(datosPersona)` | Genera CURP | `string` |
| `generarNSS()` | Genera Número de Seguridad Social | `string` |
| `generarCLABE(opciones)` | Genera CLABE bancaria | `Object` |
| `generarTelefono(opciones)` | Genera teléfono | `Object` |
| `generarDireccion(opciones)` | Genera dirección completa | `Object` |
| `generarEmail(opciones)` | Genera correo electrónico | `Object` |
| `generarEmpresa(opciones)` | Genera nombre de empresa | `Object` |

## Casos de uso

### Seed de base de datos

```javascript
import { generarPersonas } from 'generador-datos-mx';

async function seedDatabase() {
  const personas = generarPersonas(1000);
  for (const persona of personas) {
    await db.usuarios.insert({
      nombre: persona.nombreCompleto,
      email: persona.email,
      rfc: persona.rfc,
      telefono: persona.telefono,
      direccion: persona.direccion
    });
  }
}
```

### Testing

```javascript
import { generarPersonas } from 'generador-datos-mx';

describe('Sistema de Registro', () => {
  it('debe registrar usuarios mexicanos', () => {
    const usuarios = generarPersonas(10);
    usuarios.forEach(usuario => {
      const resultado = sistemaRegistro.registrar(usuario);
      expect(resultado).toBe(true);
    });
  });
});
```

## Datos incluidos

- 60 nombres (30 masculinos + 30 femeninos)
- 50 apellidos mexicanos comunes
- 32 estados de México con códigos
- 8 bancos principales de México

## Ecosistema relacionado

- [calcula-rfc](https://www.npmjs.com/package/calcula-rfc) — Cálculo de RFC
- [calcula-curp](https://www.npmjs.com/package/calcula-curp) — Cálculo de CURP
- [mx-bancos](https://www.npmjs.com/package/mx-bancos) — Información de bancos
- [validador-fiscal-mx](https://www.npmjs.com/package/validador-fiscal-mx) — Validación fiscal

## Apoyo

Proyecto de código abierto mantenido en mi tiempo libre. Si te fue útil y quieres agradecerlo:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=flat&logo=ko-fi&logoColor=white)](https://ko-fi.com/gerardolucero)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/lucerorios0)

## Licencia

MIT © [Gerardo Lucero](https://github.com/GerardoLucero), ver [LICENSE](LICENSE).
