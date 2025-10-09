/**
 * Tests para Generador de Datos Mexicanos
 */

import {
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
} from './index.js';

describe('Generador de Datos Mexicanos', () => {
  
  describe('generarNombre', () => {
    it('debe generar un nombre completo', () => {
      const nombre = generarNombre();
      
      expect(nombre).toHaveProperty('nombre');
      expect(nombre).toHaveProperty('apellidoPaterno');
      expect(nombre).toHaveProperty('apellidoMaterno');
      expect(nombre).toHaveProperty('nombreCompleto');
      expect(nombre).toHaveProperty('genero');
      
      expect(typeof nombre.nombre).toBe('string');
      expect(typeof nombre.apellidoPaterno).toBe('string');
      expect(typeof nombre.apellidoMaterno).toBe('string');
      expect(typeof nombre.nombreCompleto).toBe('string');
      expect(['masculino', 'femenino']).toContain(nombre.genero);
    });
    
    it('debe generar nombre masculino cuando se especifica', () => {
      const nombre = generarNombre({ genero: 'masculino' });
      expect(nombre.genero).toBe('masculino');
    });
    
    it('debe generar nombre femenino cuando se especifica', () => {
      const nombre = generarNombre({ genero: 'femenino' });
      expect(nombre.genero).toBe('femenino');
    });
    
    it('debe construir el nombre completo correctamente', () => {
      const nombre = generarNombre();
      const esperado = `${nombre.nombre} ${nombre.apellidoPaterno} ${nombre.apellidoMaterno}`;
      expect(nombre.nombreCompleto).toBe(esperado);
    });
  });
  
  describe('generarFechaNacimiento', () => {
    it('debe generar una fecha de nacimiento válida', () => {
      const fecha = generarFechaNacimiento();
      
      expect(fecha).toHaveProperty('fecha');
      expect(fecha).toHaveProperty('fechaLegible');
      expect(fecha).toHaveProperty('año');
      expect(fecha).toHaveProperty('mes');
      expect(fecha).toHaveProperty('dia');
      expect(fecha).toHaveProperty('edad');
      
      expect(typeof fecha.edad).toBe('number');
      expect(fecha.edad).toBeGreaterThanOrEqual(18);
      expect(fecha.edad).toBeLessThanOrEqual(80);
    });
    
    it('debe respetar edad mínima y máxima', () => {
      const fecha = generarFechaNacimiento({ edadMin: 25, edadMax: 30 });
      
      expect(fecha.edad).toBeGreaterThanOrEqual(25);
      expect(fecha.edad).toBeLessThanOrEqual(30);
    });
    
    it('debe tener formato ISO en fecha', () => {
      const fecha = generarFechaNacimiento();
      expect(fecha.fecha).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
    
    it('debe tener formato DD/MM/YYYY en fechaLegible', () => {
      const fecha = generarFechaNacimiento();
      expect(fecha.fechaLegible).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
  });
  
  describe('generarRFC', () => {
    it('debe generar un RFC válido de 13 caracteres', () => {
      const rfc = generarRFC();
      
      expect(typeof rfc).toBe('string');
      expect(rfc).toHaveLength(13);
      expect(rfc).toMatch(/^[A-Z]{4}\d{6}[A-Z0-9]{3}$/);
    });
    
    it('debe generar RFC basado en datos de persona', () => {
      const datos = {
        nombre: 'Juan',
        apellidoPaterno: 'García',
        apellidoMaterno: 'López',
        fechaNacimiento: { fecha: '1985-03-15' }
      };
      
      const rfc = generarRFC(datos);
      
      expect(rfc).toHaveLength(13);
      expect(rfc.substring(0, 4)).toBe('GALJ');
      expect(rfc.substring(4, 10)).toBe('850315');
    });
    
    it('debe generar RFC sin apellido materno', () => {
      const datos = {
        nombre: 'María',
        apellidoPaterno: 'López',
        apellidoMaterno: '',
        fechaNacimiento: { fecha: '1990-05-20' }
      };
      
      const rfc = generarRFC(datos);
      expect(rfc).toHaveLength(13);
    });
  });
  
  describe('generarCURP', () => {
    it('debe generar un CURP válido de 18 caracteres', () => {
      const curp = generarCURP();
      
      expect(typeof curp).toBe('string');
      expect(curp).toHaveLength(18);
      expect(curp).toMatch(/^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]{2}$/);
    });
    
    it('debe incluir H para masculino', () => {
      const curp = generarCURP({ genero: 'masculino' });
      expect(curp.charAt(10)).toBe('H');
    });
    
    it('debe incluir M para femenino', () => {
      const curp = generarCURP({ genero: 'femenino' });
      expect(curp.charAt(10)).toBe('M');
    });
  });
  
  describe('generarNSS', () => {
    it('debe generar un NSS válido de 11 dígitos', () => {
      const nss = generarNSS();
      
      expect(typeof nss).toBe('string');
      expect(nss).toHaveLength(11);
      expect(nss).toMatch(/^\d{11}$/);
    });
    
    it('debe generar NSS diferentes en múltiples llamadas', () => {
      const nss1 = generarNSS();
      const nss2 = generarNSS();
      const nss3 = generarNSS();
      
      const nssList = [nss1, nss2, nss3];
      const uniqueNss = new Set(nssList);
      
      // Al menos algunos deberían ser diferentes
      expect(uniqueNss.size).toBeGreaterThan(1);
    });
  });
  
  describe('generarCLABE', () => {
    it('debe generar una CLABE válida de 18 dígitos', () => {
      const clabe = generarCLABE();
      
      expect(clabe).toHaveProperty('clabe');
      expect(clabe).toHaveProperty('banco');
      expect(clabe).toHaveProperty('codigoBanco');
      
      expect(clabe.clabe).toHaveLength(18);
      expect(clabe.clabe).toMatch(/^\d{18}$/);
      expect(typeof clabe.banco).toBe('string');
      expect(typeof clabe.codigoBanco).toBe('string');
    });
    
    it('debe incluir nombre de banco', () => {
      const clabe = generarCLABE();
      expect(clabe.banco).toBeTruthy();
      expect(clabe.banco.length).toBeGreaterThan(0);
    });
  });
  
  describe('generarTelefono', () => {
    it('debe generar un teléfono válido', () => {
      const telefono = generarTelefono();
      
      expect(telefono).toHaveProperty('tipo');
      expect(telefono).toHaveProperty('lada');
      expect(telefono).toHaveProperty('numero');
      expect(telefono).toHaveProperty('completo');
      expect(telefono).toHaveProperty('formato');
      
      expect(['movil', 'fijo']).toContain(telefono.tipo);
      expect(typeof telefono.lada).toBe('string');
      expect(typeof telefono.numero).toBe('string');
      expect(typeof telefono.completo).toBe('string');
    });
    
    it('debe generar teléfono móvil cuando se especifica', () => {
      const telefono = generarTelefono({ tipo: 'movil' });
      expect(telefono.tipo).toBe('movil');
      expect(telefono.formato).toMatch(/^\+52 \d+ \d+ \d+$/);
    });
    
    it('debe generar teléfono fijo cuando se especifica', () => {
      const telefono = generarTelefono({ tipo: 'fijo' });
      expect(telefono.tipo).toBe('fijo');
      expect(telefono.formato).toMatch(/^\(\d+\) \d+-\d+$/);
    });
  });
  
  describe('generarDireccion', () => {
    it('debe generar una dirección completa', () => {
      const direccion = generarDireccion();
      
      expect(direccion).toHaveProperty('calle');
      expect(direccion).toHaveProperty('numeroExterior');
      expect(direccion).toHaveProperty('colonia');
      expect(direccion).toHaveProperty('codigoPostal');
      expect(direccion).toHaveProperty('estado');
      expect(direccion).toHaveProperty('estadoCodigo');
      expect(direccion).toHaveProperty('estadoAbreviacion');
      expect(direccion).toHaveProperty('direccionCompleta');
      
      expect(typeof direccion.calle).toBe('string');
      expect(typeof direccion.numeroExterior).toBe('string');
      expect(typeof direccion.colonia).toBe('string');
      expect(direccion.codigoPostal).toMatch(/^\d{5}$/);
      expect(typeof direccion.estado).toBe('string');
    });
    
    it('debe incluir número interior cuando se genera', () => {
      let tieneInterior = false;
      
      // Generar varias direcciones para encontrar una con interior
      for (let i = 0; i < 20; i++) {
        const direccion = generarDireccion();
        if (direccion.numeroInterior) {
          tieneInterior = true;
          expect(typeof direccion.numeroInterior).toBe('string');
          break;
        }
      }
      
      // Al menos una debería tener número interior
      expect(tieneInterior).toBe(true);
    });
    
    it('debe tener código postal de 5 dígitos', () => {
      const direccion = generarDireccion();
      expect(direccion.codigoPostal).toMatch(/^\d{5}$/);
    });
  });
  
  describe('generarEmail', () => {
    it('debe generar un email válido', () => {
      const email = generarEmail();
      
      expect(email).toHaveProperty('email');
      expect(email).toHaveProperty('usuario');
      expect(email).toHaveProperty('dominio');
      
      expect(email.email).toMatch(/^[a-z0-9._]+@[a-z0-9.]+$/);
      expect(email.email).toBe(`${email.usuario}@${email.dominio}`);
    });
    
    it('debe generar email basado en nombre', () => {
      const email = generarEmail({
        nombre: 'Juan',
        apellidoPaterno: 'García'
      });
      
      expect(email.email).toMatch(/juan/);
      expect(email.email).toMatch(/garcia/);
    });
    
    it('debe normalizar acentos en el email', () => {
      const email = generarEmail({
        nombre: 'José',
        apellidoPaterno: 'Pérez'
      });
      
      // Verificar que no tiene acentos
      expect(email.email).not.toMatch(/[áéíóúñ]/i);
      // Verificar que contiene "perez" normalizado (siempre presente en todas las variantes)
      expect(email.email).toMatch(/perez/);
      // Verificar que contiene al menos "j" (primera letra de José)
      expect(email.email).toMatch(/j/);
    });
  });
  
  describe('generarEmpresa', () => {
    it('debe generar una empresa válida', () => {
      const empresa = generarEmpresa();
      
      expect(empresa).toHaveProperty('nombreCorto');
      expect(empresa).toHaveProperty('nombreCompleto');
      expect(empresa).toHaveProperty('rfc');
      expect(empresa).toHaveProperty('tipo');
      
      expect(typeof empresa.nombreCorto).toBe('string');
      expect(typeof empresa.nombreCompleto).toBe('string');
      expect(empresa.rfc).toHaveLength(12);
      expect(empresa.rfc).toMatch(/^[A-Z]{3}\d{6}[A-Z0-9]{3}$/);
    });
    
    it('debe incluir tipo de sociedad', () => {
      const empresa = generarEmpresa();
      expect(empresa.nombreCompleto).toContain(empresa.tipo);
    });
  });
  
  describe('generarPersona', () => {
    it('debe generar una persona completa con todos los datos', () => {
      const persona = generarPersona();
      
      // Verificar propiedades básicas
      expect(persona).toHaveProperty('nombre');
      expect(persona).toHaveProperty('apellidoPaterno');
      expect(persona).toHaveProperty('apellidoMaterno');
      expect(persona).toHaveProperty('nombreCompleto');
      expect(persona).toHaveProperty('genero');
      expect(persona).toHaveProperty('fechaNacimiento');
      expect(persona).toHaveProperty('edad');
      
      // Verificar identificadores
      expect(persona).toHaveProperty('rfc');
      expect(persona).toHaveProperty('curp');
      expect(persona).toHaveProperty('nss');
      
      // Verificar contacto
      expect(persona).toHaveProperty('telefono');
      expect(persona).toHaveProperty('email');
      
      // Verificar dirección
      expect(persona).toHaveProperty('direccion');
      expect(persona).toHaveProperty('calle');
      expect(persona).toHaveProperty('numeroExterior');
      expect(persona).toHaveProperty('colonia');
      expect(persona).toHaveProperty('codigoPostal');
      expect(persona).toHaveProperty('estado');
      
      // Verificar bancario
      expect(persona).toHaveProperty('clabe');
      expect(persona).toHaveProperty('banco');
      
      // Verificar formatos
      expect(persona.rfc).toHaveLength(13);
      expect(persona.curp).toHaveLength(18);
      expect(persona.nss).toHaveLength(11);
      expect(persona.clabe).toHaveLength(18);
      expect(persona.codigoPostal).toHaveLength(5);
    });
    
    it('debe respetar el género especificado', () => {
      const personaMasculino = generarPersona({ genero: 'masculino' });
      expect(personaMasculino.genero).toBe('masculino');
      
      const personaFemenino = generarPersona({ genero: 'femenino' });
      expect(personaFemenino.genero).toBe('femenino');
    });
    
    it('debe respetar rango de edad', () => {
      const persona = generarPersona({ edadMin: 30, edadMax: 40 });
      expect(persona.edad).toBeGreaterThanOrEqual(30);
      expect(persona.edad).toBeLessThanOrEqual(40);
    });
  });
  
  describe('generarPersonas', () => {
    it('debe generar múltiples personas', () => {
      const personas = generarPersonas(10);
      
      expect(Array.isArray(personas)).toBe(true);
      expect(personas).toHaveLength(10);
      
      personas.forEach(persona => {
        expect(persona).toHaveProperty('nombre');
        expect(persona).toHaveProperty('rfc');
        expect(persona).toHaveProperty('email');
      });
    });
    
    it('debe generar cantidad correcta de personas', () => {
      const personas5 = generarPersonas(5);
      expect(personas5).toHaveLength(5);
      
      const personas50 = generarPersonas(50);
      expect(personas50).toHaveLength(50);
    });
    
    it('debe aplicar opciones a todas las personas', () => {
      const personas = generarPersonas(10, {
        genero: 'femenino',
        edadMin: 25,
        edadMax: 30
      });
      
      personas.forEach(persona => {
        expect(persona.genero).toBe('femenino');
        expect(persona.edad).toBeGreaterThanOrEqual(25);
        expect(persona.edad).toBeLessThanOrEqual(30);
      });
    });
    
    it('debe generar personas diferentes', () => {
      const personas = generarPersonas(10);
      
      const rfcs = personas.map(p => p.rfc);
      const uniqueRfcs = new Set(rfcs);
      
      // Deberían ser diferentes (o al menos la mayoría)
      expect(uniqueRfcs.size).toBeGreaterThanOrEqual(8);
    });
  });
  
  describe('getEstadisticas', () => {
    it('debe retornar estadísticas del generador', () => {
      const stats = getEstadisticas();
      
      expect(stats).toHaveProperty('version');
      expect(stats).toHaveProperty('funciones');
      expect(stats).toHaveProperty('datosDisponibles');
      
      expect(typeof stats.version).toBe('string');
      expect(Array.isArray(stats.funciones)).toBe(true);
      expect(stats.funciones.length).toBeGreaterThan(0);
    });
    
    it('debe incluir todas las funciones principales', () => {
      const stats = getEstadisticas();
      
      const funcionesEsperadas = [
        'generarNombre',
        'generarFechaNacimiento',
        'generarRFC',
        'generarCURP',
        'generarPersona',
        'generarPersonas'
      ];
      
      funcionesEsperadas.forEach(funcion => {
        expect(stats.funciones).toContain(funcion);
      });
    });
    
    it('debe incluir información de datos disponibles', () => {
      const stats = getEstadisticas();
      
      expect(stats.datosDisponibles).toHaveProperty('nombres');
      expect(stats.datosDisponibles).toHaveProperty('apellidos');
      expect(stats.datosDisponibles).toHaveProperty('estados');
      expect(stats.datosDisponibles).toHaveProperty('bancos');
      
      expect(stats.datosDisponibles.nombres).toBeGreaterThan(0);
      expect(stats.datosDisponibles.apellidos).toBeGreaterThan(0);
      expect(stats.datosDisponibles.estados).toBe(32);
      expect(stats.datosDisponibles.bancos).toBeGreaterThan(0);
    });
  });
  
  describe('Integración y consistencia', () => {
    it('los datos generados deben ser consistentes entre sí', () => {
      const persona = generarPersona();
      
      // El nombre completo debe incluir los componentes
      expect(persona.nombreCompleto).toContain(persona.nombre);
      expect(persona.nombreCompleto).toContain(persona.apellidoPaterno);
      expect(persona.nombreCompleto).toContain(persona.apellidoMaterno);
      
      // La dirección completa debe incluir los componentes
      expect(persona.direccion).toContain(persona.calle);
      expect(persona.direccion).toContain(persona.numeroExterior);
      expect(persona.direccion).toContain(persona.colonia);
      expect(persona.direccion).toContain(persona.codigoPostal);
      expect(persona.direccion).toContain(persona.estado);
    });
    
    it('debe generar datos válidos en múltiples iteraciones', () => {
      for (let i = 0; i < 100; i++) {
        const persona = generarPersona();
        
        expect(persona.rfc).toHaveLength(13);
        expect(persona.curp).toHaveLength(18);
        expect(persona.nss).toHaveLength(11);
        expect(persona.clabe).toHaveLength(18);
        expect(persona.codigoPostal).toHaveLength(5);
        expect(['masculino', 'femenino']).toContain(persona.genero);
      }
    });
  });
});
