/**
 * Generador de Datos de Prueba Mexicanos
 * Genera datos realistas para testing y desarrollo
 * 
 * @author Gerardo Lucero
 * @version 1.0.0
 */

import dayjs from 'dayjs';

// Datos base para generación
const NOMBRES_MASCULINOS = [
  'Juan', 'José', 'Luis', 'Miguel', 'Carlos', 'Antonio', 'Francisco', 'Jesús',
  'Pedro', 'Alejandro', 'Manuel', 'Fernando', 'Ricardo', 'Roberto', 'Eduardo',
  'Daniel', 'Jorge', 'Javier', 'Rafael', 'Sergio', 'Alberto', 'Arturo',
  'Enrique', 'Andrés', 'Raúl', 'Gerardo', 'Omar', 'David', 'Diego', 'Pablo'
];

const NOMBRES_FEMENINOS = [
  'María', 'Guadalupe', 'Juana', 'Rosa', 'Ana', 'Carmen', 'Josefina', 'Teresa',
  'Margarita', 'Francisca', 'Martha', 'Elena', 'Verónica', 'Patricia', 'Silvia',
  'Laura', 'Sandra', 'Claudia', 'Diana', 'Mónica', 'Leticia', 'Gabriela',
  'Beatriz', 'Adriana', 'Alejandra', 'Isabel', 'Norma', 'Rocío', 'Yolanda', 'Lidia'
];

const APELLIDOS = [
  'García', 'Rodríguez', 'Martínez', 'Hernández', 'López', 'González', 'Pérez',
  'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz',
  'Morales', 'Reyes', 'Gutiérrez', 'Ortiz', 'Chávez', 'Ruiz', 'Jiménez',
  'Mendoza', 'Vázquez', 'Castillo', 'Romero', 'Herrera', 'Medina', 'Aguilar',
  'Guerrero', 'Moreno', 'Vargas', 'Ramos', 'Castro', 'Álvarez', 'Campos',
  'Núñez', 'Cortés', 'Rojas', 'Delgado', 'Fernández', 'Contreras', 'Mendez',
  'Salazar', 'Juárez', 'Sandoval', 'Luna', 'Molina', 'Ríos', 'Santiago'
];

const ESTADOS = [
  { nombre: 'Aguascalientes', abreviacion: 'AS', codigo: '01' },
  { nombre: 'Baja California', abreviacion: 'BC', codigo: '02' },
  { nombre: 'Baja California Sur', abreviacion: 'BS', codigo: '03' },
  { nombre: 'Campeche', abreviacion: 'CC', codigo: '04' },
  { nombre: 'Chiapas', abreviacion: 'CS', codigo: '05' },
  { nombre: 'Chihuahua', abreviacion: 'CH', codigo: '06' },
  { nombre: 'Ciudad de México', abreviacion: 'DF', codigo: '07' },
  { nombre: 'Coahuila', abreviacion: 'CL', codigo: '08' },
  { nombre: 'Colima', abreviacion: 'CM', codigo: '09' },
  { nombre: 'Durango', abreviacion: 'DG', codigo: '10' },
  { nombre: 'Guanajuato', abreviacion: 'GT', codigo: '11' },
  { nombre: 'Guerrero', abreviacion: 'GR', codigo: '12' },
  { nombre: 'Hidalgo', abreviacion: 'HG', codigo: '13' },
  { nombre: 'Jalisco', abreviacion: 'JC', codigo: '14' },
  { nombre: 'México', abreviacion: 'MC', codigo: '15' },
  { nombre: 'Michoacán', abreviacion: 'MN', codigo: '16' },
  { nombre: 'Morelos', abreviacion: 'MS', codigo: '17' },
  { nombre: 'Nayarit', abreviacion: 'NT', codigo: '18' },
  { nombre: 'Nuevo León', abreviacion: 'NL', codigo: '19' },
  { nombre: 'Oaxaca', abreviacion: 'OC', codigo: '20' },
  { nombre: 'Puebla', abreviacion: 'PL', codigo: '21' },
  { nombre: 'Querétaro', abreviacion: 'QT', codigo: '22' },
  { nombre: 'Quintana Roo', abreviacion: 'QR', codigo: '23' },
  { nombre: 'San Luis Potosí', abreviacion: 'SP', codigo: '24' },
  { nombre: 'Sinaloa', abreviacion: 'SL', codigo: '25' },
  { nombre: 'Sonora', abreviacion: 'SR', codigo: '26' },
  { nombre: 'Tabasco', abreviacion: 'TC', codigo: '27' },
  { nombre: 'Tamaulipas', abreviacion: 'TS', codigo: '28' },
  { nombre: 'Tlaxcala', abreviacion: 'TL', codigo: '29' },
  { nombre: 'Veracruz', abreviacion: 'VZ', codigo: '30' },
  { nombre: 'Yucatán', abreviacion: 'YN', codigo: '31' },
  { nombre: 'Zacatecas', abreviacion: 'ZS', codigo: '32' }
];

const CALLES = [
  'Avenida Reforma', 'Calle Juárez', 'Avenida Insurgentes', 'Calle Hidalgo',
  'Avenida Revolución', 'Calle Morelos', 'Calle Independencia', 'Avenida Universidad',
  'Calle Allende', 'Calle Zaragoza', 'Avenida Constitución', 'Calle Guerrero',
  'Avenida Cuauhtémoc', 'Calle Aldama', 'Calle 5 de Mayo', 'Avenida Carranza',
  'Calle Benito Juárez', 'Avenida Lázaro Cárdenas', 'Calle Miguel Hidalgo',
  'Avenida División del Norte', 'Calle Pino Suárez', 'Avenida Chapultepec'
];

const COLONIAS = [
  'Centro', 'Roma', 'Condesa', 'Polanco', 'Del Valle', 'Narvarte', 'Coyoacán',
  'Juárez', 'Doctores', 'Guerrero', 'San Rafael', 'Santa María', 'Jardines',
  'Lindavista', 'Portales', 'Álamos', 'Vértiz Narvarte', 'Escandón', 'Mixcoac',
  'Anzures', 'Cuauhtémoc', 'Lomas', 'Pedregal', 'Satelite', 'Interlomas'
];

const BANCOS = [
  { nombre: 'BBVA', codigo: '012' },
  { nombre: 'Banamex', codigo: '002' },
  { nombre: 'Santander', codigo: '014' },
  { nombre: 'HSBC', codigo: '021' },
  { nombre: 'Banorte', codigo: '072' },
  { nombre: 'Scotiabank', codigo: '044' },
  { nombre: 'Inbursa', codigo: '036' },
  { nombre: 'Azteca', codigo: '127' }
];

const EMPRESAS_SUFIJOS = [
  'S.A. de C.V.', 'S. de R.L. de C.V.', 'S.C.', 'A.C.', 'I.A.P.'
];

const EMPRESAS_PREFIJOS = [
  'Grupo', 'Corporativo', 'Compañía', 'Organización', 'Industrias',
  'Comercializadora', 'Distribuidora', 'Servicios', 'Consultores', 'Desarrollos'
];

const DOMINIOS_EMAIL = [
  'gmail.com', 'hotmail.com', 'yahoo.com.mx', 'outlook.com', 'icloud.com',
  'protonmail.com', 'live.com.mx', 'correo.mx'
];

// Utilidades
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
  return array[randomInt(0, array.length - 1)];
}

function randomBool() {
  return Math.random() < 0.5;
}

function normalizeText(str) {
  const map = {
    'a': 'á|à|ã|â',
    'e': 'é|è|ê',
    'i': 'í|ì|î',
    'o': 'ó|ò|ô|õ',
    'u': 'ú|ù|û|ü',
    'n': 'ñ'
  };

  let normalized = str.toLowerCase();
  for (const [replacement, pattern] of Object.entries(map)) {
    normalized = normalized.replace(new RegExp(pattern, 'g'), replacement);
  }

  return normalized.toUpperCase();
}

/**
 * Genera un nombre aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos del nombre
 */
export function generarNombre(opciones = {}) {
  const { genero = randomBool() ? 'masculino' : 'femenino' } = opciones;
  
  const nombres = genero === 'masculino' ? NOMBRES_MASCULINOS : NOMBRES_FEMENINOS;
  const nombre = randomItem(nombres);
  const apellidoPaterno = randomItem(APELLIDOS);
  const apellidoMaterno = randomItem(APELLIDOS);
  
  return {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    nombreCompleto: `${nombre} ${apellidoPaterno} ${apellidoMaterno}`,
    genero
  };
}

/**
 * Genera una fecha de nacimiento aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de fecha de nacimiento
 */
export function generarFechaNacimiento(opciones = {}) {
  const { edadMin = 18, edadMax = 80 } = opciones;
  
  const edad = randomInt(edadMin, edadMax);
  const año = dayjs().year() - edad;
  const mes = randomInt(1, 12);
  const dia = randomInt(1, 28); // Usamos 28 para evitar problemas con febrero
  
  const fecha = dayjs(`${año}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`);
  
  return {
    fecha: fecha.format('YYYY-MM-DD'),
    fechaLegible: fecha.format('DD/MM/YYYY'),
    año,
    mes,
    dia,
    edad
  };
}

/**
 * Genera un RFC aleatorio (simplificado)
 * @param {Object} datosPersona - Datos de la persona
 * @returns {string} RFC generado
 */
export function generarRFC(datosPersona = {}) {
  const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento } = datosPersona;
  
  if (!nombre || !apellidoPaterno || !fechaNacimiento) {
    // Generar RFC aleatorio
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitos = '0123456789';
    
    let rfc = '';
    for (let i = 0; i < 4; i++) rfc += letras.charAt(randomInt(0, 25));
    for (let i = 0; i < 6; i++) rfc += digitos.charAt(randomInt(0, 9));
    for (let i = 0; i < 3; i++) rfc += letras.charAt(randomInt(0, 25));
    
    return rfc;
  }
  
  // Generar RFC basado en datos
  const primeraLetraApellidoP = normalizeText(apellidoPaterno).charAt(0);
  const primeraVocalApellidoP = normalizeText(apellidoPaterno).substring(1).match(/[AEIOU]/)?.[0] || 'X';
  const primeraLetraApellidoM = apellidoMaterno ? normalizeText(apellidoMaterno).charAt(0) : 'X';
  const primeraLetraNombre = normalizeText(nombre).charAt(0);
  
  const fecha = fechaNacimiento.fecha || fechaNacimiento;
  const [año, mes, dia] = fecha.split('-');
  const añoCorto = año.substring(2);
  
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const homoclave = letras.charAt(randomInt(0, 25)) + letras.charAt(randomInt(0, 25)) + randomInt(0, 9);
  
  return `${primeraLetraApellidoP}${primeraVocalApellidoP}${primeraLetraApellidoM}${primeraLetraNombre}${añoCorto}${mes}${dia}${homoclave}`;
}

/**
 * Genera un CURP aleatorio (simplificado)
 * @param {Object} datosPersona - Datos de la persona
 * @returns {string} CURP generado
 */
export function generarCURP(datosPersona = {}) {
  const rfc = datosPersona.rfc || generarRFC(datosPersona);
  const genero = datosPersona.genero === 'masculino' ? 'H' : 'M';
  const estado = randomItem(ESTADOS);
  
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digitos = '0123456789';
  const consonantes = letras.charAt(randomInt(0, 25)) + letras.charAt(randomInt(0, 25)) + letras.charAt(randomInt(0, 25));
  
  // El verificador del CURP son 2 caracteres: 1 dígito + 1 letra/dígito
  const verificador = digitos.charAt(randomInt(0, 9)) + (letras + digitos).charAt(randomInt(0, 35));
  
  // Asegurar que la abreviación del estado sea exactamente de 2 letras
  const estadoAbrev = estado.abreviacion.substring(0, 2).padEnd(2, 'X');
  
  return `${rfc.substring(0, 10)}${genero}${estadoAbrev}${consonantes}${verificador}`;
}

/**
 * Genera un NSS (Número de Seguridad Social) aleatorio
 * @returns {string} NSS generado
 */
export function generarNSS() {
  const subdelegacion = randomInt(10, 99);
  const año = randomInt(70, 99);
  const consecutivo = randomInt(100000, 999999);
  const digitoVerificador = randomInt(0, 9);
  
  return `${subdelegacion}${año}${consecutivo}${digitoVerificador}`;
}

/**
 * Genera una CLABE bancaria aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de CLABE
 */
export function generarCLABE(opciones = {}) {
  const banco = opciones.banco || randomItem(BANCOS);
  const plaza = randomInt(1, 999).toString().padStart(3, '0');
  const cuenta = randomInt(1, 99999999999).toString().padStart(11, '0');
  
  // Calcular dígito verificador (simplificado)
  const clabeSinDigito = `${banco.codigo}${plaza}${cuenta}`;
  const pesos = [3, 7, 1];
  let suma = 0;
  
  for (let i = 0; i < clabeSinDigito.length; i++) {
    suma += parseInt(clabeSinDigito[i]) * pesos[i % 3];
  }
  
  const digitoVerificador = (10 - (suma % 10)) % 10;
  const clabe = `${clabeSinDigito}${digitoVerificador}`;
  
  return {
    clabe,
    banco: banco.nombre,
    codigoBanco: banco.codigo
  };
}

/**
 * Genera un teléfono mexicano aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de teléfono
 */
export function generarTelefono(opciones = {}) {
  const { tipo = randomBool() ? 'fijo' : 'movil' } = opciones;
  
  if (tipo === 'movil') {
    const lada = randomItem(['55', '56', '33', '81', '222', '664', '998']);
    const numero = randomInt(1000000, 9999999);
    const completo = `${lada}${numero}`;
    
    return {
      tipo: 'movil',
      lada,
      numero: numero.toString(),
      completo,
      formato: `+52 ${lada} ${numero.toString().substring(0, 4)} ${numero.toString().substring(4)}`
    };
  } else {
    const lada = randomItem(['55', '33', '81', '222', '664', '998', '477', '461']);
    const numero = randomInt(1000000, 9999999);
    const completo = `${lada}${numero}`;
    
    return {
      tipo: 'fijo',
      lada,
      numero: numero.toString(),
      completo,
      formato: `(${lada}) ${numero.toString().substring(0, 4)}-${numero.toString().substring(4)}`
    };
  }
}

/**
 * Genera una dirección mexicana aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de dirección
 */
export function generarDireccion(opciones = {}) {
  const estado = opciones.estado || randomItem(ESTADOS);
  const calle = randomItem(CALLES);
  const numeroExterior = randomInt(1, 999);
  const numeroInterior = randomBool() ? randomInt(1, 50) : null;
  const colonia = randomItem(COLONIAS);
  const codigoPostal = randomInt(10000, 99999);
  
  let direccionCompleta = `${calle} ${numeroExterior}`;
  if (numeroInterior) direccionCompleta += ` Int. ${numeroInterior}`;
  direccionCompleta += `, Col. ${colonia}, C.P. ${codigoPostal}, ${estado.nombre}`;
  
  return {
    calle,
    numeroExterior: numeroExterior.toString(),
    numeroInterior: numeroInterior ? numeroInterior.toString() : null,
    colonia,
    codigoPostal: codigoPostal.toString(),
    estado: estado.nombre,
    estadoCodigo: estado.codigo,
    estadoAbreviacion: estado.abreviacion,
    direccionCompleta
  };
}

/**
 * Genera un correo electrónico aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de correo
 */
export function generarEmail(opciones = {}) {
  const { nombre, apellidoPaterno } = opciones;
  
  let usuario;
  if (nombre && apellidoPaterno) {
    // Normalizar removiendo acentos y pasando a minúsculas
    const nombreNormalizado = normalizeText(nombre).toLowerCase().replace(/[^a-z]/g, '');
    const apellidoNormalizado = normalizeText(apellidoPaterno).toLowerCase().replace(/[^a-z]/g, '');
    const variantes = [
      `${nombreNormalizado}.${apellidoNormalizado}`,
      `${nombreNormalizado}${apellidoNormalizado}`,
      `${nombreNormalizado.charAt(0)}${apellidoNormalizado}`,
      `${nombreNormalizado}_${apellidoNormalizado}`,
      `${apellidoNormalizado}.${nombreNormalizado}`
    ];
    usuario = randomItem(variantes);
  } else {
    usuario = `usuario${randomInt(1000, 9999)}`;
  }
  
  const dominio = randomItem(DOMINIOS_EMAIL);
  const email = `${usuario}@${dominio}`;
  
  return {
    email,
    usuario,
    dominio
  };
}

/**
 * Genera un nombre de empresa mexicana
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de empresa
 */
export function generarEmpresa(opciones = {}) {
  const prefijo = randomBool() ? randomItem(EMPRESAS_PREFIJOS) : '';
  const nombreBase = randomItem(APELLIDOS);
  const sufijo = randomItem(EMPRESAS_SUFIJOS);
  
  const nombreCorto = prefijo ? `${prefijo} ${nombreBase}` : nombreBase;
  const nombreCompleto = `${nombreCorto}, ${sufijo}`;
  
  // Generar RFC de empresa (12 caracteres)
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digitos = '0123456789';
  
  let rfcEmpresa = '';
  for (let i = 0; i < 3; i++) rfcEmpresa += letras.charAt(randomInt(0, 25));
  for (let i = 0; i < 6; i++) rfcEmpresa += digitos.charAt(randomInt(0, 9));
  for (let i = 0; i < 3; i++) rfcEmpresa += letras.charAt(randomInt(0, 25));
  
  return {
    nombreCorto,
    nombreCompleto,
    rfc: rfcEmpresa,
    tipo: sufijo
  };
}

/**
 * Genera una persona completa con todos sus datos
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos completos de la persona
 */
export function generarPersona(opciones = {}) {
  const genero = opciones.genero || (randomBool() ? 'masculino' : 'femenino');
  
  const datosNombre = generarNombre({ genero });
  const fechaNacimiento = generarFechaNacimiento(opciones);
  
  const datosBase = {
    ...datosNombre,
    fechaNacimiento: fechaNacimiento.fecha,
    edad: fechaNacimiento.edad
  };
  
  const rfc = generarRFC({ ...datosBase, fechaNacimiento });
  const curp = generarCURP({ ...datosBase, rfc, genero });
  const nss = generarNSS();
  const telefono = generarTelefono(opciones);
  const email = generarEmail(datosNombre);
  const direccion = generarDireccion(opciones);
  const clabe = generarCLABE(opciones);
  
  return {
    nombre: datosNombre.nombre,
    apellidoPaterno: datosNombre.apellidoPaterno,
    apellidoMaterno: datosNombre.apellidoMaterno,
    nombreCompleto: datosNombre.nombreCompleto,
    genero,
    fechaNacimiento: fechaNacimiento.fechaLegible,
    edad: fechaNacimiento.edad,
    rfc,
    curp,
    nss,
    telefono: telefono.formato,
    telefonoCompleto: telefono.completo,
    email: email.email,
    direccion: direccion.direccionCompleta,
    calle: direccion.calle,
    numeroExterior: direccion.numeroExterior,
    numeroInterior: direccion.numeroInterior,
    colonia: direccion.colonia,
    codigoPostal: direccion.codigoPostal,
    estado: direccion.estado,
    clabe: clabe.clabe,
    banco: clabe.banco
  };
}

/**
 * Genera múltiples personas
 * @param {number} cantidad - Cantidad de personas a generar
 * @param {Object} opciones - Opciones de generación
 * @returns {Array} Array de personas
 */
export function generarPersonas(cantidad = 10, opciones = {}) {
  const personas = [];
  for (let i = 0; i < cantidad; i++) {
    personas.push(generarPersona(opciones));
  }
  return personas;
}

/**
 * Obtiene estadísticas del generador
 * @returns {Object} Estadísticas
 */
export function getEstadisticas() {
  return {
    version: '1.0.0',
    funciones: [
      'generarNombre',
      'generarFechaNacimiento',
      'generarRFC',
      'generarCURP',
      'generarNSS',
      'generarCLABE',
      'generarTelefono',
      'generarDireccion',
      'generarEmail',
      'generarEmpresa',
      'generarPersona',
      'generarPersonas'
    ],
    datosDisponibles: {
      nombres: NOMBRES_MASCULINOS.length + NOMBRES_FEMENINOS.length,
      apellidos: APELLIDOS.length,
      estados: ESTADOS.length,
      bancos: BANCOS.length
    }
  };
}

export default {
  generarNombre,
  generarFechaNacimiento,
  generarRFC,
  generarCURP,
  generarNSS,
  generarCLABE,
  generarTelefono,
  generarDireccion,
  generarEmail,
  generarEmpresa,
  generarPersona,
  generarPersonas,
  getEstadisticas
};
