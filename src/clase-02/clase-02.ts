//Tipos primitivos o tipos básicos
//Boolean
let estaConectado = true;
let estadoInscrito: boolean; //fija
estadoInscrito = false;
estadoInscrito = true;
//estadoInscrito = 2; no valido

function tieneDescuento(curso: string) {
    if (curso === 'Typescript')
        return true;
    return false;
}

console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));

//Number
let estudiantes = 100;
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso: string): number {
    if (curso === 'Typescript')
        return 100;
    return 0;
}

let inscritosCursoTs: number = 100;

// type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

// type: Number, binario
let binario: number = 0b1010;
console.log('binario', binario);

//type: Number, octal
let octal: number = 0o755;
console.log('octal', octal);

//String
let nombre = 'Luis';
let apellido: String = 'Aviles';
let nombreCompleto = nombre + ' ' + apellido;
console.log('Nombre completo', nombreCompleto);

// String + ES6 Template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('Nombre completo2', nombreCompleto2);
let arregloCursos = ['Typescript', 'Angular'];
let mensaje = `
Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
Gracias por asistir!
`;
console.log('Mensaje', mensaje);

// Tipos especiales en Typescript
// Tipo: any - en caso no tenga el control sobre el tipo de dato es recomendable usarlo
let desconocido; // var desconocido
desconocido = 'hola';
desconocido = 2;
let desconocido2: any = 2;

// Tipo: void Se utiliza para indicar que la variable de tipo funcion no tiene un tipo definido de retorno
let vacio: void;
function mostrarContenido(curso: string): void {
    const mensaje = curso ? `Bienvenido al curso ${curso}` : `Suscribete al curso ${curso}`
    console.log('mensaje', mensaje);
}

mostrarContenido('typescript');

// Type: never - para representar errores
let nunca: never;
function retornaError(error: string): never {
    throw new Error('Error typescript. ' + error);
    //Nunca retorna un valor
}

//retornaError('Valor inesperado');

function cicloInfinito(): never {
    while (true) {
    }
}

// Type: Null y Undefined
let variableUndefined: undefined = undefined; // Mas utilizado en JS
let variableNull: null = null;

function retornoNull(): null {
    return null;
}

function retornoUndefined(): undefined {
    return undefined;
}

// Funciones typescript

function saludos(nombre?: string): string { //"?" al lado del parametro indica que es opcional
    if (nombre) {
        return 'Hola' + nombre;
    } else {
        return 'Hola!'
    }
}

console.log(saludos(nombreCompleto));
console.log(saludos());

//Arreglos en typescript
let cursos2: string[] 
cursos2 = ['Typescript', 'Angular'];

//Arreglos con Generics
let nombres: Array<string>;
nombres = ['Jonatan', 'Liz', 'Isabel'];
let arreglo: any = [2, 'cadena', true];

//Tuplas en la notacion del tipo se le indica los tipos de datos
let infoCursos: [string, number] = ['typescript', 100];
infoCursos = ['angular', 200];

let cursoEdTeam: [string, number, string] = ['typescript', 150, '08/2021'];
console.log('cursos EdTeam', cursoEdTeam);
let nuevosIncritos = 10;
console.log('fecha de inicio', (cursoEdTeam[2]).length);
console.log('Total inscritos', cursoEdTeam[1] + nuevosIncritos);

let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);