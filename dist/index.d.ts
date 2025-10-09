/**
 * Genera un nombre aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos del nombre
 */
export function generarNombre(opciones?: any): any;
/**
 * Genera una fecha de nacimiento aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de fecha de nacimiento
 */
export function generarFechaNacimiento(opciones?: any): any;
/**
 * Genera un RFC aleatorio (simplificado)
 * @param {Object} datosPersona - Datos de la persona
 * @returns {string} RFC generado
 */
export function generarRFC(datosPersona?: any): string;
/**
 * Genera un CURP aleatorio (simplificado)
 * @param {Object} datosPersona - Datos de la persona
 * @returns {string} CURP generado
 */
export function generarCURP(datosPersona?: any): string;
/**
 * Genera un NSS (Número de Seguridad Social) aleatorio
 * @returns {string} NSS generado
 */
export function generarNSS(): string;
/**
 * Genera una CLABE bancaria aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de CLABE
 */
export function generarCLABE(opciones?: any): any;
/**
 * Genera un teléfono mexicano aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de teléfono
 */
export function generarTelefono(opciones?: any): any;
/**
 * Genera una dirección mexicana aleatoria
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de dirección
 */
export function generarDireccion(opciones?: any): any;
/**
 * Genera un correo electrónico aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de correo
 */
export function generarEmail(opciones?: any): any;
/**
 * Genera un nombre de empresa mexicana
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos de empresa
 */
export function generarEmpresa(opciones?: any): any;
/**
 * Genera una persona completa con todos sus datos
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Datos completos de la persona
 */
export function generarPersona(opciones?: any): any;
/**
 * Genera múltiples personas
 * @param {number} cantidad - Cantidad de personas a generar
 * @param {Object} opciones - Opciones de generación
 * @returns {Array} Array de personas
 */
export function generarPersonas(cantidad?: number, opciones?: any): any[];
/**
 * Obtiene estadísticas del generador
 * @returns {Object} Estadísticas
 */
export function getEstadisticas(): any;
declare namespace _default {
    export { generarNombre };
    export { generarFechaNacimiento };
    export { generarRFC };
    export { generarCURP };
    export { generarNSS };
    export { generarCLABE };
    export { generarTelefono };
    export { generarDireccion };
    export { generarEmail };
    export { generarEmpresa };
    export { generarPersona };
    export { generarPersonas };
    export { getEstadisticas };
}
export default _default;
