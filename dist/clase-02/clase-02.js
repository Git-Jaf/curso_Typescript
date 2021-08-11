"use strict";
//Tipos primitivos o tipos básicos
//Boolean
var estaConectado = true;
var estadoInscrito; //fija
estadoInscrito = false;
estadoInscrito = true;
//estadoInscrito = 2; no valido
function tieneDescuento(curso) {
    if (curso === 'Typescript')
        return true;
    return false;
}
console.log("tieneDescuento('angular'):", tieneDescuento('angular'));
//Number
var estudiantes = 100;
var cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'Typescript')
        return 100;
    return 0;
}
var inscritosCursoTs = 100;
// type: Number, hexadecimales
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
// type: Number, binario
var binario = 10;
console.log('binario', binario);
//type: Number, octal
var octal = 493;
console.log('octal', octal);
//String
var nombre = 'Luis';
var apellido = 'Aviles';
var nombreCompleto = nombre + ' ' + apellido;
console.log('Nombre completo', nombreCompleto);
// String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('Nombre completo2', nombreCompleto2);
var arregloCursos = ['Typescript', 'Angular'];
var mensaje = "\nMi nombre es " + nombreCompleto + " y tengo " + arregloCursos.length + " cursos.\nGracias por asistir!\n";
console.log('Mensaje', mensaje);
// Tipos especiales en Typescript
// Tipo: any - en caso no tenga el control sobre el tipo de dato es recomendable usarlo
var desconocido; // var desconocido
desconocido = 'hola';
desconocido = 2;
var desconocido2 = 2;
// Tipo: void Se utiliza para indicar que la variable de tipo funcion no tiene un tipo definido de retorno
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : "Suscribete al curso " + curso;
    console.log('mensaje', mensaje);
}
mostrarContenido('typescript');
// Type: never - para representar errores
var nunca;
function retornaError(error) {
    throw new Error('Error typescript. ' + error);
    //Nunca retorna un valor
}
//retornaError('Valor inesperado');
function cicloInfinito() {
    while (true) {
    }
}
// Type: Null y Undefined
var variableUndefined = undefined; // Mas utilizado en JS
var variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
// Funciones typescript
function saludos(nombre) {
    if (nombre) {
        return 'Hola' + nombre;
    }
    else {
        return 'Hola!';
    }
}
console.log(saludos(nombreCompleto));
console.log(saludos());
//Arreglos en typescript
var cursos2;
cursos2 = ['Typescript', 'Angular'];
//Arreglos con Generics
var nombres;
nombres = ['Jonatan', 'Liz', 'Isabel'];
var arreglo = [2, 'cadena', true];
//Tuplas en la notacion del tipo se le indica los tipos de datos
var infoCursos = ['typescript', 100];
infoCursos = ['angular', 200];
var cursoEdTeam = ['typescript', 150, '08/2021'];
console.log('cursos EdTeam', cursoEdTeam);
var nuevosIncritos = 10;
console.log('fecha de inicio', (cursoEdTeam[2]).length);
console.log('Total inscritos', cursoEdTeam[1] + nuevosIncritos);
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);
