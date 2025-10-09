# Generador de Datos Mexicanos

<!-- BADGES-DONATIONS-START -->
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Donate-orange?logo=ko-fi)](https://ko-fi.com/gerardolucero)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-yellow?logo=buy-me-a-coffee)](https://buymeacoffee.com/lucerorios0)
<!-- BADGES-DONATIONS-END -->

[![npm version](https://badge.fury.io/js/generador-datos-mx.svg)](https://badge.fury.io/js/generador-datos-mx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/GerardoLucero/generador-datos-mx/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/GerardoLucero/generador-datos-mx/actions)

Librería moderna para generar **datos de prueba mexicanos realistas** ideal para testing, desarrollo y demostración de aplicaciones. Genera nombres, RFCs, CURPs, direcciones, teléfonos, CLABEs y más.

## 🚀 Características

- ✅ **Datos realistas** - Nombres, apellidos y direcciones mexicanas auténticas
- ✅ **RFC y CURP** - Generación automática de identificadores fiscales
- ✅ **NSS y CLABE** - Números de Seguridad Social y cuentas bancarias
- ✅ **Direcciones completas** - Con estados, colonias y códigos postales
- ✅ **Teléfonos** - Móviles y fijos con formatos correctos
- ✅ **Correos electrónicos** - Basados en nombres reales
- ✅ **Empresas** - Nombres de empresas con razones sociales
- ✅ **TypeScript ready** - Incluye definiciones de tipos
- ✅ **Zero dependencies** - Solo usa dayjs
- ✅ **Totalmente probado** - Cobertura de tests > 85%

## 📦 Instalación

```bash
npm install generador-datos-mx
```

```bash
yarn add generador-datos-mx
```

```bash
pnpm add generador-datos-mx
```

## 🔧 Uso

### Importación

```javascript
// ES6 Modules
import generador from 'generador-datos-mx';

// CommonJS
const generador = require('generador-datos-mx');
```

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

// Generar 100 personas
const personas = generarPersonas(100);

// Con opciones específicas
const personasJovenes = generarPersonas(50, {
  edadMin: 18,
  edadMax: 30,
  genero: 'femenino'
});
```

### Generar datos específicos

#### Nombres

```javascript
import { generarNombre } from 'generador-datos-mx';

const nombre = generarNombre({ genero: 'masculino' });
console.log(nombre);
// {
//   nombre: 'Carlos',
//   apellidoPaterno: 'Hernández',
//   apellidoMaterno: 'Martínez',
//   nombreCompleto: 'Carlos Hernández Martínez',
//   genero: 'masculino'
// }
```

#### RFC

```javascript
import { generarRFC } from 'generador-datos-mx';

// RFC aleatorio
const rfc1 = generarRFC();
console.log(rfc1); // 'HEMC850315AB1'

// RFC basado en datos
const rfc2 = generarRFC({
  nombre: 'María',
  apellidoPaterno: 'López',
  apellidoMaterno: 'García',
  fechaNacimiento: { fecha: '1990-05-20' }
});
console.log(rfc2); // 'LOGM900520XY2'
```

#### CURP

```javascript
import { generarCURP } from 'generador-datos-mx';

const curp = generarCURP({
  nombre: 'Juan',
  apellidoPaterno: 'Pérez',
  apellidoMaterno: 'Gómez',
  genero: 'masculino',
  fechaNacimiento: { fecha: '1995-08-15' }
});
console.log(curp); // 'PEGJ950815HJCRMN09'
```

#### Teléfonos

```javascript
import { generarTelefono } from 'generador-datos-mx';

// Teléfono aleatorio
const tel1 = generarTelefono();

// Teléfono móvil específico
const tel2 = generarTelefono({ tipo: 'movil' });
console.log(tel2);
// {
//   tipo: 'movil',
//   lada: '55',
//   numero: '1234567',
//   completo: '551234567',
//   formato: '+52 55 1234 5678'
// }

// Teléfono fijo
const tel3 = generarTelefono({ tipo: 'fijo' });
console.log(tel3.formato); // '(55) 5555-1234'
```

#### Direcciones

```javascript
import { generarDireccion } from 'generador-datos-mx';

const direccion = generarDireccion();
console.log(direccion);
// {
//   calle: 'Avenida Reforma',
//   numeroExterior: '456',
//   numeroInterior: '12',
//   colonia: 'Centro',
//   codigoPostal: '06000',
//   estado: 'Ciudad de México',
//   estadoCodigo: '07',
//   estadoAbreviacion: 'DF',
//   direccionCompleta: 'Avenida Reforma 456 Int. 12, Col. Centro, C.P. 06000, Ciudad de México'
// }
```

#### CLABE Bancaria

```javascript
import { generarCLABE } from 'generador-datos-mx';

const clabe = generarCLABE();
console.log(clabe);
// {
//   clabe: '012180001234567897',
//   banco: 'BBVA',
//   codigoBanco: '012'
// }
```

#### NSS (Número de Seguridad Social)

```javascript
import { generarNSS } from 'generador-datos-mx';

const nss = generarNSS();
console.log(nss); // '12850234567'
```

#### Correos Electrónicos

```javascript
import { generarEmail } from 'generador-datos-mx';

// Email aleatorio
const email1 = generarEmail();

// Email basado en nombre
const email2 = generarEmail({
  nombre: 'María',
  apellidoPaterno: 'González'
});
console.log(email2);
// {
//   email: 'maria.gonzalez@gmail.com',
//   usuario: 'maria.gonzalez',
//   dominio: 'gmail.com'
// }
```

#### Empresas

```javascript
import { generarEmpresa } from 'generador-datos-mx';

const empresa = generarEmpresa();
console.log(empresa);
// {
//   nombreCorto: 'Grupo Hernández',
//   nombreCompleto: 'Grupo Hernández, S.A. de C.V.',
//   rfc: 'GHE210315AB1',
//   tipo: 'S.A. de C.V.'
// }
```

#### Fechas de Nacimiento

```javascript
import { generarFechaNacimiento } from 'generador-datos-mx';

// Edad entre 18 y 80 años (default)
const fecha1 = generarFechaNacimiento();

// Edad específica
const fecha2 = generarFechaNacimiento({
  edadMin: 25,
  edadMax: 35
});
console.log(fecha2);
// {
//   fecha: '1990-06-15',
//   fechaLegible: '15/06/1990',
//   año: 1990,
//   mes: 6,
//   dia: 15,
//   edad: 34
// }
```

## 📋 API Completa

### Funciones principales

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
| `getEstadisticas()` | Obtiene estadísticas del generador | `Object` |

### Opciones disponibles

#### `generarPersona(opciones)`

```javascript
{
  genero: 'masculino' | 'femenino',  // Default: aleatorio
  edadMin: number,                   // Default: 18
  edadMax: number                    // Default: 80
}
```

#### `generarNombre(opciones)`

```javascript
{
  genero: 'masculino' | 'femenino'  // Default: aleatorio
}
```

#### `generarTelefono(opciones)`

```javascript
{
  tipo: 'movil' | 'fijo'  // Default: aleatorio
}
```

## 🎯 Casos de Uso

### Testing de Aplicaciones

```javascript
import { generarPersonas } from 'generador-datos-mx';

// Generar datos para pruebas
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

### Seed de Base de Datos

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
  
  console.log('Base de datos poblada con 1000 usuarios');
}
```

### Demos y Prototipos

```javascript
import { generarPersona } from 'generador-datos-mx';

// API REST demo
app.get('/api/demo/usuario', (req, res) => {
  const usuario = generarPersona();
  res.json(usuario);
});
```

### Formularios de Prueba

```javascript
import { generarPersona } from 'generador-datos-mx';

// Rellenar formulario automáticamente
function autocompletarFormulario() {
  const persona = generarPersona();
  
  document.getElementById('nombre').value = persona.nombre;
  document.getElementById('apellidos').value = `${persona.apellidoPaterno} ${persona.apellidoMaterno}`;
  document.getElementById('rfc').value = persona.rfc;
  document.getElementById('email').value = persona.email;
  document.getElementById('telefono').value = persona.telefono;
}
```

## 📊 Datos Incluidos

La librería incluye:

- **60 nombres** (30 masculinos + 30 femeninos)
- **50 apellidos** mexicanos comunes
- **32 estados** de México con códigos
- **22 calles** típicas mexicanas
- **25 colonias** representativas
- **8 bancos** principales de México
- **8 dominios** de correo populares

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

## 🛠️ Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/GerardoLucero/generador-datos-mx.git
cd generador-datos-mx

# Instalar dependencias
npm install

# Ejecutar tests
npm test

# Ejecutar linter
npm run lint

# Compilar para producción
npm run build:prod
```

## 📊 Compatibilidad

- **Node.js**: >= 14.0.0
- **Navegadores**: Todos los navegadores modernos
- **TypeScript**: Incluye definiciones de tipos

## ⚠️ Nota Importante

**Esta librería genera datos FICTICIOS para propósitos de desarrollo y testing.**

- ❌ NO usar en producción con datos reales
- ❌ Los RFCs y CURPs generados NO son válidos oficialmente
- ❌ Las CLABEs y NSS son solo para pruebas
- ✅ Ideal para testing, demos y desarrollo
- ✅ Datos realistas pero ficticios

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Abre un issue para discutir el cambio
2. Haz fork del proyecto
3. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
4. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

Asegúrate de que los tests pasen:

```bash
npm test
npm run lint
```

## 📝 Changelog

### v1.0.0 (2025)
- 🎉 Lanzamiento inicial
- ✨ Generación de personas completas
- ✨ RFC, CURP, NSS, CLABE
- ✨ Direcciones, teléfonos, emails
- ✨ Empresas mexicanas
- 🧪 Suite de tests completa
- 📚 Documentación completa

## 📄 Licencia

MIT © [Gerardo Lucero](https://github.com/GerardoLucero)

---

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

- 🐛 [Reportar un bug](https://github.com/GerardoLucero/generador-datos-mx/issues)
- 💡 [Solicitar una feature](https://github.com/GerardoLucero/generador-datos-mx/issues)
- 📧 [Contacto directo](mailto:tu-email@ejemplo.com)

---

**¿Te gusta este proyecto?** ⭐ ¡Dale una estrella en GitHub!

**¿Necesitas otras utilidades mexicanas?** 👀 Revisa el ecosistema completo:

- [calcula-rfc](https://www.npmjs.com/package/calcula-rfc) - Cálculo de RFC
- [calcula-curp](https://www.npmjs.com/package/calcula-curp) - Cálculo de CURP  
- [calculadora-isr](https://www.npmjs.com/package/calculadora-isr) - Cálculo de ISR
- [calculadora-nomina-mx](https://www.npmjs.com/package/calculadora-nomina-mx) - Cálculo de nómina
- [mx-nombres](https://www.npmjs.com/package/mx-nombres) - Base de nombres mexicanos
- [mx-codigos-postales](https://www.npmjs.com/package/mx-codigos-postales) - Códigos postales
- [mx-bancos](https://www.npmjs.com/package/mx-bancos) - Información de bancos
- [validador-fiscal-mx](https://www.npmjs.com/package/validador-fiscal-mx) - Validación fiscal

<!-- DONATIONS-START -->
## 💖 Apoya el Ecosistema Mexicano OSS

Si estos paquetes te ayudan en tu desarrollo, considera invitarme un café o apoyar el mantenimiento:

- [Ko-fi](https://ko-fi.com/gerardolucero)
- [Buy Me a Coffee](https://buymeacoffee.com/lucerorios0)

> Gracias por tu apoyo 🙌. Priorizaré issues/PRs y publicaré avances en los READMEs.
<!-- DONATIONS-END -->
